import * as projectService from '../../../src/core/services/project.service';
import * as projectRepository from '../../../src/data/repositories/project.repository';
import * as categoryRepository from '../../../src/data/repositories/category.repository';
import * as skillRepository from '../../../src/data/repositories/skill.repository';
import { NotFoundError, BadRequestError } from '../../../src/core/exceptions/app-errors';

jest.mock('../../../src/data/repositories/project.repository');
jest.mock('../../../src/data/repositories/category.repository');
jest.mock('../../../src/data/repositories/skill.repository');

describe('Project Service', () => {
    const mockProject: any = {
        id: 'proj-123',
        title: 'Project Alpha',
        description: 'A test project',
        long_description: 'Long content',
        demo_url: 'https://live.com',
        repo_url: 'https://github.com',
        is_published: true,
        featured: false,
        order_index: 0,
        category_id: 'cat-123',
        deleted_at: null,
        created_at: new Date(),
        updated_at: new Date(),
        category: { id: 'cat-123', name: 'Web', slug: 'web' },
        images: [],
        project_skills: [
            {
                skill: { id: 'skill-1', name: 'React', slug: 'react', icon_url: null, category: 'Frontend' }
            }
        ]
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('getAllProjects', () => {
        it('should return projects and total count', async () => {
            (projectRepository.findAll as jest.Mock).mockResolvedValue([mockProject]);
            (projectRepository.count as jest.Mock).mockResolvedValue(1);

            const result = await projectService.getAllProjects({ page: 1, limit: 10 });

            expect(result.projects).toEqual([mockProject]);
            expect(result.total).toBe(1);
            expect(projectRepository.findAll).toHaveBeenCalledWith(expect.objectContaining({ skip: 0, take: 10 }));
        });
    });

    describe('getProjectById', () => {
        it('should return a project by ID', async () => {
            (projectRepository.findById as jest.Mock).mockResolvedValue(mockProject);
            const project = await projectService.getProjectById('proj-123');
            expect(project.id).toBe('proj-123');
        });

        it('should throw NotFoundError if project missing', async () => {
            (projectRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(projectService.getProjectById('invalid')).rejects.toThrow(NotFoundError);
        });
    });

    describe('createProject', () => {
        it('should create project after validating dependencies', async () => {
            const createData = {
                title: 'New',
                description: 'A sufficiently long description for validation',
                long_description: 'cont',
                category_id: 'cat-123',
                skill_ids: ['skill-1']
            };
            (categoryRepository.findById as jest.Mock).mockResolvedValue({ id: 'cat-123' });
            (skillRepository.findById as jest.Mock).mockResolvedValue({ id: 'skill-1' });
            (projectRepository.create as jest.Mock).mockResolvedValue(mockProject);

            const project = await projectService.createProject(createData);

            expect(categoryRepository.findById).toHaveBeenCalledWith('cat-123');
            expect(skillRepository.findById).toHaveBeenCalledWith('skill-1');
            expect(projectRepository.create).toHaveBeenCalled();
            expect(project.title).toBe(mockProject.title);
        });

        it('should throw BadRequestError if category not found', async () => {
            (categoryRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(projectService.createProject({
                title: 'Fail',
                description: 'desc',
                category_id: 'invalid'
            } as any)).rejects.toThrow(BadRequestError);
        });
    });

    describe('updateProject', () => {
        it('should update project and sync skills', async () => {
            (projectRepository.findById as jest.Mock).mockResolvedValue(mockProject);
            (categoryRepository.findById as jest.Mock).mockResolvedValue({ id: 'cat-123' });
            (skillRepository.findById as jest.Mock).mockResolvedValue({ id: 'skill-2' });
            (projectRepository.update as jest.Mock).mockResolvedValue(mockProject);

            await projectService.updateProject('proj-123', {
                title: 'Updated',
                skill_ids: ['skill-2']
            });

            expect(projectRepository.update).toHaveBeenCalledWith('proj-123', expect.objectContaining({
                title: 'Updated',
                project_skills: expect.any(Object)
            }));
        });
    });

    describe('restoreProject', () => {
        it('should restore a soft-deleted project', async () => {
            const deletedProject = { ...mockProject, deleted_at: new Date() };
            (projectRepository.findById as jest.Mock).mockResolvedValue(deletedProject);
            (projectRepository.restore as jest.Mock).mockResolvedValue(mockProject);

            const result = await projectService.restoreProject('proj-123');
            expect(result.deleted_at).toBeNull();
            expect(projectRepository.restore).toHaveBeenCalledWith('proj-123');
        });
    });

    describe('deleteProject', () => {
        it('should soft delete', async () => {
            (projectRepository.findById as jest.Mock).mockResolvedValue(mockProject);
            (projectRepository.softDelete as jest.Mock).mockResolvedValue(mockProject);

            await projectService.deleteProject('proj-123');
            expect(projectRepository.softDelete).toHaveBeenCalledWith('proj-123');
        });
    });
});
