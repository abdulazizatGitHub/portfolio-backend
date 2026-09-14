import { PrismaClient } from '../src/data/generated-client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main(): Promise<void> {
    console.log('🌱 Starting database seed (Synchronizing with Frontend Mock Data)...');

    // ====================
    // 1. Clean up existing data
    // ====================
    console.log('🧹 Cleaning up existing data...');
    await prisma.socialLink.deleteMany();
    await prisma.contactInfoItem.deleteMany();
    await prisma.contactContent.deleteMany();
    await prisma.experienceRole.deleteMany();
    await prisma.experience.deleteMany();
    await prisma.educationEntry.deleteMany();
    await prisma.stat.deleteMany();
    await prisma.aboutParagraph.deleteMany();
    await prisma.aboutContent.deleteMany();
    await prisma.jobRole.deleteMany();
    await prisma.personalContent.deleteMany();
    await prisma.projectSkill.deleteMany();
    await prisma.image.deleteMany();
    await prisma.project.deleteMany();
    await prisma.skill.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();
    console.log('✓ Database cleared');

    // ====================
    // 2. Auth & User
    // ====================
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await prisma.user.create({
        data: {
            email: 'admin@portfolio.com',
            password: hashedPassword,
            name: 'Abdul Aziz',
            role: 'ADMIN',
        },
    });
    console.log('✓ Created admin user: admin@portfolio.com');

    // ====================
    // 3. Personal Content & Roles
    // ====================
    await prisma.personalContent.create({
        data: {
            name: 'Abdul Aziz',
            title_prefix: "Hi, I'm",
            description: "Passionate Software Engineer specializing in AI/ML, Deep Learning, and Full-Stack Development. Experienced in GAN-based intrusion detection systems, computer vision applications, and building scalable web solutions with MERN stack. Let's build something extraordinary together.",
            profile_image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop', // Placeholder professional porto
            cv_file_path: '/My CV (Updated).pdf',
            cv_download_name: 'Abdul-Aziz-CV.pdf',
        },
    });

    const roles = ['AI/ML Engineer', 'Software Engineer', 'Full-Stack Developer', 'Frontend Developer'];
    await Promise.all(
        roles.map((label, index) =>
            prisma.jobRole.create({ data: { label, order_index: index } })
        )
    );
    console.log('✓ Created Personal Content and Roles');

    // ====================
    // 4. About & Stats
    // ====================
    const aboutSection = await prisma.aboutContent.create({
        data: {
            role_title: 'AI/ML Engineer & Full-Stack Developer',
            heading_prefix: "About",
            heading_highlight: "Me",
            portrait_image_url: 'https://images.unsplash.com/photo-1519085185750-74071747e99c?q=80&w=1974&auto=format&fit=crop', // Placeholder portrait
            order_index: 0,
        }
    });

    const paragraphs = [
        "I'm a passionate Software Engineer with expertise in Artificial Intelligence, Machine Learning, and Full-Stack Web Development. Currently working as a Frontend Developer at Inara Technologies, I bring a unique blend of AI/ML knowledge and web development skills.",
        'My journey includes groundbreaking research on GAN-based intrusion detection systems for IoT networks, developing computer vision applications like Virtual Try-On systems, and building scalable web solutions using the MERN stack. I am proficient in Python, PyTorch, TensorFlow, and modern web technologies.',
        "With a CGPA of 3.52 from COMSATS University and hands-on experience in AI/ML projects, I'm dedicated to creating innovative solutions that make a real impact. Let's collaborate and build the future together!"
    ];

    await Promise.all(
        paragraphs.map((content, index) =>
            prisma.aboutParagraph.create({ data: { content, order_index: index, about_content_id: aboutSection.id } })
        )
    );

    const stats = [
        { label: 'CGPA', value: '3.52' },
        { label: 'Projects', value: '10+' },
        { label: 'Experience', value: '2+' },
    ];

    await Promise.all(
        stats.map((stat, index) =>
            prisma.stat.create({ data: { ...stat, order_index: index, about_content_id: aboutSection.id } })
        )
    );
    console.log('✓ Created About Section and Stats');

    // ====================
    // 5. Timeline (Education & Experience)
    // ====================
    const education = [
        {
            period: '2017 - 2019',
            title: 'Matriculation (Science) - FG Public School Batkhela',
            description: 'Completed secondary education with excellent grades (1009/1100), building a strong foundation in science subjects that sparked my interest in technology and innovation.',
            order_index: 0
        },
        {
            period: '2019 - 2021',
            title: 'Intermediate (Pre-Engineering) - Islamia College Peshawar',
            description: 'Pursued Pre-Engineering with marks of 814/1100. Served as Monitor of Osmania Hostel and member of the Management Team, developing leadership and teamwork skills.',
            order_index: 1
        },
        {
            period: '2021 - 2025',
            title: 'Bachelor of Science in Software Engineering - COMSATS University',
            description: 'Graduated with CGPA 3.52/4.00 from COMSATS University Islamabad, Abbottabad Campus. Specialized in AI/ML, Deep Learning, and Full-Stack Development with groundbreaking research on GAN-based intrusion detection systems.',
            order_index: 2
        }
    ];

    await Promise.all(education.map(data => prisma.educationEntry.create({ data })));

    const experience = [
        {
            organization: 'Inara Technologies Pvt. Limited',
            location: 'Remote',
            employment_type: 'FULL_TIME' as const,
            summary: 'Designing responsive dashboards and admin panels with focus on usability and performance.',
            order_index: 0,
            roles: [
                {
                    job_title: 'Frontend Developer',
                    start_date: new Date('2025-10-01'),
                    end_date: null,
                    description: 'Designing responsive dashboards and admin panels with focus on usability and performance. Collaborating with backend teams to integrate RESTful APIs for seamless user experiences.',
                    order_index: 0,
                },
            ],
        },
        {
            organization: 'Omnisolve AI',
            location: 'Remote',
            employment_type: 'INTERNSHIP' as const,
            summary: 'AI/ML internship focused on generative and recommendation systems.',
            order_index: 1,
            roles: [
                {
                    job_title: 'AI/ML Intern',
                    start_date: new Date('2025-08-01'),
                    end_date: new Date('2025-10-01'),
                    description: 'Contributed to Virtual Try-On E-commerce System using CP-VTON for realistic clothing simulation. Built personalized AI shopbot for intelligent, context-aware product recommendations.',
                    order_index: 0,
                },
            ],
        },
        {
            organization: 'COMSATS University Islamabad',
            location: 'Abbottabad, Pakistan',
            employment_type: 'OTHER' as const,
            summary: 'Undergraduate research project on IoT intrusion detection using generative adversarial networks.',
            order_index: 2,
            roles: [
                {
                    job_title: 'Research Project - IoT Intrusion Detection using GANs',
                    start_date: new Date('2024-09-01'),
                    end_date: new Date('2025-06-01'),
                    description: 'Designed Dynamic Class-Weighted GAN (DCSW-GAN) to address class imbalance in IoT intrusion detection. Achieved improved minority-class recall on UNSW-NB15 and CICIDS-2017 datasets.',
                    order_index: 0,
                },
            ],
        },
    ];

    for (const { roles: expRoles, ...organization } of experience) {
        await prisma.experience.create({
            data: {
                ...organization,
                roles: { create: expRoles },
            },
        });
    }
    console.log('✓ Created Education and Experience entries');

    // ====================
    // 6. Contact & Socials
    // ====================
    await prisma.contactContent.create({
        data: {
            subtitle: "Let's connect and build the future together!",
            info_title: "Contact Information",
            info_description: "Feel free to reach out to me through any of the following channels:",
            success_title: "Message Sent!",
            success_message: "Thank you for reaching out. I will get back to you as soon as possible."
        }
    });

    const contactItems = [
        { type: 'email', label: 'Email', value: 'abdulazizk1430@gmail.com', href: 'mailto:abdulazizk1430@gmail.com', order_index: 0 },
        { type: 'phone', label: 'Phone', value: '+92 341 6988051', href: 'tel:+923416988051', order_index: 1 },
        { type: 'location', label: 'Location', value: 'G15 Islamabad, Pakistan', href: null, order_index: 2 }
    ];
    await Promise.all(contactItems.map(data => prisma.contactInfoItem.create({ data })));

    const socials = [
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/abdulaziz-dev/', order_index: 0 },
        { platform: 'GitHub', url: 'https://github.com/abdulazizatGitHub', order_index: 1 }
    ];
    await Promise.all(socials.map(data => prisma.socialLink.create({ data })));
    console.log('✓ Created Contact Content, Info Items, and Social Links');

    // ====================
    // 7. Categories & Skills
    // ====================
    const devCategory = await prisma.category.create({
        data: { name: 'Software Development', slug: 'software-development', description: 'Full-stack development and software engineering', order_index: 0 }
    });
    const aiCategory = await prisma.category.create({
        data: { name: 'AI & Machine Learning', slug: 'ai-ml', description: 'Deep Learning, GANs, and Computer Vision', order_index: 1 }
    });

    // Matches the technical/ai skill lists rendered on the public portfolio
    // (portfolio-frontend/src/data/mockData.js SKILLS_CONTENT) so the public
    // site's Skills section is fully backed by real data, not the fallback.
    const technicalSkills = [
        { name: 'Python', slug: 'python', category: 'Backend', level: 95 },
        { name: 'JavaScript', slug: 'javascript', category: 'Fullstack', level: 90 },
        { name: 'React.js', slug: 'react', category: 'Frontend', level: 92 },
        { name: 'Node.js & Express', slug: 'nodejs-express', category: 'Backend', level: 88 },
        { name: 'MongoDB', slug: 'mongodb', category: 'Database', level: 85 },
        { name: 'SQL & PostgreSQL', slug: 'sql-postgresql', category: 'Database', level: 82 },
        { name: 'Java & C++', slug: 'java-cpp', category: 'Backend', level: 78 },
        { name: 'Git & GitHub', slug: 'git-github', category: 'Tools', level: 90 },
    ];

    const aiSkills = [
        { name: 'PyTorch & Deep Learning', slug: 'pytorch-deep-learning', category: 'AI/ML', level: 93 },
        { name: 'TensorFlow & Keras', slug: 'tensorflow-keras', category: 'AI/ML', level: 88 },
        { name: 'GANs & Computer Vision', slug: 'gans-computer-vision', category: 'AI/ML', level: 90 },
        { name: 'NLP & Transformers', slug: 'nlp-transformers', category: 'AI/ML', level: 85 },
        { name: 'OpenCV & Image Processing', slug: 'opencv-image-processing', category: 'AI/ML', level: 87 },
        { name: 'Flask & FastAPI', slug: 'flask-fastapi', category: 'AI/ML', level: 86 },
        { name: 'IoT Security & IDS', slug: 'iot-security-ids', category: 'AI/ML', level: 88 },
    ];

    const createdSkills: any = {};

    for (const [index, skillData] of [...technicalSkills, ...aiSkills].entries()) {
        const skill = await prisma.skill.create({ data: { ...skillData, order_index: index } });
        createdSkills[skill.name] = skill;
    }
    console.log('✓ Created Skill Categories and Skills');

    // ====================
    // 8. Projects
    // ====================
    // Matches PROJECTS_DATA in portfolio-frontend/src/data/mockData.js (all 5
    // projects the public site renders). Casual tech tags from the mock data
    // ('MERN Stack', 'ML', etc.) are mapped onto the closest real Skill
    // records above, since the backend models tech stack as a relation to
    // actual Skill rows rather than free-text tags.
    const projectData = [
        {
            title: 'Laboratory Management System',
            short_description: 'Full-stack lab inventory system with role-based authentication.',
            description: 'Full-stack web application with role-based authentication for Admin, Staff, and Patients. Features include CRUD operations for inventory, lab users, and secure JWT authentication with scalable architecture.',
            repo_url: 'https://github.com/abdulazizatGitHub/Laboratory-Management-System',
            demo_url: 'https://laboratory-management-system.vercel.app/',
            status: 'LIVE' as const,
            featured: true,
            is_published: true,
            category_id: devCategory.id,
            skills: ['React.js', 'Node.js & Express', 'MongoDB']
        },
        {
            title: 'E-Commerce Platform',
            short_description: 'Full-stack e-commerce app with cart, checkout, and admin panel.',
            description: 'Full-stack e-commerce application with product browsing, cart management, checkout flow, and comprehensive admin panel. Implemented RESTful APIs and structured database design for scalability.',
            repo_url: 'https://github.com/abdulazizatGitHub/E-Commerce-Application',
            status: 'LIVE' as const,
            featured: false,
            is_published: true,
            category_id: devCategory.id,
            skills: ['React.js', 'Node.js & Express', 'MongoDB']
        },
        {
            title: 'IoT Intrusion Detection System',
            short_description: 'GAN-based intrusion detection for imbalanced IoT network traffic.',
            description: 'Designed Dynamic Class-Weighted GAN (DCSW-GAN) to address class imbalance in IoT intrusion detection. Implemented log-based adaptive loss weighting strategy achieving improved minority-class recall on UNSW-NB15 and CICIDS-2017 datasets.',
            status: 'ARCHIVED' as const,
            featured: true,
            is_published: true,
            category_id: aiCategory.id,
            skills: ['Python', 'PyTorch & Deep Learning', 'GANs & Computer Vision', 'IoT Security & IDS']
        },
        {
            title: 'Virtual Try-On System',
            short_description: 'Deep learning virtual outfit try-on with realistic clothing simulation.',
            description: 'Deep learning-based virtual outfit try-on system using CP-VTON for realistic clothing simulation. Implemented image segmentation and computer vision techniques for accurate fitting visualization.',
            repo_url: 'https://github.com/abdulazizatGitHub/virtual-try-on',
            status: 'DEVELOPMENT' as const,
            featured: false,
            is_published: true,
            category_id: aiCategory.id,
            skills: ['PyTorch & Deep Learning', 'GANs & Computer Vision', 'Python']
        },
        {
            title: 'PantryMind',
            short_description: 'AI-powered pantry and recipe management with NLP ingredient parsing.',
            description: 'AI-powered pantry and recipe management platform using NLP for ingredient parsing and ML-based recommendation system for personalized recipe generation and meal planning.',
            repo_url: 'https://github.com/abdulazizatGitHub/PantryMind',
            status: 'DEVELOPMENT' as const,
            featured: false,
            is_published: true,
            category_id: aiCategory.id,
            skills: ['Python', 'Flask & FastAPI', 'NLP & Transformers']
        }
    ];

    for (const [index, data] of projectData.entries()) {
        const { skills: projectSkills, ...rest } = data;
        const project = await prisma.project.create({
            data: { ...rest, order_index: index, thumbnail_url: `https://picsum.photos/seed/${rest.title}/800/600` },
        });

        // Add skill relationships
        for (const skillName of projectSkills) {
            if (createdSkills[skillName]) {
                await prisma.projectSkill.create({
                    data: { project_id: project.id, skill_id: createdSkills[skillName].id }
                });
            }
        }

        // Add dummy thumbnail
        await prisma.image.create({
            data: {
                project_id: project.id,
                url: `https://picsum.photos/seed/${project.title}/800/600`,
                alt_text: project.title,
                is_thumbnail: true
            }
        });
    }
    console.log('✓ Created Projects and Mapped Skills');

    // ====================
    // 9. Activity Logs (Historical context)
    // ====================
    const adminUser = await prisma.user.findFirst({ where: { role: 'ADMIN' } });
    if (adminUser) {
        const activities = [
            { userId: adminUser.id, action: 'UPDATE', entityType: 'identity', entityName: 'Personal Identity', description: 'Updated professional identity (name, description, or imagery)' },
            { userId: adminUser.id, action: 'CREATE', entityType: 'project', entityName: 'Virtual Try-On System', description: 'Created project "Virtual Try-On System"' },
            { userId: adminUser.id, action: 'UPDATE', entityType: 'skill', entityName: 'PyTorch & Deep Learning', description: 'Updated skill level for PyTorch & Deep Learning' },
            { userId: adminUser.id, action: 'PUBLISH', entityType: 'project', entityName: 'IoT Intrusion Detection System', description: 'Published project "IoT Intrusion Detection System"' },
        ];

        for (const act of activities) {
            await prisma.activityLog.create({
                data: {
                    user_id: act.userId,
                    action: act.action,
                    entity_type: act.entityType,
                    entity_name: act.entityName,
                    description: act.description,
                }
            });
        }
    }
    console.log('✓ Created initial Activity Logs');

    console.log('\n🚀 Database Seeded with Abdul Aziz Portfolio Data!');
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
