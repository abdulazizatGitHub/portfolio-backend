import { uploadImage, uploadDocument } from '../../src/core/config/multer.config';
import { BadRequestError } from '../../src/core/exceptions/app-errors';

// Multer exposes the configured fileFilter as an internal option; reaching
// into it lets us test the actual accept/reject decision directly, with no
// real socket involved. The equivalent integration-level assertion (POST a
// mismatched-mimetype file and expect 400) is intermittently flaky under
// load — an environmental client ECONNRESET race, not a logic bug (verified
// against multer's own source: it already drains the request correctly
// before responding on a filter rejection) — so this is the reliable place
// to assert the validation behavior itself.
const getFileFilter = (upload: typeof uploadImage) => (upload as any).fileFilter as (
    req: unknown,
    file: { fieldname: string; mimetype: string },
    cb: (error: Error | null, acceptFile?: boolean) => void
) => void;

describe('multer fileFilter', () => {
    const imageFilter = getFileFilter(uploadImage);
    const documentFilter = getFileFilter(uploadDocument);

    describe('image field', () => {
        it.each(['image/jpeg', 'image/png', 'image/webp'])('accepts %s', (mimetype) => {
            const cb = jest.fn();
            imageFilter({}, { fieldname: 'image', mimetype }, cb);
            expect(cb).toHaveBeenCalledWith(null, true);
        });

        it('rejects a non-image mimetype with a BadRequestError', () => {
            const cb = jest.fn();
            imageFilter({}, { fieldname: 'image', mimetype: 'application/pdf' }, cb);
            expect(cb).toHaveBeenCalledTimes(1);
            const [error] = cb.mock.calls[0]!;
            expect(error).toBeInstanceOf(BadRequestError);
            expect(error.message).toContain('Only JPEG, PNG and WEBP images are allowed');
        });

        it('accepts the same image types for the skill-icon field', () => {
            const cb = jest.fn();
            imageFilter({}, { fieldname: 'skill-icon', mimetype: 'image/png' }, cb);
            expect(cb).toHaveBeenCalledWith(null, true);
        });
    });

    describe('cv/document field', () => {
        it('accepts application/pdf', () => {
            const cb = jest.fn();
            documentFilter({}, { fieldname: 'cv', mimetype: 'application/pdf' }, cb);
            expect(cb).toHaveBeenCalledWith(null, true);
        });

        it('rejects a non-pdf mimetype with a BadRequestError', () => {
            const cb = jest.fn();
            documentFilter({}, { fieldname: 'cv', mimetype: 'image/png' }, cb);
            const [error] = cb.mock.calls[0]!;
            expect(error).toBeInstanceOf(BadRequestError);
            expect(error.message).toContain('Only PDF documents are allowed');
        });
    });

    describe('unknown field', () => {
        it('rejects any field name it does not recognize', () => {
            const cb = jest.fn();
            imageFilter({}, { fieldname: 'mystery', mimetype: 'image/png' }, cb);
            const [error] = cb.mock.calls[0]!;
            expect(error).toBeInstanceOf(BadRequestError);
            expect(error.message).toContain('Unknown upload field');
        });
    });
});
