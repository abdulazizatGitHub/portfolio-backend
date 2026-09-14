import { prisma } from '../../../src/data/prisma.client';
import * as AboutParagraphRepository from '../../../src/data/repositories/about-paragraph.repository';

describe('About Paragraph Repository', () => {
    let sectionAId: string;
    let sectionBId: string;

    beforeAll(async () => {
        await prisma.aboutParagraph.deleteMany();
        await prisma.aboutContent.deleteMany();

        const sectionA = await prisma.aboutContent.create({
            data: { role_title: 'Section A', order_index: 0 },
        });
        const sectionB = await prisma.aboutContent.create({
            data: { role_title: 'Section B', order_index: 1 },
        });
        sectionAId = sectionA.id;
        sectionBId = sectionB.id;
    });

    afterAll(async () => {
        await prisma.aboutParagraph.deleteMany();
        await prisma.aboutContent.deleteMany();
        await prisma.$disconnect();
    });

    describe('create/findAll', () => {
        it('should create a paragraph scoped to a section', async () => {
            const paragraph = await AboutParagraphRepository.create({
                content: 'First paragraph content long enough.',
                order_index: 0,
                about_content: { connect: { id: sectionAId } },
            } as any);

            expect(paragraph).toHaveProperty('id');
            expect(paragraph.content).toContain('First paragraph');
        });

        it('should return all paragraphs when no section id is given', async () => {
            await AboutParagraphRepository.create({
                content: 'Second paragraph in a different section.',
                order_index: 0,
                about_content: { connect: { id: sectionBId } },
            } as any);

            const all = await AboutParagraphRepository.findAll();
            expect(all.length).toBeGreaterThanOrEqual(2);
        });

        it('should only return paragraphs scoped to the given section id', async () => {
            const sectionAParagraphs = await AboutParagraphRepository.findAll(sectionAId);
            expect(sectionAParagraphs.every((p) => p.about_content_id === sectionAId)).toBe(true);
        });
    });

    describe('findById/update/deleteById', () => {
        it('should find, update, and delete a paragraph', async () => {
            const created = await AboutParagraphRepository.create({
                content: 'Paragraph to update and delete.',
                order_index: 1,
                about_content: { connect: { id: sectionAId } },
            } as any);

            const found = await AboutParagraphRepository.findById(created.id);
            expect(found?.id).toBe(created.id);

            const updated = await AboutParagraphRepository.update(created.id, {
                content: 'Updated paragraph content.',
            });
            expect(updated.content).toBe('Updated paragraph content.');

            await AboutParagraphRepository.deleteById(created.id);
            const afterDelete = await AboutParagraphRepository.findById(created.id);
            expect(afterDelete).toBeNull();
        });

        it('should return null for a non-existent paragraph', async () => {
            const found = await AboutParagraphRepository.findById('00000000-0000-0000-0000-000000000000');
            expect(found).toBeNull();
        });
    });
});
