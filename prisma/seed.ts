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
    await prisma.experienceEntry.deleteMany();
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
    await prisma.aboutContent.create({
        data: {
            role_title: 'AI/ML Engineer & Full-Stack Developer',
            heading_prefix: "About",
            heading_highlight: "Me",
            portrait_image_url: 'https://images.unsplash.com/photo-1519085185750-74071747e99c?q=80&w=1974&auto=format&fit=crop' // Placeholder portrait
        }
    });

    const paragraphs = [
        "I'm a passionate Software Engineer with expertise in Artificial Intelligence, Machine Learning, and Full-Stack Web Development. Currently working as a Frontend Developer at Inara Technologies, I bring a unique blend of AI/ML knowledge and web development skills.",
        'My journey includes groundbreaking research on GAN-based intrusion detection systems for IoT networks, developing computer vision applications like Virtual Try-On systems, and building scalable web solutions using the MERN stack. I am proficient in Python, PyTorch, TensorFlow, and modern web technologies.',
        "With a CGPA of 3.52 from COMSATS University and hands-on experience in AI/ML projects, I'm dedicated to creating innovative solutions that make a real impact. Let's collaborate and build the future together!"
    ];

    await Promise.all(
        paragraphs.map((content, index) =>
            prisma.aboutParagraph.create({ data: { content, order_index: index } })
        )
    );

    const stats = [
        { label: 'CGPA', value: '3.52' },
        { label: 'Projects', value: '10+' },
        { label: 'Experience', value: '2+' },
    ];

    await Promise.all(
        stats.map(stat =>
            prisma.stat.create({ data: { ...stat, context: 'about' } })
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
            period: 'Oct 2025 - Present',
            title: 'Frontend Developer - Inara Technologies Pvt. Limited',
            description: 'Designing responsive dashboards and admin panels with focus on usability and performance. Collaborating with backend teams to integrate RESTful APIs for seamless user experiences.',
            order_index: 0
        },
        {
            period: 'Aug 2025 - Oct 2025',
            title: 'AI/ML Intern - Omnisolve AI (Remote)',
            description: 'Contributed to Virtual Try-On E-commerce System using CP-VTON for realistic clothing simulation. Built personalized AI shopbot for intelligent, context-aware product recommendations.',
            order_index: 1
        },
        {
            period: 'Sept 2024 - June 2025',
            title: 'Research Project - IoT Intrusion Detection using GANs',
            description: 'Designed Dynamic Class-Weighted GAN (DCSW-GAN) to address class imbalance in IoT intrusion detection. Achieved improved minority-class recall on UNSW-NB15 and CICIDS-2017 datasets.',
            order_index: 2
        }
    ];

    await Promise.all(experience.map(data => prisma.experienceEntry.create({ data })));
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

    const technicalSkills = [
        { name: 'Python', slug: 'python', category: 'Backend', level: 90 },
        { name: 'JavaScript', slug: 'javascript', category: 'Fullstack', level: 85 },
        { name: 'React.js', slug: 'react', category: 'Frontend', level: 80 },
        { name: 'Node.js', slug: 'nodejs', category: 'Backend', level: 75 },
        { name: 'MongoDB', slug: 'mongodb', category: 'Database', level: 70 },
        { name: 'PostgreSQL', slug: 'postgresql', category: 'Database', level: 70 }
    ];

    const aiSkills = [
        { name: 'PyTorch', slug: 'pytorch', category: 'AI/ML', level: 85 },
        { name: 'TensorFlow', slug: 'tensorflow', category: 'AI/ML', level: 75 },
        { name: 'GANs', slug: 'gans', category: 'Research', level: 80 },
        { name: 'Computer Vision', slug: 'cv', category: 'AI/ML', level: 70 }
    ];

    const createdSkills: any = {};

    for (const skillData of [...technicalSkills, ...aiSkills]) {
        const skill = await prisma.skill.create({ data: skillData });
        createdSkills[skill.name] = skill;
    }
    console.log('✓ Created Skill Categories and Skills');

    // ====================
    // 8. Projects
    // ====================
    const projectData = [
        {
            title: 'Laboratory Management System',
            description: 'Full-stack web application with role-based authentication. Features include CRUD for inventory and secure JWT authentication.',
            repo_url: 'https://github.com/abdulazizatGitHub/Laboratory-Management-System',
            demo_url: 'https://laboratory-management-system.vercel.app/',
            featured: true,
            is_published: true,
            category_id: devCategory.id,
            skills: ['React.js', 'Node.js', 'MongoDB']
        },
        {
            title: 'IoT Intrusion Detection System',
            description: 'Designed DCSW-GAN to address class imbalance in IoT intrusion detection. Achieved improved minority-class recall on industry datasets.',
            repo_url: '#',
            featured: true,
            is_published: true,
            category_id: aiCategory.id,
            skills: ['Python', 'PyTorch', 'GANs']
        },
        {
            title: 'Virtual Try-On System',
            description: 'Deep learning-based virtual outfit try-on system using CP-VTON for realistic clothing simulation and accurate fitting.',
            repo_url: 'https://github.com/abdulazizatGitHub/virtual-try-on',
            featured: false,
            is_published: true,
            category_id: aiCategory.id,
            skills: ['PyTorch', 'Computer Vision', 'Python']
        }
    ];

    for (const data of projectData) {
        const { skills: projectSkills, ...rest } = data;
        const project = await prisma.project.create({ data: rest });

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
            { userId: adminUser.id, action: 'UPDATE', entityType: 'skill', entityName: 'PyTorch', description: 'Updated skill level for PyTorch' },
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
