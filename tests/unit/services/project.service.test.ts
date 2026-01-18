import * as projectService from '../../../src/core/services/project.service';
import * as projectRepository from '../../../src/data/repositories/project.repository';
import { NotFoundError } from '../../../src/core/exceptions/app-errors';
import { Project } from '../../../src/data/prisma.client';

jest.mock('../../../src/data/repositories/project.repository');

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

    it('should return projects', async () => {
        (projectRepository.findAll as jest.Mock).mockResolvedValue([mockProject]);
        const projects = await projectService.getAllProjects();
        expect(projects).toHaveLength(1);
        expect(projects?.[0]?.title).toBe('Project Alpha');
    });

    describe('getProjectById', () => {
        it('should return a project by ID', async () => {
            (projectRepository.findById as jest.Mock).mockResolvedValue(mockProject);
            const project = await projectService.getProjectById('proj-123');
            expect(project?.id).toBe('proj-123');
        });

        it('should throw NotFoundError if project missing', async () => {
            (projectRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(projectService.getProjectById('invalid')).rejects.toThrow(NotFoundError);
        });
    });

    describe('createProject', () => {
        it('should create project with skill associations', async () => {
            const createData = {
                title: 'New',
                description: 'desc',
                long_description: 'cont',
                category_id: 'cat-123',
                skill_ids: ['skill-1']
            };
            (projectRepository.create as jest.Mock).mockResolvedValue(mockProject as unknown as Project);

            await projectService.createProject(createData);

            expect(projectRepository.create).toHaveBeenCalledWith(expect.objectContaining({
                title: 'New',
                category: expect.any(Object),
                project_skills: expect.any(Object)
            }));
        });
    });

    describe('updateProject', () => {
        it('should update project and sync skills', async () => {
            (projectRepository.findById as jest.Mock).mockResolvedValue(mockProject);
            (projectRepository.update as jest.Mock).mockResolvedValue(mockProject as unknown as Project);

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

    describe('deleteProject', () => {
        it('should soft delete', async () => {
            (projectRepository.findById as jest.Mock).mockResolvedValue(mockProject);
            (projectRepository.softDelete as jest.Mock).mockResolvedValue(mockProject as unknown as Project);

            await projectService.deleteProject('proj-123');
            expect(projectRepository.softDelete).toHaveBeenCalledWith('proj-123');
        });
    });
});
