
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  name: 'name',
  role: 'role',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  description: 'description',
  order_index: 'order_index',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SkillScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  icon_url: 'icon_url',
  category: 'category',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  long_description: 'long_description',
  demo_url: 'demo_url',
  repo_url: 'repo_url',
  featured: 'featured',
  is_published: 'is_published',
  order_index: 'order_index',
  category_id: 'category_id',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ImageScalarFieldEnum = {
  id: 'id',
  project_id: 'project_id',
  url: 'url',
  alt_text: 'alt_text',
  is_thumbnail: 'is_thumbnail',
  order_index: 'order_index',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ProjectSkillScalarFieldEnum = {
  project_id: 'project_id',
  skill_id: 'skill_id',
  created_at: 'created_at'
};

exports.Prisma.PersonalContentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  title_prefix: 'title_prefix',
  description: 'description',
  cv_file_path: 'cv_file_path',
  cv_download_name: 'cv_download_name',
  updated_at: 'updated_at'
};

exports.Prisma.JobRoleScalarFieldEnum = {
  id: 'id',
  label: 'label',
  order_index: 'order_index',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AboutContentScalarFieldEnum = {
  id: 'id',
  role_title: 'role_title',
  updated_at: 'updated_at'
};

exports.Prisma.AboutParagraphScalarFieldEnum = {
  id: 'id',
  content: 'content',
  order_index: 'order_index',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.StatScalarFieldEnum = {
  id: 'id',
  label: 'label',
  value: 'value',
  context: 'context',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.EducationEntryScalarFieldEnum = {
  id: 'id',
  period: 'period',
  title: 'title',
  description: 'description',
  order_index: 'order_index',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ExperienceEntryScalarFieldEnum = {
  id: 'id',
  period: 'period',
  title: 'title',
  description: 'description',
  order_index: 'order_index',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ContactContentScalarFieldEnum = {
  id: 'id',
  subtitle: 'subtitle',
  success_title: 'success_title',
  success_message: 'success_message',
  updated_at: 'updated_at'
};

exports.Prisma.ContactInfoItemScalarFieldEnum = {
  id: 'id',
  type: 'type',
  label: 'label',
  value: 'value',
  href: 'href',
  order_index: 'order_index',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SocialLinkScalarFieldEnum = {
  id: 'id',
  platform: 'platform',
  url: 'url',
  order_index: 'order_index',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  VIEWER: 'VIEWER'
};

exports.Prisma.ModelName = {
  User: 'User',
  Category: 'Category',
  Skill: 'Skill',
  Project: 'Project',
  Image: 'Image',
  ProjectSkill: 'ProjectSkill',
  PersonalContent: 'PersonalContent',
  JobRole: 'JobRole',
  AboutContent: 'AboutContent',
  AboutParagraph: 'AboutParagraph',
  Stat: 'Stat',
  EducationEntry: 'EducationEntry',
  ExperienceEntry: 'ExperienceEntry',
  ContactContent: 'ContactContent',
  ContactInfoItem: 'ContactInfoItem',
  SocialLink: 'SocialLink'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
