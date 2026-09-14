import { prisma } from '../../../src/data/prisma.client';
import * as StatRepository from '../../../src/data/repositories/stat.repository';

describe('Stat Repository', () => {
    let sectionAId: string;
    let sectionBId: string;

    beforeAll(async () => {
        await prisma.stat.deleteMany();
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
        await prisma.stat.deleteMany();
        await prisma.aboutContent.deleteMany();
        await prisma.$disconnect();
    });

    describe('create/findAll', () => {
        it('should create a stat scoped to a section', async () => {
            const stat = await StatRepository.create({
                label: 'Projects',
                value: '10+',
                order_index: 0,
                about_content: { connect: { id: sectionAId } },
            } as any);

            expect(stat).toHaveProperty('id');
            expect(stat.label).toBe('Projects');
        });

        it('should return all stats when no section id is given', async () => {
            await StatRepository.create({
                label: 'Experience',
                value: '2+',
                order_index: 1,
                about_content: { connect: { id: sectionBId } },
            } as any);

            const all = await StatRepository.findAll();
            expect(all.length).toBeGreaterThanOrEqual(2);
        });

        it('should only return stats scoped to the given section id', async () => {
            const sectionAStats = await StatRepository.findAll(sectionAId);
            expect(sectionAStats.every((s) => s.about_content_id === sectionAId)).toBe(true);
        });
    });

    describe('findById/update/deleteById', () => {
        it('should find, update, and delete a stat', async () => {
            const created = await StatRepository.create({
                label: 'CGPA',
                value: '3.5',
                order_index: 2,
                about_content: { connect: { id: sectionAId } },
            } as any);

            const found = await StatRepository.findById(created.id);
            expect(found?.id).toBe(created.id);

            const updated = await StatRepository.update(created.id, { value: '3.9' });
            expect(updated.value).toBe('3.9');

            await StatRepository.deleteById(created.id);
            const afterDelete = await StatRepository.findById(created.id);
            expect(afterDelete).toBeNull();
        });

        it('should return null for a non-existent stat', async () => {
            const found = await StatRepository.findById('00000000-0000-0000-0000-000000000000');
            expect(found).toBeNull();
        });
    });
});
