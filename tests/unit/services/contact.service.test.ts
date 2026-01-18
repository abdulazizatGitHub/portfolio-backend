import * as contactService from '../../../src/core/services/contact.service';
import * as contactRepository from '../../../src/data/repositories/contact.repository';
import * as infoRepository from '../../../src/data/repositories/contact-info.repository';
import * as socialRepository from '../../../src/data/repositories/social-link.repository';
import { NotFoundError } from '../../../src/core/exceptions/app-errors';

jest.mock('../../../src/data/repositories/contact.repository');
jest.mock('../../../src/data/repositories/contact-info.repository');
jest.mock('../../../src/data/repositories/social-link.repository');

describe('Contact Service', () => {
    const mockContent = { id: 'c-1', subtitle: 'Get in touch', success_title: 'Sent!', success_message: 'Thanks...' };
    const mockInfo = { id: 'i-1', type: 'email', label: 'Email', value: 'a@b.com' };
    const mockSocial = { id: 's-1', platform: 'GitHub', url: 'https://github.com' };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('getContactData', () => {
        it('should return aggregated data if content exists', async () => {
            (contactRepository.findFirst as jest.Mock).mockResolvedValue(mockContent);
            (infoRepository.findAll as jest.Mock).mockResolvedValue([mockInfo]);
            (socialRepository.findAll as jest.Mock).mockResolvedValue([mockSocial]);

            const result = await contactService.getContactData();

            expect(result.subtitle).toBe(mockContent.subtitle);
            expect(result.infoItems).toHaveLength(1);
            expect(result.socialLinks).toHaveLength(1);
        });

        it('should throw NotFoundError if no metadata', async () => {
            (contactRepository.findFirst as jest.Mock).mockResolvedValue(null);
            await expect(contactService.getContactData()).rejects.toThrow(NotFoundError);
        });
    });

    describe('Info Item Management', () => {
        it('should create info item', async () => {
            (infoRepository.create as jest.Mock).mockResolvedValue(mockInfo);
            const result = await contactService.createInfoItem({ type: 'x', label: 'y', value: 'z' });
            expect(result).toEqual(mockInfo);
        });

        it('should throw on update if missing', async () => {
            (infoRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(contactService.updateInfoItem('invalid', {})).rejects.toThrow(NotFoundError);
        });
    });

    describe('Social Link Management', () => {
        it('should create social link', async () => {
            (socialRepository.create as jest.Mock).mockResolvedValue(mockSocial);
            const result = await contactService.createSocialLink({ platform: 'p', url: 'u' });
            expect(result).toEqual(mockSocial);
        });

        it('should throw on delete if missing', async () => {
            (socialRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(contactService.deleteSocialLink('invalid')).rejects.toThrow(NotFoundError);
        });
    });
});
