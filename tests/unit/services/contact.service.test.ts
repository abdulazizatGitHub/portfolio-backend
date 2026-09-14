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

    describe('updateContactContent', () => {
        it('should create content if none exists', async () => {
            (contactRepository.findFirst as jest.Mock).mockResolvedValue(null);
            (contactRepository.create as jest.Mock).mockResolvedValue(mockContent);

            const result = await contactService.updateContactContent({ subtitle: 'New' });
            expect(result).toEqual(mockContent);
            expect(contactRepository.create).toHaveBeenCalled();
        });

        it('should update existing content', async () => {
            (contactRepository.findFirst as jest.Mock).mockResolvedValue(mockContent);
            (contactRepository.update as jest.Mock).mockResolvedValue({ ...mockContent, subtitle: 'Updated' });

            const result = await contactService.updateContactContent({ subtitle: 'Updated' });
            expect(result.subtitle).toBe('Updated');
            expect(contactRepository.update).toHaveBeenCalledWith(mockContent.id, { subtitle: 'Updated' });
        });
    });

    describe('Info Item Management', () => {
        it('should create info item', async () => {
            (infoRepository.create as jest.Mock).mockResolvedValue(mockInfo);
            const result = await contactService.createInfoItem({ type: 'x', label: 'y', value: 'z' });
            expect(result).toEqual(mockInfo);
        });

        it('should return info item by id', async () => {
            (infoRepository.findById as jest.Mock).mockResolvedValue(mockInfo);
            const result = await contactService.getInfoItemById('i-1');
            expect(result).toEqual(mockInfo);
        });

        it('should throw NotFoundError getting a missing info item', async () => {
            (infoRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(contactService.getInfoItemById('invalid')).rejects.toThrow(NotFoundError);
        });

        it('should throw on update if missing', async () => {
            (infoRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(contactService.updateInfoItem('invalid', {})).rejects.toThrow(NotFoundError);
        });

        it('should update an existing info item', async () => {
            (infoRepository.findById as jest.Mock).mockResolvedValue(mockInfo);
            (infoRepository.update as jest.Mock).mockResolvedValue({ ...mockInfo, label: 'New' });

            const result = await contactService.updateInfoItem('i-1', { label: 'New' });
            expect(result.label).toBe('New');
        });

        it('should throw on delete if missing', async () => {
            (infoRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(contactService.deleteInfoItem('invalid')).rejects.toThrow(NotFoundError);
        });

        it('should delete an existing info item', async () => {
            (infoRepository.findById as jest.Mock).mockResolvedValue(mockInfo);
            (infoRepository.deleteById as jest.Mock).mockResolvedValue(mockInfo);

            const result = await contactService.deleteInfoItem('i-1');
            expect(result).toEqual(mockInfo);
        });
    });

    describe('Social Link Management', () => {
        it('should create social link', async () => {
            (socialRepository.create as jest.Mock).mockResolvedValue(mockSocial);
            const result = await contactService.createSocialLink({ platform: 'p', url: 'u' });
            expect(result).toEqual(mockSocial);
        });

        it('should return social link by id', async () => {
            (socialRepository.findById as jest.Mock).mockResolvedValue(mockSocial);
            const result = await contactService.getSocialLinkById('s-1');
            expect(result).toEqual(mockSocial);
        });

        it('should throw NotFoundError getting a missing social link', async () => {
            (socialRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(contactService.getSocialLinkById('invalid')).rejects.toThrow(NotFoundError);
        });

        it('should throw on update if missing', async () => {
            (socialRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(contactService.updateSocialLink('invalid', {})).rejects.toThrow(NotFoundError);
        });

        it('should update an existing social link', async () => {
            (socialRepository.findById as jest.Mock).mockResolvedValue(mockSocial);
            (socialRepository.update as jest.Mock).mockResolvedValue({ ...mockSocial, url: 'https://new.com' });

            const result = await contactService.updateSocialLink('s-1', { url: 'https://new.com' });
            expect(result.url).toBe('https://new.com');
        });

        it('should throw on delete if missing', async () => {
            (socialRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(contactService.deleteSocialLink('invalid')).rejects.toThrow(NotFoundError);
        });

        it('should delete an existing social link', async () => {
            (socialRepository.findById as jest.Mock).mockResolvedValue(mockSocial);
            (socialRepository.deleteById as jest.Mock).mockResolvedValue(mockSocial);

            const result = await contactService.deleteSocialLink('s-1');
            expect(result).toEqual(mockSocial);
        });
    });
});
