import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main(): Promise<void> {
    console.log('🌱 Starting database seed...');

    // Clean up existing data (in reverse order of dependencies)
    await prisma.projectSkill.deleteMany();
    await prisma.image.deleteMany();
    await prisma.project.deleteMany();
    await prisma.skill.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();

    console.log('✓ Cleaned up existing data');

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = await prisma.user.create({
        data: {
            email: 'admin@portfolio.com',
            password: hashedPassword,
            name: 'Admin User',
            role: 'ADMIN',
        },
    });
    console.log('✓ Created admin user:', admin.email);

    // Create categories
    const categories = await Promise.all([
        prisma.category.create({
            data: {
                name: 'Web Development',
                slug: 'web-development',
                description: 'Full-stack web applications and websites',
                order_index: 1,
            },
        }),
        prisma.category.create({
            data: {
                name: 'Mobile Apps',
                slug: 'mobile-apps',
                description: 'Native and cross-platform mobile applications',
                order_index: 2,
            },
        }),
        prisma.category.create({
            data: {
                name: 'Design',
                slug: 'design',
                description: 'UI/UX design and visual assets',
                order_index: 3,
            },
        }),
        prisma.category.create({
            data: {
                name: 'Data Science',
                slug: 'data-science',
                description: 'Data analysis, ML models, and visualization',
                order_index: 4,
            },
        }),
    ]);
    console.log(`✓ Created ${categories.length} categories`);

    // Create skills
    const skills = await Promise.all([
        // Frontend
        prisma.skill.create({
            data: {
                name: 'React',
                slug: 'react',
                category: 'Frontend',
                icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            },
        }),
        prisma.skill.create({
            data: {
                name: 'TypeScript',
                slug: 'typescript',
                category: 'Frontend',
                icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            },
        }),
        prisma.skill.create({
            data: {
                name: 'Next.js',
                slug: 'nextjs',
                category: 'Frontend',
                icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
            },
        }),
        prisma.skill.create({
            data: {
                name: 'Tailwind CSS',
                slug: 'tailwindcss',
                category: 'Frontend',
                icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
            },
        }),
        // Backend
        prisma.skill.create({
            data: {
                name: 'Node.js',
                slug: 'nodejs',
                category: 'Backend',
                icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            },
        }),
        prisma.skill.create({
            data: {
                name: 'Express',
                slug: 'express',
                category: 'Backend',
                icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
            },
        }),
        prisma.skill.create({
            data: {
                name: 'PostgreSQL',
                slug: 'postgresql',
                category: 'Backend',
                icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
            },
        }),
        prisma.skill.create({
            data: {
                name: 'Prisma',
                slug: 'prisma',
                category: 'Backend',
                icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
            },
        }),
        // DevOps
        prisma.skill.create({
            data: {
                name: 'Docker',
                slug: 'docker',
                category: 'DevOps',
                icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
            },
        }),
        prisma.skill.create({
            data: {
                name: 'Git',
                slug: 'git',
                category: 'DevOps',
                icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            },
        }),
        // Mobile
        prisma.skill.create({
            data: {
                name: 'React Native',
                slug: 'react-native',
                category: 'Mobile',
                icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            },
        }),
        // Other
        prisma.skill.create({
            data: {
                name: 'Python',
                slug: 'python',
                category: 'Backend',
                icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            },
        }),
    ]);
    console.log(`✓ Created ${skills.length} skills`);

    // Create sample projects
    const project1 = await prisma.project.create({
        data: {
            title: 'E-Commerce Platform',
            description: 'Full-stack online store with payment integration',
            long_description:
                'A complete e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, and Stripe payment integration.',
            demo_url: 'https://demo.example.com',
            repo_url: 'https://github.com/example/ecommerce',
            featured: true,
            is_published: true,
            order_index: 1,
            category_id: categories[0].id, // Web Development
        },
    });

    // Add skills to project 1
    await Promise.all([
        prisma.projectSkill.create({
            data: { project_id: project1.id, skill_id: skills[0].id }, // React
        }),
        prisma.projectSkill.create({
            data: { project_id: project1.id, skill_id: skills[1].id }, // TypeScript
        }),
        prisma.projectSkill.create({
            data: { project_id: project1.id, skill_id: skills[4].id }, // Node.js
        }),
        prisma.projectSkill.create({
            data: { project_id: project1.id, skill_id: skills[6].id }, // PostgreSQL
        }),
    ]);

    // Add images to project 1
    await Promise.all([
        prisma.image.create({
            data: {
                project_id: project1.id,
                url: 'https://picsum.photos/800/600?random=1',
                alt_text: 'E-Commerce Platform Homepage',
                is_thumbnail: true,
                order_index: 1,
            },
        }),
        prisma.image.create({
            data: {
                project_id: project1.id,
                url: 'https://picsum.photos/800/600?random=2',
                alt_text: 'Product Catalog',
                is_thumbnail: false,
                order_index: 2,
            },
        }),
    ]);

    const project2 = await prisma.project.create({
        data: {
            title: 'Task Management App',
            description: 'Modern project management tool with real-time collaboration',
            long_description:
                'A Trello-like task management application with drag-and-drop functionality, real-time updates using WebSockets, and team collaboration features.',
            demo_url: 'https://tasks.example.com',
            repo_url: 'https://github.com/example/task-manager',
            featured: true,
            is_published: true,
            order_index: 2,
            category_id: categories[0].id, // Web Development
        },
    });

    // Add skills to project 2
    await Promise.all([
        prisma.projectSkill.create({
            data: { project_id: project2.id, skill_id: skills[2].id }, // Next.js
        }),
        prisma.projectSkill.create({
            data: { project_id: project2.id, skill_id: skills[3].id }, // Tailwind CSS
        }),
        prisma.projectSkill.create({
            data: { project_id: project2.id, skill_id: skills[7].id }, // Prisma
        }),
    ]);

    // Add image to project 2
    await prisma.image.create({
        data: {
            project_id: project2.id,
            url: 'https://picsum.photos/800/600?random=3',
            alt_text: 'Task Management Dashboard',
            is_thumbnail: true,
            order_index: 1,
        },
    });

    const project3 = await prisma.project.create({
        data: {
            title: 'Mobile Fitness Tracker',
            description: 'Cross-platform fitness tracking mobile application',
            long_description:
                'A React Native mobile app for tracking workouts, nutrition, and fitness goals. Features include workout plans, progress charts, and social sharing.',
            demo_url: null,
            repo_url: 'https://github.com/example/fitness-tracker',
            featured: false,
            is_published: true,
            order_index: 3,
            category_id: categories[1].id, // Mobile Apps
        },
    });

    // Add skills to project 3
    await Promise.all([
        prisma.projectSkill.create({
            data: { project_id: project3.id, skill_id: skills[10].id }, // React Native
        }),
        prisma.projectSkill.create({
            data: { project_id: project3.id, skill_id: skills[1].id }, // TypeScript
        }),
    ]);

    // Add image to project 3
    await prisma.image.create({
        data: {
            project_id: project3.id,
            url: 'https://picsum.photos/400/800?random=4',
            alt_text: 'Fitness Tracker Mobile UI',
            is_thumbnail: true,
            order_index: 1,
        },
    });

    console.log('✓ Created 3 sample projects with images and skills');

    console.log('\n✅ Database seeded successfully!');
    console.log('\n📊 Summary:');
    console.log(`  - Users: 1`);
    console.log(`  - Categories: ${categories.length}`);
    console.log(`  - Skills: ${skills.length}`);
    console.log(`  - Projects: 3`);
    console.log('\n🔐 Admin credentials:');
    console.log('  Email: admin@portfolio.com');
    console.log('  Password: admin123');
    console.log('\n⚠️  Remember to change the admin password after first login!');
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
