
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model ProjectSkill
 * 
 */
export type ProjectSkill = $Result.DefaultSelection<Prisma.$ProjectSkillPayload>
/**
 * Model PersonalContent
 * 
 */
export type PersonalContent = $Result.DefaultSelection<Prisma.$PersonalContentPayload>
/**
 * Model JobRole
 * 
 */
export type JobRole = $Result.DefaultSelection<Prisma.$JobRolePayload>
/**
 * Model AboutContent
 * 
 */
export type AboutContent = $Result.DefaultSelection<Prisma.$AboutContentPayload>
/**
 * Model AboutParagraph
 * 
 */
export type AboutParagraph = $Result.DefaultSelection<Prisma.$AboutParagraphPayload>
/**
 * Model Stat
 * 
 */
export type Stat = $Result.DefaultSelection<Prisma.$StatPayload>
/**
 * Model EducationEntry
 * 
 */
export type EducationEntry = $Result.DefaultSelection<Prisma.$EducationEntryPayload>
/**
 * Model ExperienceEntry
 * 
 */
export type ExperienceEntry = $Result.DefaultSelection<Prisma.$ExperienceEntryPayload>
/**
 * Model ContactContent
 * 
 */
export type ContactContent = $Result.DefaultSelection<Prisma.$ContactContentPayload>
/**
 * Model ContactInfoItem
 * 
 */
export type ContactInfoItem = $Result.DefaultSelection<Prisma.$ContactInfoItemPayload>
/**
 * Model SocialLink
 * 
 */
export type SocialLink = $Result.DefaultSelection<Prisma.$SocialLinkPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  VIEWER: 'VIEWER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs>;

  /**
   * `prisma.projectSkill`: Exposes CRUD operations for the **ProjectSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectSkills
    * const projectSkills = await prisma.projectSkill.findMany()
    * ```
    */
  get projectSkill(): Prisma.ProjectSkillDelegate<ExtArgs>;

  /**
   * `prisma.personalContent`: Exposes CRUD operations for the **PersonalContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonalContents
    * const personalContents = await prisma.personalContent.findMany()
    * ```
    */
  get personalContent(): Prisma.PersonalContentDelegate<ExtArgs>;

  /**
   * `prisma.jobRole`: Exposes CRUD operations for the **JobRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobRoles
    * const jobRoles = await prisma.jobRole.findMany()
    * ```
    */
  get jobRole(): Prisma.JobRoleDelegate<ExtArgs>;

  /**
   * `prisma.aboutContent`: Exposes CRUD operations for the **AboutContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutContents
    * const aboutContents = await prisma.aboutContent.findMany()
    * ```
    */
  get aboutContent(): Prisma.AboutContentDelegate<ExtArgs>;

  /**
   * `prisma.aboutParagraph`: Exposes CRUD operations for the **AboutParagraph** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutParagraphs
    * const aboutParagraphs = await prisma.aboutParagraph.findMany()
    * ```
    */
  get aboutParagraph(): Prisma.AboutParagraphDelegate<ExtArgs>;

  /**
   * `prisma.stat`: Exposes CRUD operations for the **Stat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stats
    * const stats = await prisma.stat.findMany()
    * ```
    */
  get stat(): Prisma.StatDelegate<ExtArgs>;

  /**
   * `prisma.educationEntry`: Exposes CRUD operations for the **EducationEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EducationEntries
    * const educationEntries = await prisma.educationEntry.findMany()
    * ```
    */
  get educationEntry(): Prisma.EducationEntryDelegate<ExtArgs>;

  /**
   * `prisma.experienceEntry`: Exposes CRUD operations for the **ExperienceEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExperienceEntries
    * const experienceEntries = await prisma.experienceEntry.findMany()
    * ```
    */
  get experienceEntry(): Prisma.ExperienceEntryDelegate<ExtArgs>;

  /**
   * `prisma.contactContent`: Exposes CRUD operations for the **ContactContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactContents
    * const contactContents = await prisma.contactContent.findMany()
    * ```
    */
  get contactContent(): Prisma.ContactContentDelegate<ExtArgs>;

  /**
   * `prisma.contactInfoItem`: Exposes CRUD operations for the **ContactInfoItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactInfoItems
    * const contactInfoItems = await prisma.contactInfoItem.findMany()
    * ```
    */
  get contactInfoItem(): Prisma.ContactInfoItemDelegate<ExtArgs>;

  /**
   * `prisma.socialLink`: Exposes CRUD operations for the **SocialLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialLinks
    * const socialLinks = await prisma.socialLink.findMany()
    * ```
    */
  get socialLink(): Prisma.SocialLinkDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "category" | "skill" | "project" | "image" | "projectSkill" | "personalContent" | "jobRole" | "aboutContent" | "aboutParagraph" | "stat" | "educationEntry" | "experienceEntry" | "contactContent" | "contactInfoItem" | "socialLink"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      ProjectSkill: {
        payload: Prisma.$ProjectSkillPayload<ExtArgs>
        fields: Prisma.ProjectSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload>
          }
          findFirst: {
            args: Prisma.ProjectSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload>
          }
          findMany: {
            args: Prisma.ProjectSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload>[]
          }
          create: {
            args: Prisma.ProjectSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload>
          }
          createMany: {
            args: Prisma.ProjectSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload>[]
          }
          delete: {
            args: Prisma.ProjectSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload>
          }
          update: {
            args: Prisma.ProjectSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload>
          }
          deleteMany: {
            args: Prisma.ProjectSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload>
          }
          aggregate: {
            args: Prisma.ProjectSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectSkill>
          }
          groupBy: {
            args: Prisma.ProjectSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectSkillCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectSkillCountAggregateOutputType> | number
          }
        }
      }
      PersonalContent: {
        payload: Prisma.$PersonalContentPayload<ExtArgs>
        fields: Prisma.PersonalContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalContentPayload>
          }
          findFirst: {
            args: Prisma.PersonalContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalContentPayload>
          }
          findMany: {
            args: Prisma.PersonalContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalContentPayload>[]
          }
          create: {
            args: Prisma.PersonalContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalContentPayload>
          }
          createMany: {
            args: Prisma.PersonalContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonalContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalContentPayload>[]
          }
          delete: {
            args: Prisma.PersonalContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalContentPayload>
          }
          update: {
            args: Prisma.PersonalContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalContentPayload>
          }
          deleteMany: {
            args: Prisma.PersonalContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PersonalContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalContentPayload>
          }
          aggregate: {
            args: Prisma.PersonalContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonalContent>
          }
          groupBy: {
            args: Prisma.PersonalContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalContentCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalContentCountAggregateOutputType> | number
          }
        }
      }
      JobRole: {
        payload: Prisma.$JobRolePayload<ExtArgs>
        fields: Prisma.JobRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRolePayload>
          }
          findFirst: {
            args: Prisma.JobRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRolePayload>
          }
          findMany: {
            args: Prisma.JobRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRolePayload>[]
          }
          create: {
            args: Prisma.JobRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRolePayload>
          }
          createMany: {
            args: Prisma.JobRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRolePayload>[]
          }
          delete: {
            args: Prisma.JobRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRolePayload>
          }
          update: {
            args: Prisma.JobRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRolePayload>
          }
          deleteMany: {
            args: Prisma.JobRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRolePayload>
          }
          aggregate: {
            args: Prisma.JobRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobRole>
          }
          groupBy: {
            args: Prisma.JobRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobRoleCountArgs<ExtArgs>
            result: $Utils.Optional<JobRoleCountAggregateOutputType> | number
          }
        }
      }
      AboutContent: {
        payload: Prisma.$AboutContentPayload<ExtArgs>
        fields: Prisma.AboutContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          findFirst: {
            args: Prisma.AboutContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          findMany: {
            args: Prisma.AboutContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>[]
          }
          create: {
            args: Prisma.AboutContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          createMany: {
            args: Prisma.AboutContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>[]
          }
          delete: {
            args: Prisma.AboutContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          update: {
            args: Prisma.AboutContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          deleteMany: {
            args: Prisma.AboutContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AboutContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          aggregate: {
            args: Prisma.AboutContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutContent>
          }
          groupBy: {
            args: Prisma.AboutContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutContentCountArgs<ExtArgs>
            result: $Utils.Optional<AboutContentCountAggregateOutputType> | number
          }
        }
      }
      AboutParagraph: {
        payload: Prisma.$AboutParagraphPayload<ExtArgs>
        fields: Prisma.AboutParagraphFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutParagraphFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutParagraphPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutParagraphFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutParagraphPayload>
          }
          findFirst: {
            args: Prisma.AboutParagraphFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutParagraphPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutParagraphFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutParagraphPayload>
          }
          findMany: {
            args: Prisma.AboutParagraphFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutParagraphPayload>[]
          }
          create: {
            args: Prisma.AboutParagraphCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutParagraphPayload>
          }
          createMany: {
            args: Prisma.AboutParagraphCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutParagraphCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutParagraphPayload>[]
          }
          delete: {
            args: Prisma.AboutParagraphDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutParagraphPayload>
          }
          update: {
            args: Prisma.AboutParagraphUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutParagraphPayload>
          }
          deleteMany: {
            args: Prisma.AboutParagraphDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutParagraphUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AboutParagraphUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutParagraphPayload>
          }
          aggregate: {
            args: Prisma.AboutParagraphAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutParagraph>
          }
          groupBy: {
            args: Prisma.AboutParagraphGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutParagraphGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutParagraphCountArgs<ExtArgs>
            result: $Utils.Optional<AboutParagraphCountAggregateOutputType> | number
          }
        }
      }
      Stat: {
        payload: Prisma.$StatPayload<ExtArgs>
        fields: Prisma.StatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>
          }
          findFirst: {
            args: Prisma.StatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>
          }
          findMany: {
            args: Prisma.StatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>[]
          }
          create: {
            args: Prisma.StatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>
          }
          createMany: {
            args: Prisma.StatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>[]
          }
          delete: {
            args: Prisma.StatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>
          }
          update: {
            args: Prisma.StatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>
          }
          deleteMany: {
            args: Prisma.StatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>
          }
          aggregate: {
            args: Prisma.StatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStat>
          }
          groupBy: {
            args: Prisma.StatGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatCountArgs<ExtArgs>
            result: $Utils.Optional<StatCountAggregateOutputType> | number
          }
        }
      }
      EducationEntry: {
        payload: Prisma.$EducationEntryPayload<ExtArgs>
        fields: Prisma.EducationEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationEntryPayload>
          }
          findFirst: {
            args: Prisma.EducationEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationEntryPayload>
          }
          findMany: {
            args: Prisma.EducationEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationEntryPayload>[]
          }
          create: {
            args: Prisma.EducationEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationEntryPayload>
          }
          createMany: {
            args: Prisma.EducationEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationEntryPayload>[]
          }
          delete: {
            args: Prisma.EducationEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationEntryPayload>
          }
          update: {
            args: Prisma.EducationEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationEntryPayload>
          }
          deleteMany: {
            args: Prisma.EducationEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EducationEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationEntryPayload>
          }
          aggregate: {
            args: Prisma.EducationEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducationEntry>
          }
          groupBy: {
            args: Prisma.EducationEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationEntryCountArgs<ExtArgs>
            result: $Utils.Optional<EducationEntryCountAggregateOutputType> | number
          }
        }
      }
      ExperienceEntry: {
        payload: Prisma.$ExperienceEntryPayload<ExtArgs>
        fields: Prisma.ExperienceEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceEntryPayload>
          }
          findFirst: {
            args: Prisma.ExperienceEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceEntryPayload>
          }
          findMany: {
            args: Prisma.ExperienceEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceEntryPayload>[]
          }
          create: {
            args: Prisma.ExperienceEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceEntryPayload>
          }
          createMany: {
            args: Prisma.ExperienceEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceEntryPayload>[]
          }
          delete: {
            args: Prisma.ExperienceEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceEntryPayload>
          }
          update: {
            args: Prisma.ExperienceEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceEntryPayload>
          }
          deleteMany: {
            args: Prisma.ExperienceEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExperienceEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceEntryPayload>
          }
          aggregate: {
            args: Prisma.ExperienceEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperienceEntry>
          }
          groupBy: {
            args: Prisma.ExperienceEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceEntryCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceEntryCountAggregateOutputType> | number
          }
        }
      }
      ContactContent: {
        payload: Prisma.$ContactContentPayload<ExtArgs>
        fields: Prisma.ContactContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactContentPayload>
          }
          findFirst: {
            args: Prisma.ContactContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactContentPayload>
          }
          findMany: {
            args: Prisma.ContactContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactContentPayload>[]
          }
          create: {
            args: Prisma.ContactContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactContentPayload>
          }
          createMany: {
            args: Prisma.ContactContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactContentPayload>[]
          }
          delete: {
            args: Prisma.ContactContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactContentPayload>
          }
          update: {
            args: Prisma.ContactContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactContentPayload>
          }
          deleteMany: {
            args: Prisma.ContactContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactContentPayload>
          }
          aggregate: {
            args: Prisma.ContactContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactContent>
          }
          groupBy: {
            args: Prisma.ContactContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactContentCountArgs<ExtArgs>
            result: $Utils.Optional<ContactContentCountAggregateOutputType> | number
          }
        }
      }
      ContactInfoItem: {
        payload: Prisma.$ContactInfoItemPayload<ExtArgs>
        fields: Prisma.ContactInfoItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactInfoItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactInfoItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload>
          }
          findFirst: {
            args: Prisma.ContactInfoItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactInfoItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload>
          }
          findMany: {
            args: Prisma.ContactInfoItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload>[]
          }
          create: {
            args: Prisma.ContactInfoItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload>
          }
          createMany: {
            args: Prisma.ContactInfoItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactInfoItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload>[]
          }
          delete: {
            args: Prisma.ContactInfoItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload>
          }
          update: {
            args: Prisma.ContactInfoItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload>
          }
          deleteMany: {
            args: Prisma.ContactInfoItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactInfoItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactInfoItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload>
          }
          aggregate: {
            args: Prisma.ContactInfoItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactInfoItem>
          }
          groupBy: {
            args: Prisma.ContactInfoItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactInfoItemCountArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoItemCountAggregateOutputType> | number
          }
        }
      }
      SocialLink: {
        payload: Prisma.$SocialLinkPayload<ExtArgs>
        fields: Prisma.SocialLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          findFirst: {
            args: Prisma.SocialLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          findMany: {
            args: Prisma.SocialLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          create: {
            args: Prisma.SocialLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          createMany: {
            args: Prisma.SocialLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          delete: {
            args: Prisma.SocialLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          update: {
            args: Prisma.SocialLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          deleteMany: {
            args: Prisma.SocialLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SocialLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          aggregate: {
            args: Prisma.SocialLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialLink>
          }
          groupBy: {
            args: Prisma.SocialLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialLinkCountArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    projects: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | CategoryCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    project_skills: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project_skills?: boolean | SkillCountOutputTypeCountProject_skillsArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountProject_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectSkillWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    images: number
    project_skills: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ProjectCountOutputTypeCountImagesArgs
    project_skills?: boolean | ProjectCountOutputTypeCountProject_skillsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProject_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectSkillWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: $Enums.Role
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    order_index: number | null
  }

  export type CategorySumAggregateOutputType = {
    order_index: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    order_index: number | null
    deleted_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    order_index: number | null
    deleted_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    order_index: number
    deleted_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    order_index?: true
  }

  export type CategorySumAggregateInputType = {
    order_index?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    order_index?: true
    deleted_at?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    order_index?: true
    deleted_at?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    order_index?: true
    deleted_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    order_index: number
    deleted_at: Date | null
    created_at: Date
    updated_at: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    order_index?: boolean
    deleted_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    projects?: boolean | Category$projectsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    order_index?: boolean
    deleted_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    order_index?: boolean
    deleted_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Category$projectsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      order_index: number
      deleted_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends Category$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Category$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly order_index: FieldRef<"Category", 'Int'>
    readonly deleted_at: FieldRef<"Category", 'DateTime'>
    readonly created_at: FieldRef<"Category", 'DateTime'>
    readonly updated_at: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.projects
   */
  export type Category$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    icon_url: string | null
    category: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    icon_url: string | null
    category: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    icon_url: number
    category: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    icon_url?: true
    category?: true
    created_at?: true
    updated_at?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    icon_url?: true
    category?: true
    created_at?: true
    updated_at?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    icon_url?: true
    category?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    slug: string
    icon_url: string | null
    category: string | null
    created_at: Date
    updated_at: Date
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    icon_url?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
    project_skills?: boolean | Skill$project_skillsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    icon_url?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    icon_url?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project_skills?: boolean | Skill$project_skillsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      project_skills: Prisma.$ProjectSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      icon_url: string | null
      category: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project_skills<T extends Skill$project_skillsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$project_skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */ 
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly slug: FieldRef<"Skill", 'String'>
    readonly icon_url: FieldRef<"Skill", 'String'>
    readonly category: FieldRef<"Skill", 'String'>
    readonly created_at: FieldRef<"Skill", 'DateTime'>
    readonly updated_at: FieldRef<"Skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
  }

  /**
   * Skill.project_skills
   */
  export type Skill$project_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    where?: ProjectSkillWhereInput
    orderBy?: ProjectSkillOrderByWithRelationInput | ProjectSkillOrderByWithRelationInput[]
    cursor?: ProjectSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectSkillScalarFieldEnum | ProjectSkillScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    order_index: number | null
  }

  export type ProjectSumAggregateOutputType = {
    order_index: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    long_description: string | null
    demo_url: string | null
    repo_url: string | null
    featured: boolean | null
    is_published: boolean | null
    order_index: number | null
    category_id: string | null
    deleted_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    long_description: string | null
    demo_url: string | null
    repo_url: string | null
    featured: boolean | null
    is_published: boolean | null
    order_index: number | null
    category_id: string | null
    deleted_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    description: number
    long_description: number
    demo_url: number
    repo_url: number
    featured: number
    is_published: number
    order_index: number
    category_id: number
    deleted_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    order_index?: true
  }

  export type ProjectSumAggregateInputType = {
    order_index?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    long_description?: true
    demo_url?: true
    repo_url?: true
    featured?: true
    is_published?: true
    order_index?: true
    category_id?: true
    deleted_at?: true
    created_at?: true
    updated_at?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    long_description?: true
    demo_url?: true
    repo_url?: true
    featured?: true
    is_published?: true
    order_index?: true
    category_id?: true
    deleted_at?: true
    created_at?: true
    updated_at?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    long_description?: true
    demo_url?: true
    repo_url?: true
    featured?: true
    is_published?: true
    order_index?: true
    category_id?: true
    deleted_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title: string
    description: string
    long_description: string | null
    demo_url: string | null
    repo_url: string | null
    featured: boolean
    is_published: boolean
    order_index: number
    category_id: string
    deleted_at: Date | null
    created_at: Date
    updated_at: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    long_description?: boolean
    demo_url?: boolean
    repo_url?: boolean
    featured?: boolean
    is_published?: boolean
    order_index?: boolean
    category_id?: boolean
    deleted_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    images?: boolean | Project$imagesArgs<ExtArgs>
    project_skills?: boolean | Project$project_skillsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    long_description?: boolean
    demo_url?: boolean
    repo_url?: boolean
    featured?: boolean
    is_published?: boolean
    order_index?: boolean
    category_id?: boolean
    deleted_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    long_description?: boolean
    demo_url?: boolean
    repo_url?: boolean
    featured?: boolean
    is_published?: boolean
    order_index?: boolean
    category_id?: boolean
    deleted_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    images?: boolean | Project$imagesArgs<ExtArgs>
    project_skills?: boolean | Project$project_skillsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      images: Prisma.$ImagePayload<ExtArgs>[]
      project_skills: Prisma.$ProjectSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      long_description: string | null
      demo_url: string | null
      repo_url: string | null
      featured: boolean
      is_published: boolean
      order_index: number
      category_id: string
      deleted_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    images<T extends Project$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Project$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany"> | Null>
    project_skills<T extends Project$project_skillsArgs<ExtArgs> = {}>(args?: Subset<T, Project$project_skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly long_description: FieldRef<"Project", 'String'>
    readonly demo_url: FieldRef<"Project", 'String'>
    readonly repo_url: FieldRef<"Project", 'String'>
    readonly featured: FieldRef<"Project", 'Boolean'>
    readonly is_published: FieldRef<"Project", 'Boolean'>
    readonly order_index: FieldRef<"Project", 'Int'>
    readonly category_id: FieldRef<"Project", 'String'>
    readonly deleted_at: FieldRef<"Project", 'DateTime'>
    readonly created_at: FieldRef<"Project", 'DateTime'>
    readonly updated_at: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project.images
   */
  export type Project$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Project.project_skills
   */
  export type Project$project_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    where?: ProjectSkillWhereInput
    orderBy?: ProjectSkillOrderByWithRelationInput | ProjectSkillOrderByWithRelationInput[]
    cursor?: ProjectSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectSkillScalarFieldEnum | ProjectSkillScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    order_index: number | null
  }

  export type ImageSumAggregateOutputType = {
    order_index: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    project_id: string | null
    url: string | null
    alt_text: string | null
    is_thumbnail: boolean | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    project_id: string | null
    url: string | null
    alt_text: string | null
    is_thumbnail: boolean | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    project_id: number
    url: number
    alt_text: number
    is_thumbnail: number
    order_index: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    order_index?: true
  }

  export type ImageSumAggregateInputType = {
    order_index?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    project_id?: true
    url?: true
    alt_text?: true
    is_thumbnail?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    project_id?: true
    url?: true
    alt_text?: true
    is_thumbnail?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    project_id?: true
    url?: true
    alt_text?: true
    is_thumbnail?: true
    order_index?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    project_id: string
    url: string
    alt_text: string | null
    is_thumbnail: boolean
    order_index: number
    created_at: Date
    updated_at: Date
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    url?: boolean
    alt_text?: boolean
    is_thumbnail?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    url?: boolean
    alt_text?: boolean
    is_thumbnail?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    project_id?: boolean
    url?: boolean
    alt_text?: boolean
    is_thumbnail?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      project_id: string
      url: string
      alt_text: string | null
      is_thumbnail: boolean
      order_index: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */ 
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly project_id: FieldRef<"Image", 'String'>
    readonly url: FieldRef<"Image", 'String'>
    readonly alt_text: FieldRef<"Image", 'String'>
    readonly is_thumbnail: FieldRef<"Image", 'Boolean'>
    readonly order_index: FieldRef<"Image", 'Int'>
    readonly created_at: FieldRef<"Image", 'DateTime'>
    readonly updated_at: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model ProjectSkill
   */

  export type AggregateProjectSkill = {
    _count: ProjectSkillCountAggregateOutputType | null
    _min: ProjectSkillMinAggregateOutputType | null
    _max: ProjectSkillMaxAggregateOutputType | null
  }

  export type ProjectSkillMinAggregateOutputType = {
    project_id: string | null
    skill_id: string | null
    created_at: Date | null
  }

  export type ProjectSkillMaxAggregateOutputType = {
    project_id: string | null
    skill_id: string | null
    created_at: Date | null
  }

  export type ProjectSkillCountAggregateOutputType = {
    project_id: number
    skill_id: number
    created_at: number
    _all: number
  }


  export type ProjectSkillMinAggregateInputType = {
    project_id?: true
    skill_id?: true
    created_at?: true
  }

  export type ProjectSkillMaxAggregateInputType = {
    project_id?: true
    skill_id?: true
    created_at?: true
  }

  export type ProjectSkillCountAggregateInputType = {
    project_id?: true
    skill_id?: true
    created_at?: true
    _all?: true
  }

  export type ProjectSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectSkill to aggregate.
     */
    where?: ProjectSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSkills to fetch.
     */
    orderBy?: ProjectSkillOrderByWithRelationInput | ProjectSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectSkills
    **/
    _count?: true | ProjectSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectSkillMaxAggregateInputType
  }

  export type GetProjectSkillAggregateType<T extends ProjectSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectSkill[P]>
      : GetScalarType<T[P], AggregateProjectSkill[P]>
  }




  export type ProjectSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectSkillWhereInput
    orderBy?: ProjectSkillOrderByWithAggregationInput | ProjectSkillOrderByWithAggregationInput[]
    by: ProjectSkillScalarFieldEnum[] | ProjectSkillScalarFieldEnum
    having?: ProjectSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectSkillCountAggregateInputType | true
    _min?: ProjectSkillMinAggregateInputType
    _max?: ProjectSkillMaxAggregateInputType
  }

  export type ProjectSkillGroupByOutputType = {
    project_id: string
    skill_id: string
    created_at: Date
    _count: ProjectSkillCountAggregateOutputType | null
    _min: ProjectSkillMinAggregateOutputType | null
    _max: ProjectSkillMaxAggregateOutputType | null
  }

  type GetProjectSkillGroupByPayload<T extends ProjectSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectSkillGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectSkillGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    project_id?: boolean
    skill_id?: boolean
    created_at?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectSkill"]>

  export type ProjectSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    project_id?: boolean
    skill_id?: boolean
    created_at?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectSkill"]>

  export type ProjectSkillSelectScalar = {
    project_id?: boolean
    skill_id?: boolean
    created_at?: boolean
  }

  export type ProjectSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type ProjectSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $ProjectSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectSkill"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      project_id: string
      skill_id: string
      created_at: Date
    }, ExtArgs["result"]["projectSkill"]>
    composites: {}
  }

  type ProjectSkillGetPayload<S extends boolean | null | undefined | ProjectSkillDefaultArgs> = $Result.GetResult<Prisma.$ProjectSkillPayload, S>

  type ProjectSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectSkillFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectSkillCountAggregateInputType | true
    }

  export interface ProjectSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectSkill'], meta: { name: 'ProjectSkill' } }
    /**
     * Find zero or one ProjectSkill that matches the filter.
     * @param {ProjectSkillFindUniqueArgs} args - Arguments to find a ProjectSkill
     * @example
     * // Get one ProjectSkill
     * const projectSkill = await prisma.projectSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectSkillFindUniqueArgs>(args: SelectSubset<T, ProjectSkillFindUniqueArgs<ExtArgs>>): Prisma__ProjectSkillClient<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProjectSkill that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectSkillFindUniqueOrThrowArgs} args - Arguments to find a ProjectSkill
     * @example
     * // Get one ProjectSkill
     * const projectSkill = await prisma.projectSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectSkillClient<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProjectSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSkillFindFirstArgs} args - Arguments to find a ProjectSkill
     * @example
     * // Get one ProjectSkill
     * const projectSkill = await prisma.projectSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectSkillFindFirstArgs>(args?: SelectSubset<T, ProjectSkillFindFirstArgs<ExtArgs>>): Prisma__ProjectSkillClient<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProjectSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSkillFindFirstOrThrowArgs} args - Arguments to find a ProjectSkill
     * @example
     * // Get one ProjectSkill
     * const projectSkill = await prisma.projectSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectSkillClient<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProjectSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectSkills
     * const projectSkills = await prisma.projectSkill.findMany()
     * 
     * // Get first 10 ProjectSkills
     * const projectSkills = await prisma.projectSkill.findMany({ take: 10 })
     * 
     * // Only select the `project_id`
     * const projectSkillWithProject_idOnly = await prisma.projectSkill.findMany({ select: { project_id: true } })
     * 
     */
    findMany<T extends ProjectSkillFindManyArgs>(args?: SelectSubset<T, ProjectSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProjectSkill.
     * @param {ProjectSkillCreateArgs} args - Arguments to create a ProjectSkill.
     * @example
     * // Create one ProjectSkill
     * const ProjectSkill = await prisma.projectSkill.create({
     *   data: {
     *     // ... data to create a ProjectSkill
     *   }
     * })
     * 
     */
    create<T extends ProjectSkillCreateArgs>(args: SelectSubset<T, ProjectSkillCreateArgs<ExtArgs>>): Prisma__ProjectSkillClient<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProjectSkills.
     * @param {ProjectSkillCreateManyArgs} args - Arguments to create many ProjectSkills.
     * @example
     * // Create many ProjectSkills
     * const projectSkill = await prisma.projectSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectSkillCreateManyArgs>(args?: SelectSubset<T, ProjectSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectSkills and returns the data saved in the database.
     * @param {ProjectSkillCreateManyAndReturnArgs} args - Arguments to create many ProjectSkills.
     * @example
     * // Create many ProjectSkills
     * const projectSkill = await prisma.projectSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectSkills and only return the `project_id`
     * const projectSkillWithProject_idOnly = await prisma.projectSkill.createManyAndReturn({ 
     *   select: { project_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProjectSkill.
     * @param {ProjectSkillDeleteArgs} args - Arguments to delete one ProjectSkill.
     * @example
     * // Delete one ProjectSkill
     * const ProjectSkill = await prisma.projectSkill.delete({
     *   where: {
     *     // ... filter to delete one ProjectSkill
     *   }
     * })
     * 
     */
    delete<T extends ProjectSkillDeleteArgs>(args: SelectSubset<T, ProjectSkillDeleteArgs<ExtArgs>>): Prisma__ProjectSkillClient<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProjectSkill.
     * @param {ProjectSkillUpdateArgs} args - Arguments to update one ProjectSkill.
     * @example
     * // Update one ProjectSkill
     * const projectSkill = await prisma.projectSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectSkillUpdateArgs>(args: SelectSubset<T, ProjectSkillUpdateArgs<ExtArgs>>): Prisma__ProjectSkillClient<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProjectSkills.
     * @param {ProjectSkillDeleteManyArgs} args - Arguments to filter ProjectSkills to delete.
     * @example
     * // Delete a few ProjectSkills
     * const { count } = await prisma.projectSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectSkillDeleteManyArgs>(args?: SelectSubset<T, ProjectSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectSkills
     * const projectSkill = await prisma.projectSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectSkillUpdateManyArgs>(args: SelectSubset<T, ProjectSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectSkill.
     * @param {ProjectSkillUpsertArgs} args - Arguments to update or create a ProjectSkill.
     * @example
     * // Update or create a ProjectSkill
     * const projectSkill = await prisma.projectSkill.upsert({
     *   create: {
     *     // ... data to create a ProjectSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectSkill we want to update
     *   }
     * })
     */
    upsert<T extends ProjectSkillUpsertArgs>(args: SelectSubset<T, ProjectSkillUpsertArgs<ExtArgs>>): Prisma__ProjectSkillClient<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProjectSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSkillCountArgs} args - Arguments to filter ProjectSkills to count.
     * @example
     * // Count the number of ProjectSkills
     * const count = await prisma.projectSkill.count({
     *   where: {
     *     // ... the filter for the ProjectSkills we want to count
     *   }
     * })
    **/
    count<T extends ProjectSkillCountArgs>(
      args?: Subset<T, ProjectSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectSkillAggregateArgs>(args: Subset<T, ProjectSkillAggregateArgs>): Prisma.PrismaPromise<GetProjectSkillAggregateType<T>>

    /**
     * Group by ProjectSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectSkillGroupByArgs['orderBy'] }
        : { orderBy?: ProjectSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectSkill model
   */
  readonly fields: ProjectSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectSkill model
   */ 
  interface ProjectSkillFieldRefs {
    readonly project_id: FieldRef<"ProjectSkill", 'String'>
    readonly skill_id: FieldRef<"ProjectSkill", 'String'>
    readonly created_at: FieldRef<"ProjectSkill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectSkill findUnique
   */
  export type ProjectSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSkill to fetch.
     */
    where: ProjectSkillWhereUniqueInput
  }

  /**
   * ProjectSkill findUniqueOrThrow
   */
  export type ProjectSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSkill to fetch.
     */
    where: ProjectSkillWhereUniqueInput
  }

  /**
   * ProjectSkill findFirst
   */
  export type ProjectSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSkill to fetch.
     */
    where?: ProjectSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSkills to fetch.
     */
    orderBy?: ProjectSkillOrderByWithRelationInput | ProjectSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectSkills.
     */
    cursor?: ProjectSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectSkills.
     */
    distinct?: ProjectSkillScalarFieldEnum | ProjectSkillScalarFieldEnum[]
  }

  /**
   * ProjectSkill findFirstOrThrow
   */
  export type ProjectSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSkill to fetch.
     */
    where?: ProjectSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSkills to fetch.
     */
    orderBy?: ProjectSkillOrderByWithRelationInput | ProjectSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectSkills.
     */
    cursor?: ProjectSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectSkills.
     */
    distinct?: ProjectSkillScalarFieldEnum | ProjectSkillScalarFieldEnum[]
  }

  /**
   * ProjectSkill findMany
   */
  export type ProjectSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSkills to fetch.
     */
    where?: ProjectSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSkills to fetch.
     */
    orderBy?: ProjectSkillOrderByWithRelationInput | ProjectSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectSkills.
     */
    cursor?: ProjectSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSkills.
     */
    skip?: number
    distinct?: ProjectSkillScalarFieldEnum | ProjectSkillScalarFieldEnum[]
  }

  /**
   * ProjectSkill create
   */
  export type ProjectSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectSkill.
     */
    data: XOR<ProjectSkillCreateInput, ProjectSkillUncheckedCreateInput>
  }

  /**
   * ProjectSkill createMany
   */
  export type ProjectSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectSkills.
     */
    data: ProjectSkillCreateManyInput | ProjectSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectSkill createManyAndReturn
   */
  export type ProjectSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProjectSkills.
     */
    data: ProjectSkillCreateManyInput | ProjectSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectSkill update
   */
  export type ProjectSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectSkill.
     */
    data: XOR<ProjectSkillUpdateInput, ProjectSkillUncheckedUpdateInput>
    /**
     * Choose, which ProjectSkill to update.
     */
    where: ProjectSkillWhereUniqueInput
  }

  /**
   * ProjectSkill updateMany
   */
  export type ProjectSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectSkills.
     */
    data: XOR<ProjectSkillUpdateManyMutationInput, ProjectSkillUncheckedUpdateManyInput>
    /**
     * Filter which ProjectSkills to update
     */
    where?: ProjectSkillWhereInput
  }

  /**
   * ProjectSkill upsert
   */
  export type ProjectSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectSkill to update in case it exists.
     */
    where: ProjectSkillWhereUniqueInput
    /**
     * In case the ProjectSkill found by the `where` argument doesn't exist, create a new ProjectSkill with this data.
     */
    create: XOR<ProjectSkillCreateInput, ProjectSkillUncheckedCreateInput>
    /**
     * In case the ProjectSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectSkillUpdateInput, ProjectSkillUncheckedUpdateInput>
  }

  /**
   * ProjectSkill delete
   */
  export type ProjectSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    /**
     * Filter which ProjectSkill to delete.
     */
    where: ProjectSkillWhereUniqueInput
  }

  /**
   * ProjectSkill deleteMany
   */
  export type ProjectSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectSkills to delete
     */
    where?: ProjectSkillWhereInput
  }

  /**
   * ProjectSkill without action
   */
  export type ProjectSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
  }


  /**
   * Model PersonalContent
   */

  export type AggregatePersonalContent = {
    _count: PersonalContentCountAggregateOutputType | null
    _min: PersonalContentMinAggregateOutputType | null
    _max: PersonalContentMaxAggregateOutputType | null
  }

  export type PersonalContentMinAggregateOutputType = {
    id: string | null
    name: string | null
    title_prefix: string | null
    description: string | null
    cv_file_path: string | null
    cv_download_name: string | null
    updated_at: Date | null
  }

  export type PersonalContentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    title_prefix: string | null
    description: string | null
    cv_file_path: string | null
    cv_download_name: string | null
    updated_at: Date | null
  }

  export type PersonalContentCountAggregateOutputType = {
    id: number
    name: number
    title_prefix: number
    description: number
    cv_file_path: number
    cv_download_name: number
    updated_at: number
    _all: number
  }


  export type PersonalContentMinAggregateInputType = {
    id?: true
    name?: true
    title_prefix?: true
    description?: true
    cv_file_path?: true
    cv_download_name?: true
    updated_at?: true
  }

  export type PersonalContentMaxAggregateInputType = {
    id?: true
    name?: true
    title_prefix?: true
    description?: true
    cv_file_path?: true
    cv_download_name?: true
    updated_at?: true
  }

  export type PersonalContentCountAggregateInputType = {
    id?: true
    name?: true
    title_prefix?: true
    description?: true
    cv_file_path?: true
    cv_download_name?: true
    updated_at?: true
    _all?: true
  }

  export type PersonalContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalContent to aggregate.
     */
    where?: PersonalContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalContents to fetch.
     */
    orderBy?: PersonalContentOrderByWithRelationInput | PersonalContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonalContents
    **/
    _count?: true | PersonalContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalContentMaxAggregateInputType
  }

  export type GetPersonalContentAggregateType<T extends PersonalContentAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonalContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonalContent[P]>
      : GetScalarType<T[P], AggregatePersonalContent[P]>
  }




  export type PersonalContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalContentWhereInput
    orderBy?: PersonalContentOrderByWithAggregationInput | PersonalContentOrderByWithAggregationInput[]
    by: PersonalContentScalarFieldEnum[] | PersonalContentScalarFieldEnum
    having?: PersonalContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalContentCountAggregateInputType | true
    _min?: PersonalContentMinAggregateInputType
    _max?: PersonalContentMaxAggregateInputType
  }

  export type PersonalContentGroupByOutputType = {
    id: string
    name: string
    title_prefix: string
    description: string
    cv_file_path: string
    cv_download_name: string
    updated_at: Date
    _count: PersonalContentCountAggregateOutputType | null
    _min: PersonalContentMinAggregateOutputType | null
    _max: PersonalContentMaxAggregateOutputType | null
  }

  type GetPersonalContentGroupByPayload<T extends PersonalContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalContentGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalContentGroupByOutputType[P]>
        }
      >
    >


  export type PersonalContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title_prefix?: boolean
    description?: boolean
    cv_file_path?: boolean
    cv_download_name?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["personalContent"]>

  export type PersonalContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title_prefix?: boolean
    description?: boolean
    cv_file_path?: boolean
    cv_download_name?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["personalContent"]>

  export type PersonalContentSelectScalar = {
    id?: boolean
    name?: boolean
    title_prefix?: boolean
    description?: boolean
    cv_file_path?: boolean
    cv_download_name?: boolean
    updated_at?: boolean
  }


  export type $PersonalContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonalContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      title_prefix: string
      description: string
      cv_file_path: string
      cv_download_name: string
      updated_at: Date
    }, ExtArgs["result"]["personalContent"]>
    composites: {}
  }

  type PersonalContentGetPayload<S extends boolean | null | undefined | PersonalContentDefaultArgs> = $Result.GetResult<Prisma.$PersonalContentPayload, S>

  type PersonalContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PersonalContentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PersonalContentCountAggregateInputType | true
    }

  export interface PersonalContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonalContent'], meta: { name: 'PersonalContent' } }
    /**
     * Find zero or one PersonalContent that matches the filter.
     * @param {PersonalContentFindUniqueArgs} args - Arguments to find a PersonalContent
     * @example
     * // Get one PersonalContent
     * const personalContent = await prisma.personalContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalContentFindUniqueArgs>(args: SelectSubset<T, PersonalContentFindUniqueArgs<ExtArgs>>): Prisma__PersonalContentClient<$Result.GetResult<Prisma.$PersonalContentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PersonalContent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PersonalContentFindUniqueOrThrowArgs} args - Arguments to find a PersonalContent
     * @example
     * // Get one PersonalContent
     * const personalContent = await prisma.personalContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalContentFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalContentClient<$Result.GetResult<Prisma.$PersonalContentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PersonalContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalContentFindFirstArgs} args - Arguments to find a PersonalContent
     * @example
     * // Get one PersonalContent
     * const personalContent = await prisma.personalContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalContentFindFirstArgs>(args?: SelectSubset<T, PersonalContentFindFirstArgs<ExtArgs>>): Prisma__PersonalContentClient<$Result.GetResult<Prisma.$PersonalContentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PersonalContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalContentFindFirstOrThrowArgs} args - Arguments to find a PersonalContent
     * @example
     * // Get one PersonalContent
     * const personalContent = await prisma.personalContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalContentFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalContentClient<$Result.GetResult<Prisma.$PersonalContentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PersonalContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonalContents
     * const personalContents = await prisma.personalContent.findMany()
     * 
     * // Get first 10 PersonalContents
     * const personalContents = await prisma.personalContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalContentWithIdOnly = await prisma.personalContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonalContentFindManyArgs>(args?: SelectSubset<T, PersonalContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalContentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PersonalContent.
     * @param {PersonalContentCreateArgs} args - Arguments to create a PersonalContent.
     * @example
     * // Create one PersonalContent
     * const PersonalContent = await prisma.personalContent.create({
     *   data: {
     *     // ... data to create a PersonalContent
     *   }
     * })
     * 
     */
    create<T extends PersonalContentCreateArgs>(args: SelectSubset<T, PersonalContentCreateArgs<ExtArgs>>): Prisma__PersonalContentClient<$Result.GetResult<Prisma.$PersonalContentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PersonalContents.
     * @param {PersonalContentCreateManyArgs} args - Arguments to create many PersonalContents.
     * @example
     * // Create many PersonalContents
     * const personalContent = await prisma.personalContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalContentCreateManyArgs>(args?: SelectSubset<T, PersonalContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PersonalContents and returns the data saved in the database.
     * @param {PersonalContentCreateManyAndReturnArgs} args - Arguments to create many PersonalContents.
     * @example
     * // Create many PersonalContents
     * const personalContent = await prisma.personalContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PersonalContents and only return the `id`
     * const personalContentWithIdOnly = await prisma.personalContent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonalContentCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonalContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalContentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PersonalContent.
     * @param {PersonalContentDeleteArgs} args - Arguments to delete one PersonalContent.
     * @example
     * // Delete one PersonalContent
     * const PersonalContent = await prisma.personalContent.delete({
     *   where: {
     *     // ... filter to delete one PersonalContent
     *   }
     * })
     * 
     */
    delete<T extends PersonalContentDeleteArgs>(args: SelectSubset<T, PersonalContentDeleteArgs<ExtArgs>>): Prisma__PersonalContentClient<$Result.GetResult<Prisma.$PersonalContentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PersonalContent.
     * @param {PersonalContentUpdateArgs} args - Arguments to update one PersonalContent.
     * @example
     * // Update one PersonalContent
     * const personalContent = await prisma.personalContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalContentUpdateArgs>(args: SelectSubset<T, PersonalContentUpdateArgs<ExtArgs>>): Prisma__PersonalContentClient<$Result.GetResult<Prisma.$PersonalContentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PersonalContents.
     * @param {PersonalContentDeleteManyArgs} args - Arguments to filter PersonalContents to delete.
     * @example
     * // Delete a few PersonalContents
     * const { count } = await prisma.personalContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalContentDeleteManyArgs>(args?: SelectSubset<T, PersonalContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonalContents
     * const personalContent = await prisma.personalContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalContentUpdateManyArgs>(args: SelectSubset<T, PersonalContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PersonalContent.
     * @param {PersonalContentUpsertArgs} args - Arguments to update or create a PersonalContent.
     * @example
     * // Update or create a PersonalContent
     * const personalContent = await prisma.personalContent.upsert({
     *   create: {
     *     // ... data to create a PersonalContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonalContent we want to update
     *   }
     * })
     */
    upsert<T extends PersonalContentUpsertArgs>(args: SelectSubset<T, PersonalContentUpsertArgs<ExtArgs>>): Prisma__PersonalContentClient<$Result.GetResult<Prisma.$PersonalContentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PersonalContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalContentCountArgs} args - Arguments to filter PersonalContents to count.
     * @example
     * // Count the number of PersonalContents
     * const count = await prisma.personalContent.count({
     *   where: {
     *     // ... the filter for the PersonalContents we want to count
     *   }
     * })
    **/
    count<T extends PersonalContentCountArgs>(
      args?: Subset<T, PersonalContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonalContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonalContentAggregateArgs>(args: Subset<T, PersonalContentAggregateArgs>): Prisma.PrismaPromise<GetPersonalContentAggregateType<T>>

    /**
     * Group by PersonalContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonalContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalContentGroupByArgs['orderBy'] }
        : { orderBy?: PersonalContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonalContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonalContent model
   */
  readonly fields: PersonalContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonalContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PersonalContent model
   */ 
  interface PersonalContentFieldRefs {
    readonly id: FieldRef<"PersonalContent", 'String'>
    readonly name: FieldRef<"PersonalContent", 'String'>
    readonly title_prefix: FieldRef<"PersonalContent", 'String'>
    readonly description: FieldRef<"PersonalContent", 'String'>
    readonly cv_file_path: FieldRef<"PersonalContent", 'String'>
    readonly cv_download_name: FieldRef<"PersonalContent", 'String'>
    readonly updated_at: FieldRef<"PersonalContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PersonalContent findUnique
   */
  export type PersonalContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalContent
     */
    select?: PersonalContentSelect<ExtArgs> | null
    /**
     * Filter, which PersonalContent to fetch.
     */
    where: PersonalContentWhereUniqueInput
  }

  /**
   * PersonalContent findUniqueOrThrow
   */
  export type PersonalContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalContent
     */
    select?: PersonalContentSelect<ExtArgs> | null
    /**
     * Filter, which PersonalContent to fetch.
     */
    where: PersonalContentWhereUniqueInput
  }

  /**
   * PersonalContent findFirst
   */
  export type PersonalContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalContent
     */
    select?: PersonalContentSelect<ExtArgs> | null
    /**
     * Filter, which PersonalContent to fetch.
     */
    where?: PersonalContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalContents to fetch.
     */
    orderBy?: PersonalContentOrderByWithRelationInput | PersonalContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalContents.
     */
    cursor?: PersonalContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalContents.
     */
    distinct?: PersonalContentScalarFieldEnum | PersonalContentScalarFieldEnum[]
  }

  /**
   * PersonalContent findFirstOrThrow
   */
  export type PersonalContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalContent
     */
    select?: PersonalContentSelect<ExtArgs> | null
    /**
     * Filter, which PersonalContent to fetch.
     */
    where?: PersonalContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalContents to fetch.
     */
    orderBy?: PersonalContentOrderByWithRelationInput | PersonalContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalContents.
     */
    cursor?: PersonalContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalContents.
     */
    distinct?: PersonalContentScalarFieldEnum | PersonalContentScalarFieldEnum[]
  }

  /**
   * PersonalContent findMany
   */
  export type PersonalContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalContent
     */
    select?: PersonalContentSelect<ExtArgs> | null
    /**
     * Filter, which PersonalContents to fetch.
     */
    where?: PersonalContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalContents to fetch.
     */
    orderBy?: PersonalContentOrderByWithRelationInput | PersonalContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonalContents.
     */
    cursor?: PersonalContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalContents.
     */
    skip?: number
    distinct?: PersonalContentScalarFieldEnum | PersonalContentScalarFieldEnum[]
  }

  /**
   * PersonalContent create
   */
  export type PersonalContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalContent
     */
    select?: PersonalContentSelect<ExtArgs> | null
    /**
     * The data needed to create a PersonalContent.
     */
    data: XOR<PersonalContentCreateInput, PersonalContentUncheckedCreateInput>
  }

  /**
   * PersonalContent createMany
   */
  export type PersonalContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonalContents.
     */
    data: PersonalContentCreateManyInput | PersonalContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonalContent createManyAndReturn
   */
  export type PersonalContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalContent
     */
    select?: PersonalContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PersonalContents.
     */
    data: PersonalContentCreateManyInput | PersonalContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonalContent update
   */
  export type PersonalContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalContent
     */
    select?: PersonalContentSelect<ExtArgs> | null
    /**
     * The data needed to update a PersonalContent.
     */
    data: XOR<PersonalContentUpdateInput, PersonalContentUncheckedUpdateInput>
    /**
     * Choose, which PersonalContent to update.
     */
    where: PersonalContentWhereUniqueInput
  }

  /**
   * PersonalContent updateMany
   */
  export type PersonalContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonalContents.
     */
    data: XOR<PersonalContentUpdateManyMutationInput, PersonalContentUncheckedUpdateManyInput>
    /**
     * Filter which PersonalContents to update
     */
    where?: PersonalContentWhereInput
  }

  /**
   * PersonalContent upsert
   */
  export type PersonalContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalContent
     */
    select?: PersonalContentSelect<ExtArgs> | null
    /**
     * The filter to search for the PersonalContent to update in case it exists.
     */
    where: PersonalContentWhereUniqueInput
    /**
     * In case the PersonalContent found by the `where` argument doesn't exist, create a new PersonalContent with this data.
     */
    create: XOR<PersonalContentCreateInput, PersonalContentUncheckedCreateInput>
    /**
     * In case the PersonalContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalContentUpdateInput, PersonalContentUncheckedUpdateInput>
  }

  /**
   * PersonalContent delete
   */
  export type PersonalContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalContent
     */
    select?: PersonalContentSelect<ExtArgs> | null
    /**
     * Filter which PersonalContent to delete.
     */
    where: PersonalContentWhereUniqueInput
  }

  /**
   * PersonalContent deleteMany
   */
  export type PersonalContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalContents to delete
     */
    where?: PersonalContentWhereInput
  }

  /**
   * PersonalContent without action
   */
  export type PersonalContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalContent
     */
    select?: PersonalContentSelect<ExtArgs> | null
  }


  /**
   * Model JobRole
   */

  export type AggregateJobRole = {
    _count: JobRoleCountAggregateOutputType | null
    _avg: JobRoleAvgAggregateOutputType | null
    _sum: JobRoleSumAggregateOutputType | null
    _min: JobRoleMinAggregateOutputType | null
    _max: JobRoleMaxAggregateOutputType | null
  }

  export type JobRoleAvgAggregateOutputType = {
    order_index: number | null
  }

  export type JobRoleSumAggregateOutputType = {
    order_index: number | null
  }

  export type JobRoleMinAggregateOutputType = {
    id: string | null
    label: string | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type JobRoleMaxAggregateOutputType = {
    id: string | null
    label: string | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type JobRoleCountAggregateOutputType = {
    id: number
    label: number
    order_index: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type JobRoleAvgAggregateInputType = {
    order_index?: true
  }

  export type JobRoleSumAggregateInputType = {
    order_index?: true
  }

  export type JobRoleMinAggregateInputType = {
    id?: true
    label?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type JobRoleMaxAggregateInputType = {
    id?: true
    label?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type JobRoleCountAggregateInputType = {
    id?: true
    label?: true
    order_index?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type JobRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobRole to aggregate.
     */
    where?: JobRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobRoles to fetch.
     */
    orderBy?: JobRoleOrderByWithRelationInput | JobRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobRoles
    **/
    _count?: true | JobRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobRoleMaxAggregateInputType
  }

  export type GetJobRoleAggregateType<T extends JobRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateJobRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobRole[P]>
      : GetScalarType<T[P], AggregateJobRole[P]>
  }




  export type JobRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobRoleWhereInput
    orderBy?: JobRoleOrderByWithAggregationInput | JobRoleOrderByWithAggregationInput[]
    by: JobRoleScalarFieldEnum[] | JobRoleScalarFieldEnum
    having?: JobRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobRoleCountAggregateInputType | true
    _avg?: JobRoleAvgAggregateInputType
    _sum?: JobRoleSumAggregateInputType
    _min?: JobRoleMinAggregateInputType
    _max?: JobRoleMaxAggregateInputType
  }

  export type JobRoleGroupByOutputType = {
    id: string
    label: string
    order_index: number
    created_at: Date
    updated_at: Date
    _count: JobRoleCountAggregateOutputType | null
    _avg: JobRoleAvgAggregateOutputType | null
    _sum: JobRoleSumAggregateOutputType | null
    _min: JobRoleMinAggregateOutputType | null
    _max: JobRoleMaxAggregateOutputType | null
  }

  type GetJobRoleGroupByPayload<T extends JobRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobRoleGroupByOutputType[P]>
            : GetScalarType<T[P], JobRoleGroupByOutputType[P]>
        }
      >
    >


  export type JobRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["jobRole"]>

  export type JobRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["jobRole"]>

  export type JobRoleSelectScalar = {
    id?: boolean
    label?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $JobRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobRole"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      order_index: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["jobRole"]>
    composites: {}
  }

  type JobRoleGetPayload<S extends boolean | null | undefined | JobRoleDefaultArgs> = $Result.GetResult<Prisma.$JobRolePayload, S>

  type JobRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JobRoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobRoleCountAggregateInputType | true
    }

  export interface JobRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobRole'], meta: { name: 'JobRole' } }
    /**
     * Find zero or one JobRole that matches the filter.
     * @param {JobRoleFindUniqueArgs} args - Arguments to find a JobRole
     * @example
     * // Get one JobRole
     * const jobRole = await prisma.jobRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobRoleFindUniqueArgs>(args: SelectSubset<T, JobRoleFindUniqueArgs<ExtArgs>>): Prisma__JobRoleClient<$Result.GetResult<Prisma.$JobRolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one JobRole that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JobRoleFindUniqueOrThrowArgs} args - Arguments to find a JobRole
     * @example
     * // Get one JobRole
     * const jobRole = await prisma.jobRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, JobRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobRoleClient<$Result.GetResult<Prisma.$JobRolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first JobRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRoleFindFirstArgs} args - Arguments to find a JobRole
     * @example
     * // Get one JobRole
     * const jobRole = await prisma.jobRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobRoleFindFirstArgs>(args?: SelectSubset<T, JobRoleFindFirstArgs<ExtArgs>>): Prisma__JobRoleClient<$Result.GetResult<Prisma.$JobRolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first JobRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRoleFindFirstOrThrowArgs} args - Arguments to find a JobRole
     * @example
     * // Get one JobRole
     * const jobRole = await prisma.jobRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, JobRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobRoleClient<$Result.GetResult<Prisma.$JobRolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more JobRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobRoles
     * const jobRoles = await prisma.jobRole.findMany()
     * 
     * // Get first 10 JobRoles
     * const jobRoles = await prisma.jobRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobRoleWithIdOnly = await prisma.jobRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobRoleFindManyArgs>(args?: SelectSubset<T, JobRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobRolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a JobRole.
     * @param {JobRoleCreateArgs} args - Arguments to create a JobRole.
     * @example
     * // Create one JobRole
     * const JobRole = await prisma.jobRole.create({
     *   data: {
     *     // ... data to create a JobRole
     *   }
     * })
     * 
     */
    create<T extends JobRoleCreateArgs>(args: SelectSubset<T, JobRoleCreateArgs<ExtArgs>>): Prisma__JobRoleClient<$Result.GetResult<Prisma.$JobRolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many JobRoles.
     * @param {JobRoleCreateManyArgs} args - Arguments to create many JobRoles.
     * @example
     * // Create many JobRoles
     * const jobRole = await prisma.jobRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobRoleCreateManyArgs>(args?: SelectSubset<T, JobRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobRoles and returns the data saved in the database.
     * @param {JobRoleCreateManyAndReturnArgs} args - Arguments to create many JobRoles.
     * @example
     * // Create many JobRoles
     * const jobRole = await prisma.jobRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobRoles and only return the `id`
     * const jobRoleWithIdOnly = await prisma.jobRole.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, JobRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobRolePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a JobRole.
     * @param {JobRoleDeleteArgs} args - Arguments to delete one JobRole.
     * @example
     * // Delete one JobRole
     * const JobRole = await prisma.jobRole.delete({
     *   where: {
     *     // ... filter to delete one JobRole
     *   }
     * })
     * 
     */
    delete<T extends JobRoleDeleteArgs>(args: SelectSubset<T, JobRoleDeleteArgs<ExtArgs>>): Prisma__JobRoleClient<$Result.GetResult<Prisma.$JobRolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one JobRole.
     * @param {JobRoleUpdateArgs} args - Arguments to update one JobRole.
     * @example
     * // Update one JobRole
     * const jobRole = await prisma.jobRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobRoleUpdateArgs>(args: SelectSubset<T, JobRoleUpdateArgs<ExtArgs>>): Prisma__JobRoleClient<$Result.GetResult<Prisma.$JobRolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more JobRoles.
     * @param {JobRoleDeleteManyArgs} args - Arguments to filter JobRoles to delete.
     * @example
     * // Delete a few JobRoles
     * const { count } = await prisma.jobRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobRoleDeleteManyArgs>(args?: SelectSubset<T, JobRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobRoles
     * const jobRole = await prisma.jobRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobRoleUpdateManyArgs>(args: SelectSubset<T, JobRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JobRole.
     * @param {JobRoleUpsertArgs} args - Arguments to update or create a JobRole.
     * @example
     * // Update or create a JobRole
     * const jobRole = await prisma.jobRole.upsert({
     *   create: {
     *     // ... data to create a JobRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobRole we want to update
     *   }
     * })
     */
    upsert<T extends JobRoleUpsertArgs>(args: SelectSubset<T, JobRoleUpsertArgs<ExtArgs>>): Prisma__JobRoleClient<$Result.GetResult<Prisma.$JobRolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of JobRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRoleCountArgs} args - Arguments to filter JobRoles to count.
     * @example
     * // Count the number of JobRoles
     * const count = await prisma.jobRole.count({
     *   where: {
     *     // ... the filter for the JobRoles we want to count
     *   }
     * })
    **/
    count<T extends JobRoleCountArgs>(
      args?: Subset<T, JobRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobRoleAggregateArgs>(args: Subset<T, JobRoleAggregateArgs>): Prisma.PrismaPromise<GetJobRoleAggregateType<T>>

    /**
     * Group by JobRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobRoleGroupByArgs['orderBy'] }
        : { orderBy?: JobRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobRole model
   */
  readonly fields: JobRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobRole model
   */ 
  interface JobRoleFieldRefs {
    readonly id: FieldRef<"JobRole", 'String'>
    readonly label: FieldRef<"JobRole", 'String'>
    readonly order_index: FieldRef<"JobRole", 'Int'>
    readonly created_at: FieldRef<"JobRole", 'DateTime'>
    readonly updated_at: FieldRef<"JobRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobRole findUnique
   */
  export type JobRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRole
     */
    select?: JobRoleSelect<ExtArgs> | null
    /**
     * Filter, which JobRole to fetch.
     */
    where: JobRoleWhereUniqueInput
  }

  /**
   * JobRole findUniqueOrThrow
   */
  export type JobRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRole
     */
    select?: JobRoleSelect<ExtArgs> | null
    /**
     * Filter, which JobRole to fetch.
     */
    where: JobRoleWhereUniqueInput
  }

  /**
   * JobRole findFirst
   */
  export type JobRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRole
     */
    select?: JobRoleSelect<ExtArgs> | null
    /**
     * Filter, which JobRole to fetch.
     */
    where?: JobRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobRoles to fetch.
     */
    orderBy?: JobRoleOrderByWithRelationInput | JobRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobRoles.
     */
    cursor?: JobRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobRoles.
     */
    distinct?: JobRoleScalarFieldEnum | JobRoleScalarFieldEnum[]
  }

  /**
   * JobRole findFirstOrThrow
   */
  export type JobRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRole
     */
    select?: JobRoleSelect<ExtArgs> | null
    /**
     * Filter, which JobRole to fetch.
     */
    where?: JobRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobRoles to fetch.
     */
    orderBy?: JobRoleOrderByWithRelationInput | JobRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobRoles.
     */
    cursor?: JobRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobRoles.
     */
    distinct?: JobRoleScalarFieldEnum | JobRoleScalarFieldEnum[]
  }

  /**
   * JobRole findMany
   */
  export type JobRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRole
     */
    select?: JobRoleSelect<ExtArgs> | null
    /**
     * Filter, which JobRoles to fetch.
     */
    where?: JobRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobRoles to fetch.
     */
    orderBy?: JobRoleOrderByWithRelationInput | JobRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobRoles.
     */
    cursor?: JobRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobRoles.
     */
    skip?: number
    distinct?: JobRoleScalarFieldEnum | JobRoleScalarFieldEnum[]
  }

  /**
   * JobRole create
   */
  export type JobRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRole
     */
    select?: JobRoleSelect<ExtArgs> | null
    /**
     * The data needed to create a JobRole.
     */
    data: XOR<JobRoleCreateInput, JobRoleUncheckedCreateInput>
  }

  /**
   * JobRole createMany
   */
  export type JobRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobRoles.
     */
    data: JobRoleCreateManyInput | JobRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobRole createManyAndReturn
   */
  export type JobRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRole
     */
    select?: JobRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many JobRoles.
     */
    data: JobRoleCreateManyInput | JobRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobRole update
   */
  export type JobRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRole
     */
    select?: JobRoleSelect<ExtArgs> | null
    /**
     * The data needed to update a JobRole.
     */
    data: XOR<JobRoleUpdateInput, JobRoleUncheckedUpdateInput>
    /**
     * Choose, which JobRole to update.
     */
    where: JobRoleWhereUniqueInput
  }

  /**
   * JobRole updateMany
   */
  export type JobRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobRoles.
     */
    data: XOR<JobRoleUpdateManyMutationInput, JobRoleUncheckedUpdateManyInput>
    /**
     * Filter which JobRoles to update
     */
    where?: JobRoleWhereInput
  }

  /**
   * JobRole upsert
   */
  export type JobRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRole
     */
    select?: JobRoleSelect<ExtArgs> | null
    /**
     * The filter to search for the JobRole to update in case it exists.
     */
    where: JobRoleWhereUniqueInput
    /**
     * In case the JobRole found by the `where` argument doesn't exist, create a new JobRole with this data.
     */
    create: XOR<JobRoleCreateInput, JobRoleUncheckedCreateInput>
    /**
     * In case the JobRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobRoleUpdateInput, JobRoleUncheckedUpdateInput>
  }

  /**
   * JobRole delete
   */
  export type JobRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRole
     */
    select?: JobRoleSelect<ExtArgs> | null
    /**
     * Filter which JobRole to delete.
     */
    where: JobRoleWhereUniqueInput
  }

  /**
   * JobRole deleteMany
   */
  export type JobRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobRoles to delete
     */
    where?: JobRoleWhereInput
  }

  /**
   * JobRole without action
   */
  export type JobRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRole
     */
    select?: JobRoleSelect<ExtArgs> | null
  }


  /**
   * Model AboutContent
   */

  export type AggregateAboutContent = {
    _count: AboutContentCountAggregateOutputType | null
    _min: AboutContentMinAggregateOutputType | null
    _max: AboutContentMaxAggregateOutputType | null
  }

  export type AboutContentMinAggregateOutputType = {
    id: string | null
    role_title: string | null
    updated_at: Date | null
  }

  export type AboutContentMaxAggregateOutputType = {
    id: string | null
    role_title: string | null
    updated_at: Date | null
  }

  export type AboutContentCountAggregateOutputType = {
    id: number
    role_title: number
    updated_at: number
    _all: number
  }


  export type AboutContentMinAggregateInputType = {
    id?: true
    role_title?: true
    updated_at?: true
  }

  export type AboutContentMaxAggregateInputType = {
    id?: true
    role_title?: true
    updated_at?: true
  }

  export type AboutContentCountAggregateInputType = {
    id?: true
    role_title?: true
    updated_at?: true
    _all?: true
  }

  export type AboutContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutContent to aggregate.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutContents
    **/
    _count?: true | AboutContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutContentMaxAggregateInputType
  }

  export type GetAboutContentAggregateType<T extends AboutContentAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutContent[P]>
      : GetScalarType<T[P], AggregateAboutContent[P]>
  }




  export type AboutContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutContentWhereInput
    orderBy?: AboutContentOrderByWithAggregationInput | AboutContentOrderByWithAggregationInput[]
    by: AboutContentScalarFieldEnum[] | AboutContentScalarFieldEnum
    having?: AboutContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutContentCountAggregateInputType | true
    _min?: AboutContentMinAggregateInputType
    _max?: AboutContentMaxAggregateInputType
  }

  export type AboutContentGroupByOutputType = {
    id: string
    role_title: string
    updated_at: Date
    _count: AboutContentCountAggregateOutputType | null
    _min: AboutContentMinAggregateOutputType | null
    _max: AboutContentMaxAggregateOutputType | null
  }

  type GetAboutContentGroupByPayload<T extends AboutContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutContentGroupByOutputType[P]>
            : GetScalarType<T[P], AboutContentGroupByOutputType[P]>
        }
      >
    >


  export type AboutContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_title?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["aboutContent"]>

  export type AboutContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_title?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["aboutContent"]>

  export type AboutContentSelectScalar = {
    id?: boolean
    role_title?: boolean
    updated_at?: boolean
  }


  export type $AboutContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role_title: string
      updated_at: Date
    }, ExtArgs["result"]["aboutContent"]>
    composites: {}
  }

  type AboutContentGetPayload<S extends boolean | null | undefined | AboutContentDefaultArgs> = $Result.GetResult<Prisma.$AboutContentPayload, S>

  type AboutContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AboutContentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AboutContentCountAggregateInputType | true
    }

  export interface AboutContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutContent'], meta: { name: 'AboutContent' } }
    /**
     * Find zero or one AboutContent that matches the filter.
     * @param {AboutContentFindUniqueArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutContentFindUniqueArgs>(args: SelectSubset<T, AboutContentFindUniqueArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AboutContent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AboutContentFindUniqueOrThrowArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutContentFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AboutContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentFindFirstArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutContentFindFirstArgs>(args?: SelectSubset<T, AboutContentFindFirstArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AboutContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentFindFirstOrThrowArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutContentFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AboutContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutContents
     * const aboutContents = await prisma.aboutContent.findMany()
     * 
     * // Get first 10 AboutContents
     * const aboutContents = await prisma.aboutContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutContentWithIdOnly = await prisma.aboutContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutContentFindManyArgs>(args?: SelectSubset<T, AboutContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AboutContent.
     * @param {AboutContentCreateArgs} args - Arguments to create a AboutContent.
     * @example
     * // Create one AboutContent
     * const AboutContent = await prisma.aboutContent.create({
     *   data: {
     *     // ... data to create a AboutContent
     *   }
     * })
     * 
     */
    create<T extends AboutContentCreateArgs>(args: SelectSubset<T, AboutContentCreateArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AboutContents.
     * @param {AboutContentCreateManyArgs} args - Arguments to create many AboutContents.
     * @example
     * // Create many AboutContents
     * const aboutContent = await prisma.aboutContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutContentCreateManyArgs>(args?: SelectSubset<T, AboutContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AboutContents and returns the data saved in the database.
     * @param {AboutContentCreateManyAndReturnArgs} args - Arguments to create many AboutContents.
     * @example
     * // Create many AboutContents
     * const aboutContent = await prisma.aboutContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AboutContents and only return the `id`
     * const aboutContentWithIdOnly = await prisma.aboutContent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutContentCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AboutContent.
     * @param {AboutContentDeleteArgs} args - Arguments to delete one AboutContent.
     * @example
     * // Delete one AboutContent
     * const AboutContent = await prisma.aboutContent.delete({
     *   where: {
     *     // ... filter to delete one AboutContent
     *   }
     * })
     * 
     */
    delete<T extends AboutContentDeleteArgs>(args: SelectSubset<T, AboutContentDeleteArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AboutContent.
     * @param {AboutContentUpdateArgs} args - Arguments to update one AboutContent.
     * @example
     * // Update one AboutContent
     * const aboutContent = await prisma.aboutContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutContentUpdateArgs>(args: SelectSubset<T, AboutContentUpdateArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AboutContents.
     * @param {AboutContentDeleteManyArgs} args - Arguments to filter AboutContents to delete.
     * @example
     * // Delete a few AboutContents
     * const { count } = await prisma.aboutContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutContentDeleteManyArgs>(args?: SelectSubset<T, AboutContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutContents
     * const aboutContent = await prisma.aboutContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutContentUpdateManyArgs>(args: SelectSubset<T, AboutContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AboutContent.
     * @param {AboutContentUpsertArgs} args - Arguments to update or create a AboutContent.
     * @example
     * // Update or create a AboutContent
     * const aboutContent = await prisma.aboutContent.upsert({
     *   create: {
     *     // ... data to create a AboutContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutContent we want to update
     *   }
     * })
     */
    upsert<T extends AboutContentUpsertArgs>(args: SelectSubset<T, AboutContentUpsertArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AboutContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentCountArgs} args - Arguments to filter AboutContents to count.
     * @example
     * // Count the number of AboutContents
     * const count = await prisma.aboutContent.count({
     *   where: {
     *     // ... the filter for the AboutContents we want to count
     *   }
     * })
    **/
    count<T extends AboutContentCountArgs>(
      args?: Subset<T, AboutContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AboutContentAggregateArgs>(args: Subset<T, AboutContentAggregateArgs>): Prisma.PrismaPromise<GetAboutContentAggregateType<T>>

    /**
     * Group by AboutContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AboutContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutContentGroupByArgs['orderBy'] }
        : { orderBy?: AboutContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutContent model
   */
  readonly fields: AboutContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AboutContent model
   */ 
  interface AboutContentFieldRefs {
    readonly id: FieldRef<"AboutContent", 'String'>
    readonly role_title: FieldRef<"AboutContent", 'String'>
    readonly updated_at: FieldRef<"AboutContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AboutContent findUnique
   */
  export type AboutContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent findUniqueOrThrow
   */
  export type AboutContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent findFirst
   */
  export type AboutContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutContents.
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutContents.
     */
    distinct?: AboutContentScalarFieldEnum | AboutContentScalarFieldEnum[]
  }

  /**
   * AboutContent findFirstOrThrow
   */
  export type AboutContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutContents.
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutContents.
     */
    distinct?: AboutContentScalarFieldEnum | AboutContentScalarFieldEnum[]
  }

  /**
   * AboutContent findMany
   */
  export type AboutContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Filter, which AboutContents to fetch.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutContents.
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    distinct?: AboutContentScalarFieldEnum | AboutContentScalarFieldEnum[]
  }

  /**
   * AboutContent create
   */
  export type AboutContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * The data needed to create a AboutContent.
     */
    data: XOR<AboutContentCreateInput, AboutContentUncheckedCreateInput>
  }

  /**
   * AboutContent createMany
   */
  export type AboutContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutContents.
     */
    data: AboutContentCreateManyInput | AboutContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutContent createManyAndReturn
   */
  export type AboutContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AboutContents.
     */
    data: AboutContentCreateManyInput | AboutContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutContent update
   */
  export type AboutContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * The data needed to update a AboutContent.
     */
    data: XOR<AboutContentUpdateInput, AboutContentUncheckedUpdateInput>
    /**
     * Choose, which AboutContent to update.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent updateMany
   */
  export type AboutContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutContents.
     */
    data: XOR<AboutContentUpdateManyMutationInput, AboutContentUncheckedUpdateManyInput>
    /**
     * Filter which AboutContents to update
     */
    where?: AboutContentWhereInput
  }

  /**
   * AboutContent upsert
   */
  export type AboutContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * The filter to search for the AboutContent to update in case it exists.
     */
    where: AboutContentWhereUniqueInput
    /**
     * In case the AboutContent found by the `where` argument doesn't exist, create a new AboutContent with this data.
     */
    create: XOR<AboutContentCreateInput, AboutContentUncheckedCreateInput>
    /**
     * In case the AboutContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutContentUpdateInput, AboutContentUncheckedUpdateInput>
  }

  /**
   * AboutContent delete
   */
  export type AboutContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Filter which AboutContent to delete.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent deleteMany
   */
  export type AboutContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutContents to delete
     */
    where?: AboutContentWhereInput
  }

  /**
   * AboutContent without action
   */
  export type AboutContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
  }


  /**
   * Model AboutParagraph
   */

  export type AggregateAboutParagraph = {
    _count: AboutParagraphCountAggregateOutputType | null
    _avg: AboutParagraphAvgAggregateOutputType | null
    _sum: AboutParagraphSumAggregateOutputType | null
    _min: AboutParagraphMinAggregateOutputType | null
    _max: AboutParagraphMaxAggregateOutputType | null
  }

  export type AboutParagraphAvgAggregateOutputType = {
    order_index: number | null
  }

  export type AboutParagraphSumAggregateOutputType = {
    order_index: number | null
  }

  export type AboutParagraphMinAggregateOutputType = {
    id: string | null
    content: string | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AboutParagraphMaxAggregateOutputType = {
    id: string | null
    content: string | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AboutParagraphCountAggregateOutputType = {
    id: number
    content: number
    order_index: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AboutParagraphAvgAggregateInputType = {
    order_index?: true
  }

  export type AboutParagraphSumAggregateInputType = {
    order_index?: true
  }

  export type AboutParagraphMinAggregateInputType = {
    id?: true
    content?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type AboutParagraphMaxAggregateInputType = {
    id?: true
    content?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type AboutParagraphCountAggregateInputType = {
    id?: true
    content?: true
    order_index?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AboutParagraphAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutParagraph to aggregate.
     */
    where?: AboutParagraphWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutParagraphs to fetch.
     */
    orderBy?: AboutParagraphOrderByWithRelationInput | AboutParagraphOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutParagraphWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutParagraphs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutParagraphs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutParagraphs
    **/
    _count?: true | AboutParagraphCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AboutParagraphAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AboutParagraphSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutParagraphMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutParagraphMaxAggregateInputType
  }

  export type GetAboutParagraphAggregateType<T extends AboutParagraphAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutParagraph]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutParagraph[P]>
      : GetScalarType<T[P], AggregateAboutParagraph[P]>
  }




  export type AboutParagraphGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutParagraphWhereInput
    orderBy?: AboutParagraphOrderByWithAggregationInput | AboutParagraphOrderByWithAggregationInput[]
    by: AboutParagraphScalarFieldEnum[] | AboutParagraphScalarFieldEnum
    having?: AboutParagraphScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutParagraphCountAggregateInputType | true
    _avg?: AboutParagraphAvgAggregateInputType
    _sum?: AboutParagraphSumAggregateInputType
    _min?: AboutParagraphMinAggregateInputType
    _max?: AboutParagraphMaxAggregateInputType
  }

  export type AboutParagraphGroupByOutputType = {
    id: string
    content: string
    order_index: number
    created_at: Date
    updated_at: Date
    _count: AboutParagraphCountAggregateOutputType | null
    _avg: AboutParagraphAvgAggregateOutputType | null
    _sum: AboutParagraphSumAggregateOutputType | null
    _min: AboutParagraphMinAggregateOutputType | null
    _max: AboutParagraphMaxAggregateOutputType | null
  }

  type GetAboutParagraphGroupByPayload<T extends AboutParagraphGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutParagraphGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutParagraphGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutParagraphGroupByOutputType[P]>
            : GetScalarType<T[P], AboutParagraphGroupByOutputType[P]>
        }
      >
    >


  export type AboutParagraphSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["aboutParagraph"]>

  export type AboutParagraphSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["aboutParagraph"]>

  export type AboutParagraphSelectScalar = {
    id?: boolean
    content?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $AboutParagraphPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutParagraph"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      order_index: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["aboutParagraph"]>
    composites: {}
  }

  type AboutParagraphGetPayload<S extends boolean | null | undefined | AboutParagraphDefaultArgs> = $Result.GetResult<Prisma.$AboutParagraphPayload, S>

  type AboutParagraphCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AboutParagraphFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AboutParagraphCountAggregateInputType | true
    }

  export interface AboutParagraphDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutParagraph'], meta: { name: 'AboutParagraph' } }
    /**
     * Find zero or one AboutParagraph that matches the filter.
     * @param {AboutParagraphFindUniqueArgs} args - Arguments to find a AboutParagraph
     * @example
     * // Get one AboutParagraph
     * const aboutParagraph = await prisma.aboutParagraph.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutParagraphFindUniqueArgs>(args: SelectSubset<T, AboutParagraphFindUniqueArgs<ExtArgs>>): Prisma__AboutParagraphClient<$Result.GetResult<Prisma.$AboutParagraphPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AboutParagraph that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AboutParagraphFindUniqueOrThrowArgs} args - Arguments to find a AboutParagraph
     * @example
     * // Get one AboutParagraph
     * const aboutParagraph = await prisma.aboutParagraph.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutParagraphFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutParagraphFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutParagraphClient<$Result.GetResult<Prisma.$AboutParagraphPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AboutParagraph that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutParagraphFindFirstArgs} args - Arguments to find a AboutParagraph
     * @example
     * // Get one AboutParagraph
     * const aboutParagraph = await prisma.aboutParagraph.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutParagraphFindFirstArgs>(args?: SelectSubset<T, AboutParagraphFindFirstArgs<ExtArgs>>): Prisma__AboutParagraphClient<$Result.GetResult<Prisma.$AboutParagraphPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AboutParagraph that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutParagraphFindFirstOrThrowArgs} args - Arguments to find a AboutParagraph
     * @example
     * // Get one AboutParagraph
     * const aboutParagraph = await prisma.aboutParagraph.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutParagraphFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutParagraphFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutParagraphClient<$Result.GetResult<Prisma.$AboutParagraphPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AboutParagraphs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutParagraphFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutParagraphs
     * const aboutParagraphs = await prisma.aboutParagraph.findMany()
     * 
     * // Get first 10 AboutParagraphs
     * const aboutParagraphs = await prisma.aboutParagraph.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutParagraphWithIdOnly = await prisma.aboutParagraph.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutParagraphFindManyArgs>(args?: SelectSubset<T, AboutParagraphFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutParagraphPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AboutParagraph.
     * @param {AboutParagraphCreateArgs} args - Arguments to create a AboutParagraph.
     * @example
     * // Create one AboutParagraph
     * const AboutParagraph = await prisma.aboutParagraph.create({
     *   data: {
     *     // ... data to create a AboutParagraph
     *   }
     * })
     * 
     */
    create<T extends AboutParagraphCreateArgs>(args: SelectSubset<T, AboutParagraphCreateArgs<ExtArgs>>): Prisma__AboutParagraphClient<$Result.GetResult<Prisma.$AboutParagraphPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AboutParagraphs.
     * @param {AboutParagraphCreateManyArgs} args - Arguments to create many AboutParagraphs.
     * @example
     * // Create many AboutParagraphs
     * const aboutParagraph = await prisma.aboutParagraph.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutParagraphCreateManyArgs>(args?: SelectSubset<T, AboutParagraphCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AboutParagraphs and returns the data saved in the database.
     * @param {AboutParagraphCreateManyAndReturnArgs} args - Arguments to create many AboutParagraphs.
     * @example
     * // Create many AboutParagraphs
     * const aboutParagraph = await prisma.aboutParagraph.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AboutParagraphs and only return the `id`
     * const aboutParagraphWithIdOnly = await prisma.aboutParagraph.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutParagraphCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutParagraphCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutParagraphPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AboutParagraph.
     * @param {AboutParagraphDeleteArgs} args - Arguments to delete one AboutParagraph.
     * @example
     * // Delete one AboutParagraph
     * const AboutParagraph = await prisma.aboutParagraph.delete({
     *   where: {
     *     // ... filter to delete one AboutParagraph
     *   }
     * })
     * 
     */
    delete<T extends AboutParagraphDeleteArgs>(args: SelectSubset<T, AboutParagraphDeleteArgs<ExtArgs>>): Prisma__AboutParagraphClient<$Result.GetResult<Prisma.$AboutParagraphPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AboutParagraph.
     * @param {AboutParagraphUpdateArgs} args - Arguments to update one AboutParagraph.
     * @example
     * // Update one AboutParagraph
     * const aboutParagraph = await prisma.aboutParagraph.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutParagraphUpdateArgs>(args: SelectSubset<T, AboutParagraphUpdateArgs<ExtArgs>>): Prisma__AboutParagraphClient<$Result.GetResult<Prisma.$AboutParagraphPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AboutParagraphs.
     * @param {AboutParagraphDeleteManyArgs} args - Arguments to filter AboutParagraphs to delete.
     * @example
     * // Delete a few AboutParagraphs
     * const { count } = await prisma.aboutParagraph.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutParagraphDeleteManyArgs>(args?: SelectSubset<T, AboutParagraphDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutParagraphs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutParagraphUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutParagraphs
     * const aboutParagraph = await prisma.aboutParagraph.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutParagraphUpdateManyArgs>(args: SelectSubset<T, AboutParagraphUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AboutParagraph.
     * @param {AboutParagraphUpsertArgs} args - Arguments to update or create a AboutParagraph.
     * @example
     * // Update or create a AboutParagraph
     * const aboutParagraph = await prisma.aboutParagraph.upsert({
     *   create: {
     *     // ... data to create a AboutParagraph
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutParagraph we want to update
     *   }
     * })
     */
    upsert<T extends AboutParagraphUpsertArgs>(args: SelectSubset<T, AboutParagraphUpsertArgs<ExtArgs>>): Prisma__AboutParagraphClient<$Result.GetResult<Prisma.$AboutParagraphPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AboutParagraphs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutParagraphCountArgs} args - Arguments to filter AboutParagraphs to count.
     * @example
     * // Count the number of AboutParagraphs
     * const count = await prisma.aboutParagraph.count({
     *   where: {
     *     // ... the filter for the AboutParagraphs we want to count
     *   }
     * })
    **/
    count<T extends AboutParagraphCountArgs>(
      args?: Subset<T, AboutParagraphCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutParagraphCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutParagraph.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutParagraphAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AboutParagraphAggregateArgs>(args: Subset<T, AboutParagraphAggregateArgs>): Prisma.PrismaPromise<GetAboutParagraphAggregateType<T>>

    /**
     * Group by AboutParagraph.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutParagraphGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AboutParagraphGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutParagraphGroupByArgs['orderBy'] }
        : { orderBy?: AboutParagraphGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutParagraphGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutParagraphGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutParagraph model
   */
  readonly fields: AboutParagraphFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutParagraph.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutParagraphClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AboutParagraph model
   */ 
  interface AboutParagraphFieldRefs {
    readonly id: FieldRef<"AboutParagraph", 'String'>
    readonly content: FieldRef<"AboutParagraph", 'String'>
    readonly order_index: FieldRef<"AboutParagraph", 'Int'>
    readonly created_at: FieldRef<"AboutParagraph", 'DateTime'>
    readonly updated_at: FieldRef<"AboutParagraph", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AboutParagraph findUnique
   */
  export type AboutParagraphFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutParagraph
     */
    select?: AboutParagraphSelect<ExtArgs> | null
    /**
     * Filter, which AboutParagraph to fetch.
     */
    where: AboutParagraphWhereUniqueInput
  }

  /**
   * AboutParagraph findUniqueOrThrow
   */
  export type AboutParagraphFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutParagraph
     */
    select?: AboutParagraphSelect<ExtArgs> | null
    /**
     * Filter, which AboutParagraph to fetch.
     */
    where: AboutParagraphWhereUniqueInput
  }

  /**
   * AboutParagraph findFirst
   */
  export type AboutParagraphFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutParagraph
     */
    select?: AboutParagraphSelect<ExtArgs> | null
    /**
     * Filter, which AboutParagraph to fetch.
     */
    where?: AboutParagraphWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutParagraphs to fetch.
     */
    orderBy?: AboutParagraphOrderByWithRelationInput | AboutParagraphOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutParagraphs.
     */
    cursor?: AboutParagraphWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutParagraphs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutParagraphs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutParagraphs.
     */
    distinct?: AboutParagraphScalarFieldEnum | AboutParagraphScalarFieldEnum[]
  }

  /**
   * AboutParagraph findFirstOrThrow
   */
  export type AboutParagraphFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutParagraph
     */
    select?: AboutParagraphSelect<ExtArgs> | null
    /**
     * Filter, which AboutParagraph to fetch.
     */
    where?: AboutParagraphWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutParagraphs to fetch.
     */
    orderBy?: AboutParagraphOrderByWithRelationInput | AboutParagraphOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutParagraphs.
     */
    cursor?: AboutParagraphWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutParagraphs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutParagraphs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutParagraphs.
     */
    distinct?: AboutParagraphScalarFieldEnum | AboutParagraphScalarFieldEnum[]
  }

  /**
   * AboutParagraph findMany
   */
  export type AboutParagraphFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutParagraph
     */
    select?: AboutParagraphSelect<ExtArgs> | null
    /**
     * Filter, which AboutParagraphs to fetch.
     */
    where?: AboutParagraphWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutParagraphs to fetch.
     */
    orderBy?: AboutParagraphOrderByWithRelationInput | AboutParagraphOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutParagraphs.
     */
    cursor?: AboutParagraphWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutParagraphs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutParagraphs.
     */
    skip?: number
    distinct?: AboutParagraphScalarFieldEnum | AboutParagraphScalarFieldEnum[]
  }

  /**
   * AboutParagraph create
   */
  export type AboutParagraphCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutParagraph
     */
    select?: AboutParagraphSelect<ExtArgs> | null
    /**
     * The data needed to create a AboutParagraph.
     */
    data: XOR<AboutParagraphCreateInput, AboutParagraphUncheckedCreateInput>
  }

  /**
   * AboutParagraph createMany
   */
  export type AboutParagraphCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutParagraphs.
     */
    data: AboutParagraphCreateManyInput | AboutParagraphCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutParagraph createManyAndReturn
   */
  export type AboutParagraphCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutParagraph
     */
    select?: AboutParagraphSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AboutParagraphs.
     */
    data: AboutParagraphCreateManyInput | AboutParagraphCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutParagraph update
   */
  export type AboutParagraphUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutParagraph
     */
    select?: AboutParagraphSelect<ExtArgs> | null
    /**
     * The data needed to update a AboutParagraph.
     */
    data: XOR<AboutParagraphUpdateInput, AboutParagraphUncheckedUpdateInput>
    /**
     * Choose, which AboutParagraph to update.
     */
    where: AboutParagraphWhereUniqueInput
  }

  /**
   * AboutParagraph updateMany
   */
  export type AboutParagraphUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutParagraphs.
     */
    data: XOR<AboutParagraphUpdateManyMutationInput, AboutParagraphUncheckedUpdateManyInput>
    /**
     * Filter which AboutParagraphs to update
     */
    where?: AboutParagraphWhereInput
  }

  /**
   * AboutParagraph upsert
   */
  export type AboutParagraphUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutParagraph
     */
    select?: AboutParagraphSelect<ExtArgs> | null
    /**
     * The filter to search for the AboutParagraph to update in case it exists.
     */
    where: AboutParagraphWhereUniqueInput
    /**
     * In case the AboutParagraph found by the `where` argument doesn't exist, create a new AboutParagraph with this data.
     */
    create: XOR<AboutParagraphCreateInput, AboutParagraphUncheckedCreateInput>
    /**
     * In case the AboutParagraph was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutParagraphUpdateInput, AboutParagraphUncheckedUpdateInput>
  }

  /**
   * AboutParagraph delete
   */
  export type AboutParagraphDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutParagraph
     */
    select?: AboutParagraphSelect<ExtArgs> | null
    /**
     * Filter which AboutParagraph to delete.
     */
    where: AboutParagraphWhereUniqueInput
  }

  /**
   * AboutParagraph deleteMany
   */
  export type AboutParagraphDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutParagraphs to delete
     */
    where?: AboutParagraphWhereInput
  }

  /**
   * AboutParagraph without action
   */
  export type AboutParagraphDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutParagraph
     */
    select?: AboutParagraphSelect<ExtArgs> | null
  }


  /**
   * Model Stat
   */

  export type AggregateStat = {
    _count: StatCountAggregateOutputType | null
    _min: StatMinAggregateOutputType | null
    _max: StatMaxAggregateOutputType | null
  }

  export type StatMinAggregateOutputType = {
    id: string | null
    label: string | null
    value: string | null
    context: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StatMaxAggregateOutputType = {
    id: string | null
    label: string | null
    value: string | null
    context: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StatCountAggregateOutputType = {
    id: number
    label: number
    value: number
    context: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StatMinAggregateInputType = {
    id?: true
    label?: true
    value?: true
    context?: true
    created_at?: true
    updated_at?: true
  }

  export type StatMaxAggregateInputType = {
    id?: true
    label?: true
    value?: true
    context?: true
    created_at?: true
    updated_at?: true
  }

  export type StatCountAggregateInputType = {
    id?: true
    label?: true
    value?: true
    context?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stat to aggregate.
     */
    where?: StatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatOrderByWithRelationInput | StatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stats
    **/
    _count?: true | StatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatMaxAggregateInputType
  }

  export type GetStatAggregateType<T extends StatAggregateArgs> = {
        [P in keyof T & keyof AggregateStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStat[P]>
      : GetScalarType<T[P], AggregateStat[P]>
  }




  export type StatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatWhereInput
    orderBy?: StatOrderByWithAggregationInput | StatOrderByWithAggregationInput[]
    by: StatScalarFieldEnum[] | StatScalarFieldEnum
    having?: StatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatCountAggregateInputType | true
    _min?: StatMinAggregateInputType
    _max?: StatMaxAggregateInputType
  }

  export type StatGroupByOutputType = {
    id: string
    label: string
    value: string
    context: string
    created_at: Date
    updated_at: Date
    _count: StatCountAggregateOutputType | null
    _min: StatMinAggregateOutputType | null
    _max: StatMaxAggregateOutputType | null
  }

  type GetStatGroupByPayload<T extends StatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatGroupByOutputType[P]>
            : GetScalarType<T[P], StatGroupByOutputType[P]>
        }
      >
    >


  export type StatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    value?: boolean
    context?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["stat"]>

  export type StatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    value?: boolean
    context?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["stat"]>

  export type StatSelectScalar = {
    id?: boolean
    label?: boolean
    value?: boolean
    context?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $StatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      value: string
      context: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["stat"]>
    composites: {}
  }

  type StatGetPayload<S extends boolean | null | undefined | StatDefaultArgs> = $Result.GetResult<Prisma.$StatPayload, S>

  type StatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StatFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StatCountAggregateInputType | true
    }

  export interface StatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stat'], meta: { name: 'Stat' } }
    /**
     * Find zero or one Stat that matches the filter.
     * @param {StatFindUniqueArgs} args - Arguments to find a Stat
     * @example
     * // Get one Stat
     * const stat = await prisma.stat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatFindUniqueArgs>(args: SelectSubset<T, StatFindUniqueArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Stat that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StatFindUniqueOrThrowArgs} args - Arguments to find a Stat
     * @example
     * // Get one Stat
     * const stat = await prisma.stat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatFindUniqueOrThrowArgs>(args: SelectSubset<T, StatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Stat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatFindFirstArgs} args - Arguments to find a Stat
     * @example
     * // Get one Stat
     * const stat = await prisma.stat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatFindFirstArgs>(args?: SelectSubset<T, StatFindFirstArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Stat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatFindFirstOrThrowArgs} args - Arguments to find a Stat
     * @example
     * // Get one Stat
     * const stat = await prisma.stat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatFindFirstOrThrowArgs>(args?: SelectSubset<T, StatFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stats
     * const stats = await prisma.stat.findMany()
     * 
     * // Get first 10 Stats
     * const stats = await prisma.stat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statWithIdOnly = await prisma.stat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatFindManyArgs>(args?: SelectSubset<T, StatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Stat.
     * @param {StatCreateArgs} args - Arguments to create a Stat.
     * @example
     * // Create one Stat
     * const Stat = await prisma.stat.create({
     *   data: {
     *     // ... data to create a Stat
     *   }
     * })
     * 
     */
    create<T extends StatCreateArgs>(args: SelectSubset<T, StatCreateArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Stats.
     * @param {StatCreateManyArgs} args - Arguments to create many Stats.
     * @example
     * // Create many Stats
     * const stat = await prisma.stat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatCreateManyArgs>(args?: SelectSubset<T, StatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stats and returns the data saved in the database.
     * @param {StatCreateManyAndReturnArgs} args - Arguments to create many Stats.
     * @example
     * // Create many Stats
     * const stat = await prisma.stat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stats and only return the `id`
     * const statWithIdOnly = await prisma.stat.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatCreateManyAndReturnArgs>(args?: SelectSubset<T, StatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Stat.
     * @param {StatDeleteArgs} args - Arguments to delete one Stat.
     * @example
     * // Delete one Stat
     * const Stat = await prisma.stat.delete({
     *   where: {
     *     // ... filter to delete one Stat
     *   }
     * })
     * 
     */
    delete<T extends StatDeleteArgs>(args: SelectSubset<T, StatDeleteArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Stat.
     * @param {StatUpdateArgs} args - Arguments to update one Stat.
     * @example
     * // Update one Stat
     * const stat = await prisma.stat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatUpdateArgs>(args: SelectSubset<T, StatUpdateArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Stats.
     * @param {StatDeleteManyArgs} args - Arguments to filter Stats to delete.
     * @example
     * // Delete a few Stats
     * const { count } = await prisma.stat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatDeleteManyArgs>(args?: SelectSubset<T, StatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stats
     * const stat = await prisma.stat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatUpdateManyArgs>(args: SelectSubset<T, StatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stat.
     * @param {StatUpsertArgs} args - Arguments to update or create a Stat.
     * @example
     * // Update or create a Stat
     * const stat = await prisma.stat.upsert({
     *   create: {
     *     // ... data to create a Stat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stat we want to update
     *   }
     * })
     */
    upsert<T extends StatUpsertArgs>(args: SelectSubset<T, StatUpsertArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatCountArgs} args - Arguments to filter Stats to count.
     * @example
     * // Count the number of Stats
     * const count = await prisma.stat.count({
     *   where: {
     *     // ... the filter for the Stats we want to count
     *   }
     * })
    **/
    count<T extends StatCountArgs>(
      args?: Subset<T, StatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatAggregateArgs>(args: Subset<T, StatAggregateArgs>): Prisma.PrismaPromise<GetStatAggregateType<T>>

    /**
     * Group by Stat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatGroupByArgs['orderBy'] }
        : { orderBy?: StatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stat model
   */
  readonly fields: StatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stat model
   */ 
  interface StatFieldRefs {
    readonly id: FieldRef<"Stat", 'String'>
    readonly label: FieldRef<"Stat", 'String'>
    readonly value: FieldRef<"Stat", 'String'>
    readonly context: FieldRef<"Stat", 'String'>
    readonly created_at: FieldRef<"Stat", 'DateTime'>
    readonly updated_at: FieldRef<"Stat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stat findUnique
   */
  export type StatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Filter, which Stat to fetch.
     */
    where: StatWhereUniqueInput
  }

  /**
   * Stat findUniqueOrThrow
   */
  export type StatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Filter, which Stat to fetch.
     */
    where: StatWhereUniqueInput
  }

  /**
   * Stat findFirst
   */
  export type StatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Filter, which Stat to fetch.
     */
    where?: StatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatOrderByWithRelationInput | StatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stats.
     */
    cursor?: StatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stats.
     */
    distinct?: StatScalarFieldEnum | StatScalarFieldEnum[]
  }

  /**
   * Stat findFirstOrThrow
   */
  export type StatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Filter, which Stat to fetch.
     */
    where?: StatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatOrderByWithRelationInput | StatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stats.
     */
    cursor?: StatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stats.
     */
    distinct?: StatScalarFieldEnum | StatScalarFieldEnum[]
  }

  /**
   * Stat findMany
   */
  export type StatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where?: StatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatOrderByWithRelationInput | StatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stats.
     */
    cursor?: StatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    distinct?: StatScalarFieldEnum | StatScalarFieldEnum[]
  }

  /**
   * Stat create
   */
  export type StatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * The data needed to create a Stat.
     */
    data: XOR<StatCreateInput, StatUncheckedCreateInput>
  }

  /**
   * Stat createMany
   */
  export type StatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stats.
     */
    data: StatCreateManyInput | StatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stat createManyAndReturn
   */
  export type StatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Stats.
     */
    data: StatCreateManyInput | StatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stat update
   */
  export type StatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * The data needed to update a Stat.
     */
    data: XOR<StatUpdateInput, StatUncheckedUpdateInput>
    /**
     * Choose, which Stat to update.
     */
    where: StatWhereUniqueInput
  }

  /**
   * Stat updateMany
   */
  export type StatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stats.
     */
    data: XOR<StatUpdateManyMutationInput, StatUncheckedUpdateManyInput>
    /**
     * Filter which Stats to update
     */
    where?: StatWhereInput
  }

  /**
   * Stat upsert
   */
  export type StatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * The filter to search for the Stat to update in case it exists.
     */
    where: StatWhereUniqueInput
    /**
     * In case the Stat found by the `where` argument doesn't exist, create a new Stat with this data.
     */
    create: XOR<StatCreateInput, StatUncheckedCreateInput>
    /**
     * In case the Stat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatUpdateInput, StatUncheckedUpdateInput>
  }

  /**
   * Stat delete
   */
  export type StatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Filter which Stat to delete.
     */
    where: StatWhereUniqueInput
  }

  /**
   * Stat deleteMany
   */
  export type StatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stats to delete
     */
    where?: StatWhereInput
  }

  /**
   * Stat without action
   */
  export type StatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
  }


  /**
   * Model EducationEntry
   */

  export type AggregateEducationEntry = {
    _count: EducationEntryCountAggregateOutputType | null
    _avg: EducationEntryAvgAggregateOutputType | null
    _sum: EducationEntrySumAggregateOutputType | null
    _min: EducationEntryMinAggregateOutputType | null
    _max: EducationEntryMaxAggregateOutputType | null
  }

  export type EducationEntryAvgAggregateOutputType = {
    order_index: number | null
  }

  export type EducationEntrySumAggregateOutputType = {
    order_index: number | null
  }

  export type EducationEntryMinAggregateOutputType = {
    id: string | null
    period: string | null
    title: string | null
    description: string | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EducationEntryMaxAggregateOutputType = {
    id: string | null
    period: string | null
    title: string | null
    description: string | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EducationEntryCountAggregateOutputType = {
    id: number
    period: number
    title: number
    description: number
    order_index: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EducationEntryAvgAggregateInputType = {
    order_index?: true
  }

  export type EducationEntrySumAggregateInputType = {
    order_index?: true
  }

  export type EducationEntryMinAggregateInputType = {
    id?: true
    period?: true
    title?: true
    description?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type EducationEntryMaxAggregateInputType = {
    id?: true
    period?: true
    title?: true
    description?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type EducationEntryCountAggregateInputType = {
    id?: true
    period?: true
    title?: true
    description?: true
    order_index?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EducationEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EducationEntry to aggregate.
     */
    where?: EducationEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationEntries to fetch.
     */
    orderBy?: EducationEntryOrderByWithRelationInput | EducationEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EducationEntries
    **/
    _count?: true | EducationEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EducationEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EducationEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationEntryMaxAggregateInputType
  }

  export type GetEducationEntryAggregateType<T extends EducationEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateEducationEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducationEntry[P]>
      : GetScalarType<T[P], AggregateEducationEntry[P]>
  }




  export type EducationEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationEntryWhereInput
    orderBy?: EducationEntryOrderByWithAggregationInput | EducationEntryOrderByWithAggregationInput[]
    by: EducationEntryScalarFieldEnum[] | EducationEntryScalarFieldEnum
    having?: EducationEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationEntryCountAggregateInputType | true
    _avg?: EducationEntryAvgAggregateInputType
    _sum?: EducationEntrySumAggregateInputType
    _min?: EducationEntryMinAggregateInputType
    _max?: EducationEntryMaxAggregateInputType
  }

  export type EducationEntryGroupByOutputType = {
    id: string
    period: string
    title: string
    description: string
    order_index: number
    created_at: Date
    updated_at: Date
    _count: EducationEntryCountAggregateOutputType | null
    _avg: EducationEntryAvgAggregateOutputType | null
    _sum: EducationEntrySumAggregateOutputType | null
    _min: EducationEntryMinAggregateOutputType | null
    _max: EducationEntryMaxAggregateOutputType | null
  }

  type GetEducationEntryGroupByPayload<T extends EducationEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationEntryGroupByOutputType[P]>
            : GetScalarType<T[P], EducationEntryGroupByOutputType[P]>
        }
      >
    >


  export type EducationEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    period?: boolean
    title?: boolean
    description?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["educationEntry"]>

  export type EducationEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    period?: boolean
    title?: boolean
    description?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["educationEntry"]>

  export type EducationEntrySelectScalar = {
    id?: boolean
    period?: boolean
    title?: boolean
    description?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $EducationEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EducationEntry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      period: string
      title: string
      description: string
      order_index: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["educationEntry"]>
    composites: {}
  }

  type EducationEntryGetPayload<S extends boolean | null | undefined | EducationEntryDefaultArgs> = $Result.GetResult<Prisma.$EducationEntryPayload, S>

  type EducationEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EducationEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EducationEntryCountAggregateInputType | true
    }

  export interface EducationEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EducationEntry'], meta: { name: 'EducationEntry' } }
    /**
     * Find zero or one EducationEntry that matches the filter.
     * @param {EducationEntryFindUniqueArgs} args - Arguments to find a EducationEntry
     * @example
     * // Get one EducationEntry
     * const educationEntry = await prisma.educationEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationEntryFindUniqueArgs>(args: SelectSubset<T, EducationEntryFindUniqueArgs<ExtArgs>>): Prisma__EducationEntryClient<$Result.GetResult<Prisma.$EducationEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EducationEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EducationEntryFindUniqueOrThrowArgs} args - Arguments to find a EducationEntry
     * @example
     * // Get one EducationEntry
     * const educationEntry = await prisma.educationEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationEntryClient<$Result.GetResult<Prisma.$EducationEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EducationEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationEntryFindFirstArgs} args - Arguments to find a EducationEntry
     * @example
     * // Get one EducationEntry
     * const educationEntry = await prisma.educationEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationEntryFindFirstArgs>(args?: SelectSubset<T, EducationEntryFindFirstArgs<ExtArgs>>): Prisma__EducationEntryClient<$Result.GetResult<Prisma.$EducationEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EducationEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationEntryFindFirstOrThrowArgs} args - Arguments to find a EducationEntry
     * @example
     * // Get one EducationEntry
     * const educationEntry = await prisma.educationEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationEntryClient<$Result.GetResult<Prisma.$EducationEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EducationEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EducationEntries
     * const educationEntries = await prisma.educationEntry.findMany()
     * 
     * // Get first 10 EducationEntries
     * const educationEntries = await prisma.educationEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationEntryWithIdOnly = await prisma.educationEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationEntryFindManyArgs>(args?: SelectSubset<T, EducationEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EducationEntry.
     * @param {EducationEntryCreateArgs} args - Arguments to create a EducationEntry.
     * @example
     * // Create one EducationEntry
     * const EducationEntry = await prisma.educationEntry.create({
     *   data: {
     *     // ... data to create a EducationEntry
     *   }
     * })
     * 
     */
    create<T extends EducationEntryCreateArgs>(args: SelectSubset<T, EducationEntryCreateArgs<ExtArgs>>): Prisma__EducationEntryClient<$Result.GetResult<Prisma.$EducationEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EducationEntries.
     * @param {EducationEntryCreateManyArgs} args - Arguments to create many EducationEntries.
     * @example
     * // Create many EducationEntries
     * const educationEntry = await prisma.educationEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationEntryCreateManyArgs>(args?: SelectSubset<T, EducationEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EducationEntries and returns the data saved in the database.
     * @param {EducationEntryCreateManyAndReturnArgs} args - Arguments to create many EducationEntries.
     * @example
     * // Create many EducationEntries
     * const educationEntry = await prisma.educationEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EducationEntries and only return the `id`
     * const educationEntryWithIdOnly = await prisma.educationEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationEntryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EducationEntry.
     * @param {EducationEntryDeleteArgs} args - Arguments to delete one EducationEntry.
     * @example
     * // Delete one EducationEntry
     * const EducationEntry = await prisma.educationEntry.delete({
     *   where: {
     *     // ... filter to delete one EducationEntry
     *   }
     * })
     * 
     */
    delete<T extends EducationEntryDeleteArgs>(args: SelectSubset<T, EducationEntryDeleteArgs<ExtArgs>>): Prisma__EducationEntryClient<$Result.GetResult<Prisma.$EducationEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EducationEntry.
     * @param {EducationEntryUpdateArgs} args - Arguments to update one EducationEntry.
     * @example
     * // Update one EducationEntry
     * const educationEntry = await prisma.educationEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationEntryUpdateArgs>(args: SelectSubset<T, EducationEntryUpdateArgs<ExtArgs>>): Prisma__EducationEntryClient<$Result.GetResult<Prisma.$EducationEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EducationEntries.
     * @param {EducationEntryDeleteManyArgs} args - Arguments to filter EducationEntries to delete.
     * @example
     * // Delete a few EducationEntries
     * const { count } = await prisma.educationEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationEntryDeleteManyArgs>(args?: SelectSubset<T, EducationEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EducationEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EducationEntries
     * const educationEntry = await prisma.educationEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationEntryUpdateManyArgs>(args: SelectSubset<T, EducationEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EducationEntry.
     * @param {EducationEntryUpsertArgs} args - Arguments to update or create a EducationEntry.
     * @example
     * // Update or create a EducationEntry
     * const educationEntry = await prisma.educationEntry.upsert({
     *   create: {
     *     // ... data to create a EducationEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EducationEntry we want to update
     *   }
     * })
     */
    upsert<T extends EducationEntryUpsertArgs>(args: SelectSubset<T, EducationEntryUpsertArgs<ExtArgs>>): Prisma__EducationEntryClient<$Result.GetResult<Prisma.$EducationEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EducationEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationEntryCountArgs} args - Arguments to filter EducationEntries to count.
     * @example
     * // Count the number of EducationEntries
     * const count = await prisma.educationEntry.count({
     *   where: {
     *     // ... the filter for the EducationEntries we want to count
     *   }
     * })
    **/
    count<T extends EducationEntryCountArgs>(
      args?: Subset<T, EducationEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EducationEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EducationEntryAggregateArgs>(args: Subset<T, EducationEntryAggregateArgs>): Prisma.PrismaPromise<GetEducationEntryAggregateType<T>>

    /**
     * Group by EducationEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EducationEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationEntryGroupByArgs['orderBy'] }
        : { orderBy?: EducationEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EducationEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EducationEntry model
   */
  readonly fields: EducationEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EducationEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EducationEntry model
   */ 
  interface EducationEntryFieldRefs {
    readonly id: FieldRef<"EducationEntry", 'String'>
    readonly period: FieldRef<"EducationEntry", 'String'>
    readonly title: FieldRef<"EducationEntry", 'String'>
    readonly description: FieldRef<"EducationEntry", 'String'>
    readonly order_index: FieldRef<"EducationEntry", 'Int'>
    readonly created_at: FieldRef<"EducationEntry", 'DateTime'>
    readonly updated_at: FieldRef<"EducationEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EducationEntry findUnique
   */
  export type EducationEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationEntry
     */
    select?: EducationEntrySelect<ExtArgs> | null
    /**
     * Filter, which EducationEntry to fetch.
     */
    where: EducationEntryWhereUniqueInput
  }

  /**
   * EducationEntry findUniqueOrThrow
   */
  export type EducationEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationEntry
     */
    select?: EducationEntrySelect<ExtArgs> | null
    /**
     * Filter, which EducationEntry to fetch.
     */
    where: EducationEntryWhereUniqueInput
  }

  /**
   * EducationEntry findFirst
   */
  export type EducationEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationEntry
     */
    select?: EducationEntrySelect<ExtArgs> | null
    /**
     * Filter, which EducationEntry to fetch.
     */
    where?: EducationEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationEntries to fetch.
     */
    orderBy?: EducationEntryOrderByWithRelationInput | EducationEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EducationEntries.
     */
    cursor?: EducationEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EducationEntries.
     */
    distinct?: EducationEntryScalarFieldEnum | EducationEntryScalarFieldEnum[]
  }

  /**
   * EducationEntry findFirstOrThrow
   */
  export type EducationEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationEntry
     */
    select?: EducationEntrySelect<ExtArgs> | null
    /**
     * Filter, which EducationEntry to fetch.
     */
    where?: EducationEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationEntries to fetch.
     */
    orderBy?: EducationEntryOrderByWithRelationInput | EducationEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EducationEntries.
     */
    cursor?: EducationEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EducationEntries.
     */
    distinct?: EducationEntryScalarFieldEnum | EducationEntryScalarFieldEnum[]
  }

  /**
   * EducationEntry findMany
   */
  export type EducationEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationEntry
     */
    select?: EducationEntrySelect<ExtArgs> | null
    /**
     * Filter, which EducationEntries to fetch.
     */
    where?: EducationEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationEntries to fetch.
     */
    orderBy?: EducationEntryOrderByWithRelationInput | EducationEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EducationEntries.
     */
    cursor?: EducationEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationEntries.
     */
    skip?: number
    distinct?: EducationEntryScalarFieldEnum | EducationEntryScalarFieldEnum[]
  }

  /**
   * EducationEntry create
   */
  export type EducationEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationEntry
     */
    select?: EducationEntrySelect<ExtArgs> | null
    /**
     * The data needed to create a EducationEntry.
     */
    data: XOR<EducationEntryCreateInput, EducationEntryUncheckedCreateInput>
  }

  /**
   * EducationEntry createMany
   */
  export type EducationEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EducationEntries.
     */
    data: EducationEntryCreateManyInput | EducationEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EducationEntry createManyAndReturn
   */
  export type EducationEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationEntry
     */
    select?: EducationEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EducationEntries.
     */
    data: EducationEntryCreateManyInput | EducationEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EducationEntry update
   */
  export type EducationEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationEntry
     */
    select?: EducationEntrySelect<ExtArgs> | null
    /**
     * The data needed to update a EducationEntry.
     */
    data: XOR<EducationEntryUpdateInput, EducationEntryUncheckedUpdateInput>
    /**
     * Choose, which EducationEntry to update.
     */
    where: EducationEntryWhereUniqueInput
  }

  /**
   * EducationEntry updateMany
   */
  export type EducationEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EducationEntries.
     */
    data: XOR<EducationEntryUpdateManyMutationInput, EducationEntryUncheckedUpdateManyInput>
    /**
     * Filter which EducationEntries to update
     */
    where?: EducationEntryWhereInput
  }

  /**
   * EducationEntry upsert
   */
  export type EducationEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationEntry
     */
    select?: EducationEntrySelect<ExtArgs> | null
    /**
     * The filter to search for the EducationEntry to update in case it exists.
     */
    where: EducationEntryWhereUniqueInput
    /**
     * In case the EducationEntry found by the `where` argument doesn't exist, create a new EducationEntry with this data.
     */
    create: XOR<EducationEntryCreateInput, EducationEntryUncheckedCreateInput>
    /**
     * In case the EducationEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationEntryUpdateInput, EducationEntryUncheckedUpdateInput>
  }

  /**
   * EducationEntry delete
   */
  export type EducationEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationEntry
     */
    select?: EducationEntrySelect<ExtArgs> | null
    /**
     * Filter which EducationEntry to delete.
     */
    where: EducationEntryWhereUniqueInput
  }

  /**
   * EducationEntry deleteMany
   */
  export type EducationEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EducationEntries to delete
     */
    where?: EducationEntryWhereInput
  }

  /**
   * EducationEntry without action
   */
  export type EducationEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationEntry
     */
    select?: EducationEntrySelect<ExtArgs> | null
  }


  /**
   * Model ExperienceEntry
   */

  export type AggregateExperienceEntry = {
    _count: ExperienceEntryCountAggregateOutputType | null
    _avg: ExperienceEntryAvgAggregateOutputType | null
    _sum: ExperienceEntrySumAggregateOutputType | null
    _min: ExperienceEntryMinAggregateOutputType | null
    _max: ExperienceEntryMaxAggregateOutputType | null
  }

  export type ExperienceEntryAvgAggregateOutputType = {
    order_index: number | null
  }

  export type ExperienceEntrySumAggregateOutputType = {
    order_index: number | null
  }

  export type ExperienceEntryMinAggregateOutputType = {
    id: string | null
    period: string | null
    title: string | null
    description: string | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExperienceEntryMaxAggregateOutputType = {
    id: string | null
    period: string | null
    title: string | null
    description: string | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExperienceEntryCountAggregateOutputType = {
    id: number
    period: number
    title: number
    description: number
    order_index: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ExperienceEntryAvgAggregateInputType = {
    order_index?: true
  }

  export type ExperienceEntrySumAggregateInputType = {
    order_index?: true
  }

  export type ExperienceEntryMinAggregateInputType = {
    id?: true
    period?: true
    title?: true
    description?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type ExperienceEntryMaxAggregateInputType = {
    id?: true
    period?: true
    title?: true
    description?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type ExperienceEntryCountAggregateInputType = {
    id?: true
    period?: true
    title?: true
    description?: true
    order_index?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ExperienceEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExperienceEntry to aggregate.
     */
    where?: ExperienceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceEntries to fetch.
     */
    orderBy?: ExperienceEntryOrderByWithRelationInput | ExperienceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExperienceEntries
    **/
    _count?: true | ExperienceEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceEntryMaxAggregateInputType
  }

  export type GetExperienceEntryAggregateType<T extends ExperienceEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateExperienceEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperienceEntry[P]>
      : GetScalarType<T[P], AggregateExperienceEntry[P]>
  }




  export type ExperienceEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceEntryWhereInput
    orderBy?: ExperienceEntryOrderByWithAggregationInput | ExperienceEntryOrderByWithAggregationInput[]
    by: ExperienceEntryScalarFieldEnum[] | ExperienceEntryScalarFieldEnum
    having?: ExperienceEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceEntryCountAggregateInputType | true
    _avg?: ExperienceEntryAvgAggregateInputType
    _sum?: ExperienceEntrySumAggregateInputType
    _min?: ExperienceEntryMinAggregateInputType
    _max?: ExperienceEntryMaxAggregateInputType
  }

  export type ExperienceEntryGroupByOutputType = {
    id: string
    period: string
    title: string
    description: string
    order_index: number
    created_at: Date
    updated_at: Date
    _count: ExperienceEntryCountAggregateOutputType | null
    _avg: ExperienceEntryAvgAggregateOutputType | null
    _sum: ExperienceEntrySumAggregateOutputType | null
    _min: ExperienceEntryMinAggregateOutputType | null
    _max: ExperienceEntryMaxAggregateOutputType | null
  }

  type GetExperienceEntryGroupByPayload<T extends ExperienceEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceEntryGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceEntryGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    period?: boolean
    title?: boolean
    description?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["experienceEntry"]>

  export type ExperienceEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    period?: boolean
    title?: boolean
    description?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["experienceEntry"]>

  export type ExperienceEntrySelectScalar = {
    id?: boolean
    period?: boolean
    title?: boolean
    description?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $ExperienceEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExperienceEntry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      period: string
      title: string
      description: string
      order_index: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["experienceEntry"]>
    composites: {}
  }

  type ExperienceEntryGetPayload<S extends boolean | null | undefined | ExperienceEntryDefaultArgs> = $Result.GetResult<Prisma.$ExperienceEntryPayload, S>

  type ExperienceEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExperienceEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExperienceEntryCountAggregateInputType | true
    }

  export interface ExperienceEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExperienceEntry'], meta: { name: 'ExperienceEntry' } }
    /**
     * Find zero or one ExperienceEntry that matches the filter.
     * @param {ExperienceEntryFindUniqueArgs} args - Arguments to find a ExperienceEntry
     * @example
     * // Get one ExperienceEntry
     * const experienceEntry = await prisma.experienceEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceEntryFindUniqueArgs>(args: SelectSubset<T, ExperienceEntryFindUniqueArgs<ExtArgs>>): Prisma__ExperienceEntryClient<$Result.GetResult<Prisma.$ExperienceEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ExperienceEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExperienceEntryFindUniqueOrThrowArgs} args - Arguments to find a ExperienceEntry
     * @example
     * // Get one ExperienceEntry
     * const experienceEntry = await prisma.experienceEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceEntryClient<$Result.GetResult<Prisma.$ExperienceEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ExperienceEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceEntryFindFirstArgs} args - Arguments to find a ExperienceEntry
     * @example
     * // Get one ExperienceEntry
     * const experienceEntry = await prisma.experienceEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceEntryFindFirstArgs>(args?: SelectSubset<T, ExperienceEntryFindFirstArgs<ExtArgs>>): Prisma__ExperienceEntryClient<$Result.GetResult<Prisma.$ExperienceEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ExperienceEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceEntryFindFirstOrThrowArgs} args - Arguments to find a ExperienceEntry
     * @example
     * // Get one ExperienceEntry
     * const experienceEntry = await prisma.experienceEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceEntryClient<$Result.GetResult<Prisma.$ExperienceEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ExperienceEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExperienceEntries
     * const experienceEntries = await prisma.experienceEntry.findMany()
     * 
     * // Get first 10 ExperienceEntries
     * const experienceEntries = await prisma.experienceEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceEntryWithIdOnly = await prisma.experienceEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceEntryFindManyArgs>(args?: SelectSubset<T, ExperienceEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ExperienceEntry.
     * @param {ExperienceEntryCreateArgs} args - Arguments to create a ExperienceEntry.
     * @example
     * // Create one ExperienceEntry
     * const ExperienceEntry = await prisma.experienceEntry.create({
     *   data: {
     *     // ... data to create a ExperienceEntry
     *   }
     * })
     * 
     */
    create<T extends ExperienceEntryCreateArgs>(args: SelectSubset<T, ExperienceEntryCreateArgs<ExtArgs>>): Prisma__ExperienceEntryClient<$Result.GetResult<Prisma.$ExperienceEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ExperienceEntries.
     * @param {ExperienceEntryCreateManyArgs} args - Arguments to create many ExperienceEntries.
     * @example
     * // Create many ExperienceEntries
     * const experienceEntry = await prisma.experienceEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceEntryCreateManyArgs>(args?: SelectSubset<T, ExperienceEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExperienceEntries and returns the data saved in the database.
     * @param {ExperienceEntryCreateManyAndReturnArgs} args - Arguments to create many ExperienceEntries.
     * @example
     * // Create many ExperienceEntries
     * const experienceEntry = await prisma.experienceEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExperienceEntries and only return the `id`
     * const experienceEntryWithIdOnly = await prisma.experienceEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceEntryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ExperienceEntry.
     * @param {ExperienceEntryDeleteArgs} args - Arguments to delete one ExperienceEntry.
     * @example
     * // Delete one ExperienceEntry
     * const ExperienceEntry = await prisma.experienceEntry.delete({
     *   where: {
     *     // ... filter to delete one ExperienceEntry
     *   }
     * })
     * 
     */
    delete<T extends ExperienceEntryDeleteArgs>(args: SelectSubset<T, ExperienceEntryDeleteArgs<ExtArgs>>): Prisma__ExperienceEntryClient<$Result.GetResult<Prisma.$ExperienceEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ExperienceEntry.
     * @param {ExperienceEntryUpdateArgs} args - Arguments to update one ExperienceEntry.
     * @example
     * // Update one ExperienceEntry
     * const experienceEntry = await prisma.experienceEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceEntryUpdateArgs>(args: SelectSubset<T, ExperienceEntryUpdateArgs<ExtArgs>>): Prisma__ExperienceEntryClient<$Result.GetResult<Prisma.$ExperienceEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ExperienceEntries.
     * @param {ExperienceEntryDeleteManyArgs} args - Arguments to filter ExperienceEntries to delete.
     * @example
     * // Delete a few ExperienceEntries
     * const { count } = await prisma.experienceEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceEntryDeleteManyArgs>(args?: SelectSubset<T, ExperienceEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExperienceEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExperienceEntries
     * const experienceEntry = await prisma.experienceEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceEntryUpdateManyArgs>(args: SelectSubset<T, ExperienceEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExperienceEntry.
     * @param {ExperienceEntryUpsertArgs} args - Arguments to update or create a ExperienceEntry.
     * @example
     * // Update or create a ExperienceEntry
     * const experienceEntry = await prisma.experienceEntry.upsert({
     *   create: {
     *     // ... data to create a ExperienceEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExperienceEntry we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceEntryUpsertArgs>(args: SelectSubset<T, ExperienceEntryUpsertArgs<ExtArgs>>): Prisma__ExperienceEntryClient<$Result.GetResult<Prisma.$ExperienceEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ExperienceEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceEntryCountArgs} args - Arguments to filter ExperienceEntries to count.
     * @example
     * // Count the number of ExperienceEntries
     * const count = await prisma.experienceEntry.count({
     *   where: {
     *     // ... the filter for the ExperienceEntries we want to count
     *   }
     * })
    **/
    count<T extends ExperienceEntryCountArgs>(
      args?: Subset<T, ExperienceEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExperienceEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExperienceEntryAggregateArgs>(args: Subset<T, ExperienceEntryAggregateArgs>): Prisma.PrismaPromise<GetExperienceEntryAggregateType<T>>

    /**
     * Group by ExperienceEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExperienceEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceEntryGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExperienceEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExperienceEntry model
   */
  readonly fields: ExperienceEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExperienceEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExperienceEntry model
   */ 
  interface ExperienceEntryFieldRefs {
    readonly id: FieldRef<"ExperienceEntry", 'String'>
    readonly period: FieldRef<"ExperienceEntry", 'String'>
    readonly title: FieldRef<"ExperienceEntry", 'String'>
    readonly description: FieldRef<"ExperienceEntry", 'String'>
    readonly order_index: FieldRef<"ExperienceEntry", 'Int'>
    readonly created_at: FieldRef<"ExperienceEntry", 'DateTime'>
    readonly updated_at: FieldRef<"ExperienceEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExperienceEntry findUnique
   */
  export type ExperienceEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceEntry
     */
    select?: ExperienceEntrySelect<ExtArgs> | null
    /**
     * Filter, which ExperienceEntry to fetch.
     */
    where: ExperienceEntryWhereUniqueInput
  }

  /**
   * ExperienceEntry findUniqueOrThrow
   */
  export type ExperienceEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceEntry
     */
    select?: ExperienceEntrySelect<ExtArgs> | null
    /**
     * Filter, which ExperienceEntry to fetch.
     */
    where: ExperienceEntryWhereUniqueInput
  }

  /**
   * ExperienceEntry findFirst
   */
  export type ExperienceEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceEntry
     */
    select?: ExperienceEntrySelect<ExtArgs> | null
    /**
     * Filter, which ExperienceEntry to fetch.
     */
    where?: ExperienceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceEntries to fetch.
     */
    orderBy?: ExperienceEntryOrderByWithRelationInput | ExperienceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExperienceEntries.
     */
    cursor?: ExperienceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExperienceEntries.
     */
    distinct?: ExperienceEntryScalarFieldEnum | ExperienceEntryScalarFieldEnum[]
  }

  /**
   * ExperienceEntry findFirstOrThrow
   */
  export type ExperienceEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceEntry
     */
    select?: ExperienceEntrySelect<ExtArgs> | null
    /**
     * Filter, which ExperienceEntry to fetch.
     */
    where?: ExperienceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceEntries to fetch.
     */
    orderBy?: ExperienceEntryOrderByWithRelationInput | ExperienceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExperienceEntries.
     */
    cursor?: ExperienceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExperienceEntries.
     */
    distinct?: ExperienceEntryScalarFieldEnum | ExperienceEntryScalarFieldEnum[]
  }

  /**
   * ExperienceEntry findMany
   */
  export type ExperienceEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceEntry
     */
    select?: ExperienceEntrySelect<ExtArgs> | null
    /**
     * Filter, which ExperienceEntries to fetch.
     */
    where?: ExperienceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceEntries to fetch.
     */
    orderBy?: ExperienceEntryOrderByWithRelationInput | ExperienceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExperienceEntries.
     */
    cursor?: ExperienceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceEntries.
     */
    skip?: number
    distinct?: ExperienceEntryScalarFieldEnum | ExperienceEntryScalarFieldEnum[]
  }

  /**
   * ExperienceEntry create
   */
  export type ExperienceEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceEntry
     */
    select?: ExperienceEntrySelect<ExtArgs> | null
    /**
     * The data needed to create a ExperienceEntry.
     */
    data: XOR<ExperienceEntryCreateInput, ExperienceEntryUncheckedCreateInput>
  }

  /**
   * ExperienceEntry createMany
   */
  export type ExperienceEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExperienceEntries.
     */
    data: ExperienceEntryCreateManyInput | ExperienceEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExperienceEntry createManyAndReturn
   */
  export type ExperienceEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceEntry
     */
    select?: ExperienceEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ExperienceEntries.
     */
    data: ExperienceEntryCreateManyInput | ExperienceEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExperienceEntry update
   */
  export type ExperienceEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceEntry
     */
    select?: ExperienceEntrySelect<ExtArgs> | null
    /**
     * The data needed to update a ExperienceEntry.
     */
    data: XOR<ExperienceEntryUpdateInput, ExperienceEntryUncheckedUpdateInput>
    /**
     * Choose, which ExperienceEntry to update.
     */
    where: ExperienceEntryWhereUniqueInput
  }

  /**
   * ExperienceEntry updateMany
   */
  export type ExperienceEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExperienceEntries.
     */
    data: XOR<ExperienceEntryUpdateManyMutationInput, ExperienceEntryUncheckedUpdateManyInput>
    /**
     * Filter which ExperienceEntries to update
     */
    where?: ExperienceEntryWhereInput
  }

  /**
   * ExperienceEntry upsert
   */
  export type ExperienceEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceEntry
     */
    select?: ExperienceEntrySelect<ExtArgs> | null
    /**
     * The filter to search for the ExperienceEntry to update in case it exists.
     */
    where: ExperienceEntryWhereUniqueInput
    /**
     * In case the ExperienceEntry found by the `where` argument doesn't exist, create a new ExperienceEntry with this data.
     */
    create: XOR<ExperienceEntryCreateInput, ExperienceEntryUncheckedCreateInput>
    /**
     * In case the ExperienceEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceEntryUpdateInput, ExperienceEntryUncheckedUpdateInput>
  }

  /**
   * ExperienceEntry delete
   */
  export type ExperienceEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceEntry
     */
    select?: ExperienceEntrySelect<ExtArgs> | null
    /**
     * Filter which ExperienceEntry to delete.
     */
    where: ExperienceEntryWhereUniqueInput
  }

  /**
   * ExperienceEntry deleteMany
   */
  export type ExperienceEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExperienceEntries to delete
     */
    where?: ExperienceEntryWhereInput
  }

  /**
   * ExperienceEntry without action
   */
  export type ExperienceEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceEntry
     */
    select?: ExperienceEntrySelect<ExtArgs> | null
  }


  /**
   * Model ContactContent
   */

  export type AggregateContactContent = {
    _count: ContactContentCountAggregateOutputType | null
    _min: ContactContentMinAggregateOutputType | null
    _max: ContactContentMaxAggregateOutputType | null
  }

  export type ContactContentMinAggregateOutputType = {
    id: string | null
    subtitle: string | null
    success_title: string | null
    success_message: string | null
    updated_at: Date | null
  }

  export type ContactContentMaxAggregateOutputType = {
    id: string | null
    subtitle: string | null
    success_title: string | null
    success_message: string | null
    updated_at: Date | null
  }

  export type ContactContentCountAggregateOutputType = {
    id: number
    subtitle: number
    success_title: number
    success_message: number
    updated_at: number
    _all: number
  }


  export type ContactContentMinAggregateInputType = {
    id?: true
    subtitle?: true
    success_title?: true
    success_message?: true
    updated_at?: true
  }

  export type ContactContentMaxAggregateInputType = {
    id?: true
    subtitle?: true
    success_title?: true
    success_message?: true
    updated_at?: true
  }

  export type ContactContentCountAggregateInputType = {
    id?: true
    subtitle?: true
    success_title?: true
    success_message?: true
    updated_at?: true
    _all?: true
  }

  export type ContactContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactContent to aggregate.
     */
    where?: ContactContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactContents to fetch.
     */
    orderBy?: ContactContentOrderByWithRelationInput | ContactContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactContents
    **/
    _count?: true | ContactContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactContentMaxAggregateInputType
  }

  export type GetContactContentAggregateType<T extends ContactContentAggregateArgs> = {
        [P in keyof T & keyof AggregateContactContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactContent[P]>
      : GetScalarType<T[P], AggregateContactContent[P]>
  }




  export type ContactContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactContentWhereInput
    orderBy?: ContactContentOrderByWithAggregationInput | ContactContentOrderByWithAggregationInput[]
    by: ContactContentScalarFieldEnum[] | ContactContentScalarFieldEnum
    having?: ContactContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactContentCountAggregateInputType | true
    _min?: ContactContentMinAggregateInputType
    _max?: ContactContentMaxAggregateInputType
  }

  export type ContactContentGroupByOutputType = {
    id: string
    subtitle: string
    success_title: string
    success_message: string
    updated_at: Date
    _count: ContactContentCountAggregateOutputType | null
    _min: ContactContentMinAggregateOutputType | null
    _max: ContactContentMaxAggregateOutputType | null
  }

  type GetContactContentGroupByPayload<T extends ContactContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactContentGroupByOutputType[P]>
            : GetScalarType<T[P], ContactContentGroupByOutputType[P]>
        }
      >
    >


  export type ContactContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subtitle?: boolean
    success_title?: boolean
    success_message?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["contactContent"]>

  export type ContactContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subtitle?: boolean
    success_title?: boolean
    success_message?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["contactContent"]>

  export type ContactContentSelectScalar = {
    id?: boolean
    subtitle?: boolean
    success_title?: boolean
    success_message?: boolean
    updated_at?: boolean
  }


  export type $ContactContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subtitle: string
      success_title: string
      success_message: string
      updated_at: Date
    }, ExtArgs["result"]["contactContent"]>
    composites: {}
  }

  type ContactContentGetPayload<S extends boolean | null | undefined | ContactContentDefaultArgs> = $Result.GetResult<Prisma.$ContactContentPayload, S>

  type ContactContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactContentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactContentCountAggregateInputType | true
    }

  export interface ContactContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactContent'], meta: { name: 'ContactContent' } }
    /**
     * Find zero or one ContactContent that matches the filter.
     * @param {ContactContentFindUniqueArgs} args - Arguments to find a ContactContent
     * @example
     * // Get one ContactContent
     * const contactContent = await prisma.contactContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactContentFindUniqueArgs>(args: SelectSubset<T, ContactContentFindUniqueArgs<ExtArgs>>): Prisma__ContactContentClient<$Result.GetResult<Prisma.$ContactContentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ContactContent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContactContentFindUniqueOrThrowArgs} args - Arguments to find a ContactContent
     * @example
     * // Get one ContactContent
     * const contactContent = await prisma.contactContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactContentFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactContentClient<$Result.GetResult<Prisma.$ContactContentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ContactContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactContentFindFirstArgs} args - Arguments to find a ContactContent
     * @example
     * // Get one ContactContent
     * const contactContent = await prisma.contactContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactContentFindFirstArgs>(args?: SelectSubset<T, ContactContentFindFirstArgs<ExtArgs>>): Prisma__ContactContentClient<$Result.GetResult<Prisma.$ContactContentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ContactContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactContentFindFirstOrThrowArgs} args - Arguments to find a ContactContent
     * @example
     * // Get one ContactContent
     * const contactContent = await prisma.contactContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactContentFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactContentClient<$Result.GetResult<Prisma.$ContactContentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ContactContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactContents
     * const contactContents = await prisma.contactContent.findMany()
     * 
     * // Get first 10 ContactContents
     * const contactContents = await prisma.contactContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactContentWithIdOnly = await prisma.contactContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactContentFindManyArgs>(args?: SelectSubset<T, ContactContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactContentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ContactContent.
     * @param {ContactContentCreateArgs} args - Arguments to create a ContactContent.
     * @example
     * // Create one ContactContent
     * const ContactContent = await prisma.contactContent.create({
     *   data: {
     *     // ... data to create a ContactContent
     *   }
     * })
     * 
     */
    create<T extends ContactContentCreateArgs>(args: SelectSubset<T, ContactContentCreateArgs<ExtArgs>>): Prisma__ContactContentClient<$Result.GetResult<Prisma.$ContactContentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ContactContents.
     * @param {ContactContentCreateManyArgs} args - Arguments to create many ContactContents.
     * @example
     * // Create many ContactContents
     * const contactContent = await prisma.contactContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactContentCreateManyArgs>(args?: SelectSubset<T, ContactContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactContents and returns the data saved in the database.
     * @param {ContactContentCreateManyAndReturnArgs} args - Arguments to create many ContactContents.
     * @example
     * // Create many ContactContents
     * const contactContent = await prisma.contactContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactContents and only return the `id`
     * const contactContentWithIdOnly = await prisma.contactContent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactContentCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactContentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ContactContent.
     * @param {ContactContentDeleteArgs} args - Arguments to delete one ContactContent.
     * @example
     * // Delete one ContactContent
     * const ContactContent = await prisma.contactContent.delete({
     *   where: {
     *     // ... filter to delete one ContactContent
     *   }
     * })
     * 
     */
    delete<T extends ContactContentDeleteArgs>(args: SelectSubset<T, ContactContentDeleteArgs<ExtArgs>>): Prisma__ContactContentClient<$Result.GetResult<Prisma.$ContactContentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ContactContent.
     * @param {ContactContentUpdateArgs} args - Arguments to update one ContactContent.
     * @example
     * // Update one ContactContent
     * const contactContent = await prisma.contactContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactContentUpdateArgs>(args: SelectSubset<T, ContactContentUpdateArgs<ExtArgs>>): Prisma__ContactContentClient<$Result.GetResult<Prisma.$ContactContentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ContactContents.
     * @param {ContactContentDeleteManyArgs} args - Arguments to filter ContactContents to delete.
     * @example
     * // Delete a few ContactContents
     * const { count } = await prisma.contactContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactContentDeleteManyArgs>(args?: SelectSubset<T, ContactContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactContents
     * const contactContent = await prisma.contactContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactContentUpdateManyArgs>(args: SelectSubset<T, ContactContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactContent.
     * @param {ContactContentUpsertArgs} args - Arguments to update or create a ContactContent.
     * @example
     * // Update or create a ContactContent
     * const contactContent = await prisma.contactContent.upsert({
     *   create: {
     *     // ... data to create a ContactContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactContent we want to update
     *   }
     * })
     */
    upsert<T extends ContactContentUpsertArgs>(args: SelectSubset<T, ContactContentUpsertArgs<ExtArgs>>): Prisma__ContactContentClient<$Result.GetResult<Prisma.$ContactContentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ContactContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactContentCountArgs} args - Arguments to filter ContactContents to count.
     * @example
     * // Count the number of ContactContents
     * const count = await prisma.contactContent.count({
     *   where: {
     *     // ... the filter for the ContactContents we want to count
     *   }
     * })
    **/
    count<T extends ContactContentCountArgs>(
      args?: Subset<T, ContactContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactContentAggregateArgs>(args: Subset<T, ContactContentAggregateArgs>): Prisma.PrismaPromise<GetContactContentAggregateType<T>>

    /**
     * Group by ContactContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactContentGroupByArgs['orderBy'] }
        : { orderBy?: ContactContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactContent model
   */
  readonly fields: ContactContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactContent model
   */ 
  interface ContactContentFieldRefs {
    readonly id: FieldRef<"ContactContent", 'String'>
    readonly subtitle: FieldRef<"ContactContent", 'String'>
    readonly success_title: FieldRef<"ContactContent", 'String'>
    readonly success_message: FieldRef<"ContactContent", 'String'>
    readonly updated_at: FieldRef<"ContactContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactContent findUnique
   */
  export type ContactContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactContent
     */
    select?: ContactContentSelect<ExtArgs> | null
    /**
     * Filter, which ContactContent to fetch.
     */
    where: ContactContentWhereUniqueInput
  }

  /**
   * ContactContent findUniqueOrThrow
   */
  export type ContactContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactContent
     */
    select?: ContactContentSelect<ExtArgs> | null
    /**
     * Filter, which ContactContent to fetch.
     */
    where: ContactContentWhereUniqueInput
  }

  /**
   * ContactContent findFirst
   */
  export type ContactContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactContent
     */
    select?: ContactContentSelect<ExtArgs> | null
    /**
     * Filter, which ContactContent to fetch.
     */
    where?: ContactContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactContents to fetch.
     */
    orderBy?: ContactContentOrderByWithRelationInput | ContactContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactContents.
     */
    cursor?: ContactContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactContents.
     */
    distinct?: ContactContentScalarFieldEnum | ContactContentScalarFieldEnum[]
  }

  /**
   * ContactContent findFirstOrThrow
   */
  export type ContactContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactContent
     */
    select?: ContactContentSelect<ExtArgs> | null
    /**
     * Filter, which ContactContent to fetch.
     */
    where?: ContactContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactContents to fetch.
     */
    orderBy?: ContactContentOrderByWithRelationInput | ContactContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactContents.
     */
    cursor?: ContactContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactContents.
     */
    distinct?: ContactContentScalarFieldEnum | ContactContentScalarFieldEnum[]
  }

  /**
   * ContactContent findMany
   */
  export type ContactContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactContent
     */
    select?: ContactContentSelect<ExtArgs> | null
    /**
     * Filter, which ContactContents to fetch.
     */
    where?: ContactContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactContents to fetch.
     */
    orderBy?: ContactContentOrderByWithRelationInput | ContactContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactContents.
     */
    cursor?: ContactContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactContents.
     */
    skip?: number
    distinct?: ContactContentScalarFieldEnum | ContactContentScalarFieldEnum[]
  }

  /**
   * ContactContent create
   */
  export type ContactContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactContent
     */
    select?: ContactContentSelect<ExtArgs> | null
    /**
     * The data needed to create a ContactContent.
     */
    data: XOR<ContactContentCreateInput, ContactContentUncheckedCreateInput>
  }

  /**
   * ContactContent createMany
   */
  export type ContactContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactContents.
     */
    data: ContactContentCreateManyInput | ContactContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactContent createManyAndReturn
   */
  export type ContactContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactContent
     */
    select?: ContactContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ContactContents.
     */
    data: ContactContentCreateManyInput | ContactContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactContent update
   */
  export type ContactContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactContent
     */
    select?: ContactContentSelect<ExtArgs> | null
    /**
     * The data needed to update a ContactContent.
     */
    data: XOR<ContactContentUpdateInput, ContactContentUncheckedUpdateInput>
    /**
     * Choose, which ContactContent to update.
     */
    where: ContactContentWhereUniqueInput
  }

  /**
   * ContactContent updateMany
   */
  export type ContactContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactContents.
     */
    data: XOR<ContactContentUpdateManyMutationInput, ContactContentUncheckedUpdateManyInput>
    /**
     * Filter which ContactContents to update
     */
    where?: ContactContentWhereInput
  }

  /**
   * ContactContent upsert
   */
  export type ContactContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactContent
     */
    select?: ContactContentSelect<ExtArgs> | null
    /**
     * The filter to search for the ContactContent to update in case it exists.
     */
    where: ContactContentWhereUniqueInput
    /**
     * In case the ContactContent found by the `where` argument doesn't exist, create a new ContactContent with this data.
     */
    create: XOR<ContactContentCreateInput, ContactContentUncheckedCreateInput>
    /**
     * In case the ContactContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactContentUpdateInput, ContactContentUncheckedUpdateInput>
  }

  /**
   * ContactContent delete
   */
  export type ContactContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactContent
     */
    select?: ContactContentSelect<ExtArgs> | null
    /**
     * Filter which ContactContent to delete.
     */
    where: ContactContentWhereUniqueInput
  }

  /**
   * ContactContent deleteMany
   */
  export type ContactContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactContents to delete
     */
    where?: ContactContentWhereInput
  }

  /**
   * ContactContent without action
   */
  export type ContactContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactContent
     */
    select?: ContactContentSelect<ExtArgs> | null
  }


  /**
   * Model ContactInfoItem
   */

  export type AggregateContactInfoItem = {
    _count: ContactInfoItemCountAggregateOutputType | null
    _avg: ContactInfoItemAvgAggregateOutputType | null
    _sum: ContactInfoItemSumAggregateOutputType | null
    _min: ContactInfoItemMinAggregateOutputType | null
    _max: ContactInfoItemMaxAggregateOutputType | null
  }

  export type ContactInfoItemAvgAggregateOutputType = {
    order_index: number | null
  }

  export type ContactInfoItemSumAggregateOutputType = {
    order_index: number | null
  }

  export type ContactInfoItemMinAggregateOutputType = {
    id: string | null
    type: string | null
    label: string | null
    value: string | null
    href: string | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ContactInfoItemMaxAggregateOutputType = {
    id: string | null
    type: string | null
    label: string | null
    value: string | null
    href: string | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ContactInfoItemCountAggregateOutputType = {
    id: number
    type: number
    label: number
    value: number
    href: number
    order_index: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ContactInfoItemAvgAggregateInputType = {
    order_index?: true
  }

  export type ContactInfoItemSumAggregateInputType = {
    order_index?: true
  }

  export type ContactInfoItemMinAggregateInputType = {
    id?: true
    type?: true
    label?: true
    value?: true
    href?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type ContactInfoItemMaxAggregateInputType = {
    id?: true
    type?: true
    label?: true
    value?: true
    href?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type ContactInfoItemCountAggregateInputType = {
    id?: true
    type?: true
    label?: true
    value?: true
    href?: true
    order_index?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ContactInfoItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfoItem to aggregate.
     */
    where?: ContactInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfoItems to fetch.
     */
    orderBy?: ContactInfoItemOrderByWithRelationInput | ContactInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactInfoItems
    **/
    _count?: true | ContactInfoItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactInfoItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactInfoItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactInfoItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactInfoItemMaxAggregateInputType
  }

  export type GetContactInfoItemAggregateType<T extends ContactInfoItemAggregateArgs> = {
        [P in keyof T & keyof AggregateContactInfoItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactInfoItem[P]>
      : GetScalarType<T[P], AggregateContactInfoItem[P]>
  }




  export type ContactInfoItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactInfoItemWhereInput
    orderBy?: ContactInfoItemOrderByWithAggregationInput | ContactInfoItemOrderByWithAggregationInput[]
    by: ContactInfoItemScalarFieldEnum[] | ContactInfoItemScalarFieldEnum
    having?: ContactInfoItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactInfoItemCountAggregateInputType | true
    _avg?: ContactInfoItemAvgAggregateInputType
    _sum?: ContactInfoItemSumAggregateInputType
    _min?: ContactInfoItemMinAggregateInputType
    _max?: ContactInfoItemMaxAggregateInputType
  }

  export type ContactInfoItemGroupByOutputType = {
    id: string
    type: string
    label: string
    value: string
    href: string | null
    order_index: number
    created_at: Date
    updated_at: Date
    _count: ContactInfoItemCountAggregateOutputType | null
    _avg: ContactInfoItemAvgAggregateOutputType | null
    _sum: ContactInfoItemSumAggregateOutputType | null
    _min: ContactInfoItemMinAggregateOutputType | null
    _max: ContactInfoItemMaxAggregateOutputType | null
  }

  type GetContactInfoItemGroupByPayload<T extends ContactInfoItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactInfoItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactInfoItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactInfoItemGroupByOutputType[P]>
            : GetScalarType<T[P], ContactInfoItemGroupByOutputType[P]>
        }
      >
    >


  export type ContactInfoItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    label?: boolean
    value?: boolean
    href?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["contactInfoItem"]>

  export type ContactInfoItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    label?: boolean
    value?: boolean
    href?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["contactInfoItem"]>

  export type ContactInfoItemSelectScalar = {
    id?: boolean
    type?: boolean
    label?: boolean
    value?: boolean
    href?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $ContactInfoItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactInfoItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      label: string
      value: string
      href: string | null
      order_index: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["contactInfoItem"]>
    composites: {}
  }

  type ContactInfoItemGetPayload<S extends boolean | null | undefined | ContactInfoItemDefaultArgs> = $Result.GetResult<Prisma.$ContactInfoItemPayload, S>

  type ContactInfoItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactInfoItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactInfoItemCountAggregateInputType | true
    }

  export interface ContactInfoItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactInfoItem'], meta: { name: 'ContactInfoItem' } }
    /**
     * Find zero or one ContactInfoItem that matches the filter.
     * @param {ContactInfoItemFindUniqueArgs} args - Arguments to find a ContactInfoItem
     * @example
     * // Get one ContactInfoItem
     * const contactInfoItem = await prisma.contactInfoItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactInfoItemFindUniqueArgs>(args: SelectSubset<T, ContactInfoItemFindUniqueArgs<ExtArgs>>): Prisma__ContactInfoItemClient<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ContactInfoItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContactInfoItemFindUniqueOrThrowArgs} args - Arguments to find a ContactInfoItem
     * @example
     * // Get one ContactInfoItem
     * const contactInfoItem = await prisma.contactInfoItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactInfoItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactInfoItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactInfoItemClient<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ContactInfoItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoItemFindFirstArgs} args - Arguments to find a ContactInfoItem
     * @example
     * // Get one ContactInfoItem
     * const contactInfoItem = await prisma.contactInfoItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactInfoItemFindFirstArgs>(args?: SelectSubset<T, ContactInfoItemFindFirstArgs<ExtArgs>>): Prisma__ContactInfoItemClient<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ContactInfoItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoItemFindFirstOrThrowArgs} args - Arguments to find a ContactInfoItem
     * @example
     * // Get one ContactInfoItem
     * const contactInfoItem = await prisma.contactInfoItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactInfoItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactInfoItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactInfoItemClient<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ContactInfoItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactInfoItems
     * const contactInfoItems = await prisma.contactInfoItem.findMany()
     * 
     * // Get first 10 ContactInfoItems
     * const contactInfoItems = await prisma.contactInfoItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactInfoItemWithIdOnly = await prisma.contactInfoItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactInfoItemFindManyArgs>(args?: SelectSubset<T, ContactInfoItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ContactInfoItem.
     * @param {ContactInfoItemCreateArgs} args - Arguments to create a ContactInfoItem.
     * @example
     * // Create one ContactInfoItem
     * const ContactInfoItem = await prisma.contactInfoItem.create({
     *   data: {
     *     // ... data to create a ContactInfoItem
     *   }
     * })
     * 
     */
    create<T extends ContactInfoItemCreateArgs>(args: SelectSubset<T, ContactInfoItemCreateArgs<ExtArgs>>): Prisma__ContactInfoItemClient<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ContactInfoItems.
     * @param {ContactInfoItemCreateManyArgs} args - Arguments to create many ContactInfoItems.
     * @example
     * // Create many ContactInfoItems
     * const contactInfoItem = await prisma.contactInfoItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactInfoItemCreateManyArgs>(args?: SelectSubset<T, ContactInfoItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactInfoItems and returns the data saved in the database.
     * @param {ContactInfoItemCreateManyAndReturnArgs} args - Arguments to create many ContactInfoItems.
     * @example
     * // Create many ContactInfoItems
     * const contactInfoItem = await prisma.contactInfoItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactInfoItems and only return the `id`
     * const contactInfoItemWithIdOnly = await prisma.contactInfoItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactInfoItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactInfoItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ContactInfoItem.
     * @param {ContactInfoItemDeleteArgs} args - Arguments to delete one ContactInfoItem.
     * @example
     * // Delete one ContactInfoItem
     * const ContactInfoItem = await prisma.contactInfoItem.delete({
     *   where: {
     *     // ... filter to delete one ContactInfoItem
     *   }
     * })
     * 
     */
    delete<T extends ContactInfoItemDeleteArgs>(args: SelectSubset<T, ContactInfoItemDeleteArgs<ExtArgs>>): Prisma__ContactInfoItemClient<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ContactInfoItem.
     * @param {ContactInfoItemUpdateArgs} args - Arguments to update one ContactInfoItem.
     * @example
     * // Update one ContactInfoItem
     * const contactInfoItem = await prisma.contactInfoItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactInfoItemUpdateArgs>(args: SelectSubset<T, ContactInfoItemUpdateArgs<ExtArgs>>): Prisma__ContactInfoItemClient<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ContactInfoItems.
     * @param {ContactInfoItemDeleteManyArgs} args - Arguments to filter ContactInfoItems to delete.
     * @example
     * // Delete a few ContactInfoItems
     * const { count } = await prisma.contactInfoItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactInfoItemDeleteManyArgs>(args?: SelectSubset<T, ContactInfoItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactInfoItems
     * const contactInfoItem = await prisma.contactInfoItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactInfoItemUpdateManyArgs>(args: SelectSubset<T, ContactInfoItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactInfoItem.
     * @param {ContactInfoItemUpsertArgs} args - Arguments to update or create a ContactInfoItem.
     * @example
     * // Update or create a ContactInfoItem
     * const contactInfoItem = await prisma.contactInfoItem.upsert({
     *   create: {
     *     // ... data to create a ContactInfoItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactInfoItem we want to update
     *   }
     * })
     */
    upsert<T extends ContactInfoItemUpsertArgs>(args: SelectSubset<T, ContactInfoItemUpsertArgs<ExtArgs>>): Prisma__ContactInfoItemClient<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ContactInfoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoItemCountArgs} args - Arguments to filter ContactInfoItems to count.
     * @example
     * // Count the number of ContactInfoItems
     * const count = await prisma.contactInfoItem.count({
     *   where: {
     *     // ... the filter for the ContactInfoItems we want to count
     *   }
     * })
    **/
    count<T extends ContactInfoItemCountArgs>(
      args?: Subset<T, ContactInfoItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactInfoItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactInfoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactInfoItemAggregateArgs>(args: Subset<T, ContactInfoItemAggregateArgs>): Prisma.PrismaPromise<GetContactInfoItemAggregateType<T>>

    /**
     * Group by ContactInfoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactInfoItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactInfoItemGroupByArgs['orderBy'] }
        : { orderBy?: ContactInfoItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactInfoItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactInfoItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactInfoItem model
   */
  readonly fields: ContactInfoItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactInfoItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactInfoItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactInfoItem model
   */ 
  interface ContactInfoItemFieldRefs {
    readonly id: FieldRef<"ContactInfoItem", 'String'>
    readonly type: FieldRef<"ContactInfoItem", 'String'>
    readonly label: FieldRef<"ContactInfoItem", 'String'>
    readonly value: FieldRef<"ContactInfoItem", 'String'>
    readonly href: FieldRef<"ContactInfoItem", 'String'>
    readonly order_index: FieldRef<"ContactInfoItem", 'Int'>
    readonly created_at: FieldRef<"ContactInfoItem", 'DateTime'>
    readonly updated_at: FieldRef<"ContactInfoItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactInfoItem findUnique
   */
  export type ContactInfoItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * Filter, which ContactInfoItem to fetch.
     */
    where: ContactInfoItemWhereUniqueInput
  }

  /**
   * ContactInfoItem findUniqueOrThrow
   */
  export type ContactInfoItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * Filter, which ContactInfoItem to fetch.
     */
    where: ContactInfoItemWhereUniqueInput
  }

  /**
   * ContactInfoItem findFirst
   */
  export type ContactInfoItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * Filter, which ContactInfoItem to fetch.
     */
    where?: ContactInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfoItems to fetch.
     */
    orderBy?: ContactInfoItemOrderByWithRelationInput | ContactInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfoItems.
     */
    cursor?: ContactInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfoItems.
     */
    distinct?: ContactInfoItemScalarFieldEnum | ContactInfoItemScalarFieldEnum[]
  }

  /**
   * ContactInfoItem findFirstOrThrow
   */
  export type ContactInfoItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * Filter, which ContactInfoItem to fetch.
     */
    where?: ContactInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfoItems to fetch.
     */
    orderBy?: ContactInfoItemOrderByWithRelationInput | ContactInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfoItems.
     */
    cursor?: ContactInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfoItems.
     */
    distinct?: ContactInfoItemScalarFieldEnum | ContactInfoItemScalarFieldEnum[]
  }

  /**
   * ContactInfoItem findMany
   */
  export type ContactInfoItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * Filter, which ContactInfoItems to fetch.
     */
    where?: ContactInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfoItems to fetch.
     */
    orderBy?: ContactInfoItemOrderByWithRelationInput | ContactInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactInfoItems.
     */
    cursor?: ContactInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfoItems.
     */
    skip?: number
    distinct?: ContactInfoItemScalarFieldEnum | ContactInfoItemScalarFieldEnum[]
  }

  /**
   * ContactInfoItem create
   */
  export type ContactInfoItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * The data needed to create a ContactInfoItem.
     */
    data: XOR<ContactInfoItemCreateInput, ContactInfoItemUncheckedCreateInput>
  }

  /**
   * ContactInfoItem createMany
   */
  export type ContactInfoItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactInfoItems.
     */
    data: ContactInfoItemCreateManyInput | ContactInfoItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactInfoItem createManyAndReturn
   */
  export type ContactInfoItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ContactInfoItems.
     */
    data: ContactInfoItemCreateManyInput | ContactInfoItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactInfoItem update
   */
  export type ContactInfoItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * The data needed to update a ContactInfoItem.
     */
    data: XOR<ContactInfoItemUpdateInput, ContactInfoItemUncheckedUpdateInput>
    /**
     * Choose, which ContactInfoItem to update.
     */
    where: ContactInfoItemWhereUniqueInput
  }

  /**
   * ContactInfoItem updateMany
   */
  export type ContactInfoItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactInfoItems.
     */
    data: XOR<ContactInfoItemUpdateManyMutationInput, ContactInfoItemUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfoItems to update
     */
    where?: ContactInfoItemWhereInput
  }

  /**
   * ContactInfoItem upsert
   */
  export type ContactInfoItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * The filter to search for the ContactInfoItem to update in case it exists.
     */
    where: ContactInfoItemWhereUniqueInput
    /**
     * In case the ContactInfoItem found by the `where` argument doesn't exist, create a new ContactInfoItem with this data.
     */
    create: XOR<ContactInfoItemCreateInput, ContactInfoItemUncheckedCreateInput>
    /**
     * In case the ContactInfoItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactInfoItemUpdateInput, ContactInfoItemUncheckedUpdateInput>
  }

  /**
   * ContactInfoItem delete
   */
  export type ContactInfoItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * Filter which ContactInfoItem to delete.
     */
    where: ContactInfoItemWhereUniqueInput
  }

  /**
   * ContactInfoItem deleteMany
   */
  export type ContactInfoItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfoItems to delete
     */
    where?: ContactInfoItemWhereInput
  }

  /**
   * ContactInfoItem without action
   */
  export type ContactInfoItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
  }


  /**
   * Model SocialLink
   */

  export type AggregateSocialLink = {
    _count: SocialLinkCountAggregateOutputType | null
    _avg: SocialLinkAvgAggregateOutputType | null
    _sum: SocialLinkSumAggregateOutputType | null
    _min: SocialLinkMinAggregateOutputType | null
    _max: SocialLinkMaxAggregateOutputType | null
  }

  export type SocialLinkAvgAggregateOutputType = {
    order_index: number | null
  }

  export type SocialLinkSumAggregateOutputType = {
    order_index: number | null
  }

  export type SocialLinkMinAggregateOutputType = {
    id: string | null
    platform: string | null
    url: string | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SocialLinkMaxAggregateOutputType = {
    id: string | null
    platform: string | null
    url: string | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SocialLinkCountAggregateOutputType = {
    id: number
    platform: number
    url: number
    order_index: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SocialLinkAvgAggregateInputType = {
    order_index?: true
  }

  export type SocialLinkSumAggregateInputType = {
    order_index?: true
  }

  export type SocialLinkMinAggregateInputType = {
    id?: true
    platform?: true
    url?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type SocialLinkMaxAggregateInputType = {
    id?: true
    platform?: true
    url?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type SocialLinkCountAggregateInputType = {
    id?: true
    platform?: true
    url?: true
    order_index?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SocialLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLink to aggregate.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialLinks
    **/
    _count?: true | SocialLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialLinkMaxAggregateInputType
  }

  export type GetSocialLinkAggregateType<T extends SocialLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialLink[P]>
      : GetScalarType<T[P], AggregateSocialLink[P]>
  }




  export type SocialLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLinkWhereInput
    orderBy?: SocialLinkOrderByWithAggregationInput | SocialLinkOrderByWithAggregationInput[]
    by: SocialLinkScalarFieldEnum[] | SocialLinkScalarFieldEnum
    having?: SocialLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialLinkCountAggregateInputType | true
    _avg?: SocialLinkAvgAggregateInputType
    _sum?: SocialLinkSumAggregateInputType
    _min?: SocialLinkMinAggregateInputType
    _max?: SocialLinkMaxAggregateInputType
  }

  export type SocialLinkGroupByOutputType = {
    id: string
    platform: string
    url: string
    order_index: number
    created_at: Date
    updated_at: Date
    _count: SocialLinkCountAggregateOutputType | null
    _avg: SocialLinkAvgAggregateOutputType | null
    _sum: SocialLinkSumAggregateOutputType | null
    _min: SocialLinkMinAggregateOutputType | null
    _max: SocialLinkMaxAggregateOutputType | null
  }

  type GetSocialLinkGroupByPayload<T extends SocialLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialLinkGroupByOutputType[P]>
            : GetScalarType<T[P], SocialLinkGroupByOutputType[P]>
        }
      >
    >


  export type SocialLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    url?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    url?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectScalar = {
    id?: boolean
    platform?: boolean
    url?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $SocialLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialLink"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      platform: string
      url: string
      order_index: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["socialLink"]>
    composites: {}
  }

  type SocialLinkGetPayload<S extends boolean | null | undefined | SocialLinkDefaultArgs> = $Result.GetResult<Prisma.$SocialLinkPayload, S>

  type SocialLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SocialLinkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SocialLinkCountAggregateInputType | true
    }

  export interface SocialLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialLink'], meta: { name: 'SocialLink' } }
    /**
     * Find zero or one SocialLink that matches the filter.
     * @param {SocialLinkFindUniqueArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialLinkFindUniqueArgs>(args: SelectSubset<T, SocialLinkFindUniqueArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SocialLink that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SocialLinkFindUniqueOrThrowArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SocialLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindFirstArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialLinkFindFirstArgs>(args?: SelectSubset<T, SocialLinkFindFirstArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SocialLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindFirstOrThrowArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SocialLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialLinks
     * const socialLinks = await prisma.socialLink.findMany()
     * 
     * // Get first 10 SocialLinks
     * const socialLinks = await prisma.socialLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialLinkFindManyArgs>(args?: SelectSubset<T, SocialLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SocialLink.
     * @param {SocialLinkCreateArgs} args - Arguments to create a SocialLink.
     * @example
     * // Create one SocialLink
     * const SocialLink = await prisma.socialLink.create({
     *   data: {
     *     // ... data to create a SocialLink
     *   }
     * })
     * 
     */
    create<T extends SocialLinkCreateArgs>(args: SelectSubset<T, SocialLinkCreateArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SocialLinks.
     * @param {SocialLinkCreateManyArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLink = await prisma.socialLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialLinkCreateManyArgs>(args?: SelectSubset<T, SocialLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialLinks and returns the data saved in the database.
     * @param {SocialLinkCreateManyAndReturnArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLink = await prisma.socialLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialLinks and only return the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SocialLink.
     * @param {SocialLinkDeleteArgs} args - Arguments to delete one SocialLink.
     * @example
     * // Delete one SocialLink
     * const SocialLink = await prisma.socialLink.delete({
     *   where: {
     *     // ... filter to delete one SocialLink
     *   }
     * })
     * 
     */
    delete<T extends SocialLinkDeleteArgs>(args: SelectSubset<T, SocialLinkDeleteArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SocialLink.
     * @param {SocialLinkUpdateArgs} args - Arguments to update one SocialLink.
     * @example
     * // Update one SocialLink
     * const socialLink = await prisma.socialLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialLinkUpdateArgs>(args: SelectSubset<T, SocialLinkUpdateArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SocialLinks.
     * @param {SocialLinkDeleteManyArgs} args - Arguments to filter SocialLinks to delete.
     * @example
     * // Delete a few SocialLinks
     * const { count } = await prisma.socialLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialLinkDeleteManyArgs>(args?: SelectSubset<T, SocialLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialLinks
     * const socialLink = await prisma.socialLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialLinkUpdateManyArgs>(args: SelectSubset<T, SocialLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SocialLink.
     * @param {SocialLinkUpsertArgs} args - Arguments to update or create a SocialLink.
     * @example
     * // Update or create a SocialLink
     * const socialLink = await prisma.socialLink.upsert({
     *   create: {
     *     // ... data to create a SocialLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialLink we want to update
     *   }
     * })
     */
    upsert<T extends SocialLinkUpsertArgs>(args: SelectSubset<T, SocialLinkUpsertArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkCountArgs} args - Arguments to filter SocialLinks to count.
     * @example
     * // Count the number of SocialLinks
     * const count = await prisma.socialLink.count({
     *   where: {
     *     // ... the filter for the SocialLinks we want to count
     *   }
     * })
    **/
    count<T extends SocialLinkCountArgs>(
      args?: Subset<T, SocialLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SocialLinkAggregateArgs>(args: Subset<T, SocialLinkAggregateArgs>): Prisma.PrismaPromise<GetSocialLinkAggregateType<T>>

    /**
     * Group by SocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SocialLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialLinkGroupByArgs['orderBy'] }
        : { orderBy?: SocialLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SocialLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialLink model
   */
  readonly fields: SocialLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SocialLink model
   */ 
  interface SocialLinkFieldRefs {
    readonly id: FieldRef<"SocialLink", 'String'>
    readonly platform: FieldRef<"SocialLink", 'String'>
    readonly url: FieldRef<"SocialLink", 'String'>
    readonly order_index: FieldRef<"SocialLink", 'Int'>
    readonly created_at: FieldRef<"SocialLink", 'DateTime'>
    readonly updated_at: FieldRef<"SocialLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialLink findUnique
   */
  export type SocialLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink findUniqueOrThrow
   */
  export type SocialLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink findFirst
   */
  export type SocialLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink findFirstOrThrow
   */
  export type SocialLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink findMany
   */
  export type SocialLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Filter, which SocialLinks to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink create
   */
  export type SocialLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * The data needed to create a SocialLink.
     */
    data: XOR<SocialLinkCreateInput, SocialLinkUncheckedCreateInput>
  }

  /**
   * SocialLink createMany
   */
  export type SocialLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialLinks.
     */
    data: SocialLinkCreateManyInput | SocialLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialLink createManyAndReturn
   */
  export type SocialLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SocialLinks.
     */
    data: SocialLinkCreateManyInput | SocialLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialLink update
   */
  export type SocialLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * The data needed to update a SocialLink.
     */
    data: XOR<SocialLinkUpdateInput, SocialLinkUncheckedUpdateInput>
    /**
     * Choose, which SocialLink to update.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink updateMany
   */
  export type SocialLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialLinks.
     */
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinks to update
     */
    where?: SocialLinkWhereInput
  }

  /**
   * SocialLink upsert
   */
  export type SocialLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * The filter to search for the SocialLink to update in case it exists.
     */
    where: SocialLinkWhereUniqueInput
    /**
     * In case the SocialLink found by the `where` argument doesn't exist, create a new SocialLink with this data.
     */
    create: XOR<SocialLinkCreateInput, SocialLinkUncheckedCreateInput>
    /**
     * In case the SocialLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialLinkUpdateInput, SocialLinkUncheckedUpdateInput>
  }

  /**
   * SocialLink delete
   */
  export type SocialLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Filter which SocialLink to delete.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink deleteMany
   */
  export type SocialLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLinks to delete
     */
    where?: SocialLinkWhereInput
  }

  /**
   * SocialLink without action
   */
  export type SocialLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    order_index: 'order_index',
    deleted_at: 'deleted_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    icon_url: 'icon_url',
    category: 'category',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
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

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    url: 'url',
    alt_text: 'alt_text',
    is_thumbnail: 'is_thumbnail',
    order_index: 'order_index',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const ProjectSkillScalarFieldEnum: {
    project_id: 'project_id',
    skill_id: 'skill_id',
    created_at: 'created_at'
  };

  export type ProjectSkillScalarFieldEnum = (typeof ProjectSkillScalarFieldEnum)[keyof typeof ProjectSkillScalarFieldEnum]


  export const PersonalContentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    title_prefix: 'title_prefix',
    description: 'description',
    cv_file_path: 'cv_file_path',
    cv_download_name: 'cv_download_name',
    updated_at: 'updated_at'
  };

  export type PersonalContentScalarFieldEnum = (typeof PersonalContentScalarFieldEnum)[keyof typeof PersonalContentScalarFieldEnum]


  export const JobRoleScalarFieldEnum: {
    id: 'id',
    label: 'label',
    order_index: 'order_index',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type JobRoleScalarFieldEnum = (typeof JobRoleScalarFieldEnum)[keyof typeof JobRoleScalarFieldEnum]


  export const AboutContentScalarFieldEnum: {
    id: 'id',
    role_title: 'role_title',
    updated_at: 'updated_at'
  };

  export type AboutContentScalarFieldEnum = (typeof AboutContentScalarFieldEnum)[keyof typeof AboutContentScalarFieldEnum]


  export const AboutParagraphScalarFieldEnum: {
    id: 'id',
    content: 'content',
    order_index: 'order_index',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AboutParagraphScalarFieldEnum = (typeof AboutParagraphScalarFieldEnum)[keyof typeof AboutParagraphScalarFieldEnum]


  export const StatScalarFieldEnum: {
    id: 'id',
    label: 'label',
    value: 'value',
    context: 'context',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type StatScalarFieldEnum = (typeof StatScalarFieldEnum)[keyof typeof StatScalarFieldEnum]


  export const EducationEntryScalarFieldEnum: {
    id: 'id',
    period: 'period',
    title: 'title',
    description: 'description',
    order_index: 'order_index',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EducationEntryScalarFieldEnum = (typeof EducationEntryScalarFieldEnum)[keyof typeof EducationEntryScalarFieldEnum]


  export const ExperienceEntryScalarFieldEnum: {
    id: 'id',
    period: 'period',
    title: 'title',
    description: 'description',
    order_index: 'order_index',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ExperienceEntryScalarFieldEnum = (typeof ExperienceEntryScalarFieldEnum)[keyof typeof ExperienceEntryScalarFieldEnum]


  export const ContactContentScalarFieldEnum: {
    id: 'id',
    subtitle: 'subtitle',
    success_title: 'success_title',
    success_message: 'success_message',
    updated_at: 'updated_at'
  };

  export type ContactContentScalarFieldEnum = (typeof ContactContentScalarFieldEnum)[keyof typeof ContactContentScalarFieldEnum]


  export const ContactInfoItemScalarFieldEnum: {
    id: 'id',
    type: 'type',
    label: 'label',
    value: 'value',
    href: 'href',
    order_index: 'order_index',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ContactInfoItemScalarFieldEnum = (typeof ContactInfoItemScalarFieldEnum)[keyof typeof ContactInfoItemScalarFieldEnum]


  export const SocialLinkScalarFieldEnum: {
    id: 'id',
    platform: 'platform',
    url: 'url',
    order_index: 'order_index',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SocialLinkScalarFieldEnum = (typeof SocialLinkScalarFieldEnum)[keyof typeof SocialLinkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    order_index?: IntFilter<"Category"> | number
    deleted_at?: DateTimeNullableFilter<"Category"> | Date | string | null
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeFilter<"Category"> | Date | string
    projects?: ProjectListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    order_index?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    description?: StringNullableFilter<"Category"> | string | null
    order_index?: IntFilter<"Category"> | number
    deleted_at?: DateTimeNullableFilter<"Category"> | Date | string | null
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeFilter<"Category"> | Date | string
    projects?: ProjectListRelationFilter
  }, "id" | "name" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    order_index?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    order_index?: IntWithAggregatesFilter<"Category"> | number
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Category"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    slug?: StringFilter<"Skill"> | string
    icon_url?: StringNullableFilter<"Skill"> | string | null
    category?: StringNullableFilter<"Skill"> | string | null
    created_at?: DateTimeFilter<"Skill"> | Date | string
    updated_at?: DateTimeFilter<"Skill"> | Date | string
    project_skills?: ProjectSkillListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    icon_url?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    project_skills?: ProjectSkillOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    icon_url?: StringNullableFilter<"Skill"> | string | null
    category?: StringNullableFilter<"Skill"> | string | null
    created_at?: DateTimeFilter<"Skill"> | Date | string
    updated_at?: DateTimeFilter<"Skill"> | Date | string
    project_skills?: ProjectSkillListRelationFilter
  }, "id" | "name" | "slug">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    icon_url?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
    slug?: StringWithAggregatesFilter<"Skill"> | string
    icon_url?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    category?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    long_description?: StringNullableFilter<"Project"> | string | null
    demo_url?: StringNullableFilter<"Project"> | string | null
    repo_url?: StringNullableFilter<"Project"> | string | null
    featured?: BoolFilter<"Project"> | boolean
    is_published?: BoolFilter<"Project"> | boolean
    order_index?: IntFilter<"Project"> | number
    category_id?: StringFilter<"Project"> | string
    deleted_at?: DateTimeNullableFilter<"Project"> | Date | string | null
    created_at?: DateTimeFilter<"Project"> | Date | string
    updated_at?: DateTimeFilter<"Project"> | Date | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    images?: ImageListRelationFilter
    project_skills?: ProjectSkillListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    long_description?: SortOrderInput | SortOrder
    demo_url?: SortOrderInput | SortOrder
    repo_url?: SortOrderInput | SortOrder
    featured?: SortOrder
    is_published?: SortOrder
    order_index?: SortOrder
    category_id?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category?: CategoryOrderByWithRelationInput
    images?: ImageOrderByRelationAggregateInput
    project_skills?: ProjectSkillOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    long_description?: StringNullableFilter<"Project"> | string | null
    demo_url?: StringNullableFilter<"Project"> | string | null
    repo_url?: StringNullableFilter<"Project"> | string | null
    featured?: BoolFilter<"Project"> | boolean
    is_published?: BoolFilter<"Project"> | boolean
    order_index?: IntFilter<"Project"> | number
    category_id?: StringFilter<"Project"> | string
    deleted_at?: DateTimeNullableFilter<"Project"> | Date | string | null
    created_at?: DateTimeFilter<"Project"> | Date | string
    updated_at?: DateTimeFilter<"Project"> | Date | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    images?: ImageListRelationFilter
    project_skills?: ProjectSkillListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    long_description?: SortOrderInput | SortOrder
    demo_url?: SortOrderInput | SortOrder
    repo_url?: SortOrderInput | SortOrder
    featured?: SortOrder
    is_published?: SortOrder
    order_index?: SortOrder
    category_id?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    long_description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    demo_url?: StringNullableWithAggregatesFilter<"Project"> | string | null
    repo_url?: StringNullableWithAggregatesFilter<"Project"> | string | null
    featured?: BoolWithAggregatesFilter<"Project"> | boolean
    is_published?: BoolWithAggregatesFilter<"Project"> | boolean
    order_index?: IntWithAggregatesFilter<"Project"> | number
    category_id?: StringWithAggregatesFilter<"Project"> | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    project_id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    alt_text?: StringNullableFilter<"Image"> | string | null
    is_thumbnail?: BoolFilter<"Image"> | boolean
    order_index?: IntFilter<"Image"> | number
    created_at?: DateTimeFilter<"Image"> | Date | string
    updated_at?: DateTimeFilter<"Image"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrder
    url?: SortOrder
    alt_text?: SortOrderInput | SortOrder
    is_thumbnail?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    project_id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    alt_text?: StringNullableFilter<"Image"> | string | null
    is_thumbnail?: BoolFilter<"Image"> | boolean
    order_index?: IntFilter<"Image"> | number
    created_at?: DateTimeFilter<"Image"> | Date | string
    updated_at?: DateTimeFilter<"Image"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrder
    url?: SortOrder
    alt_text?: SortOrderInput | SortOrder
    is_thumbnail?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    project_id?: StringWithAggregatesFilter<"Image"> | string
    url?: StringWithAggregatesFilter<"Image"> | string
    alt_text?: StringNullableWithAggregatesFilter<"Image"> | string | null
    is_thumbnail?: BoolWithAggregatesFilter<"Image"> | boolean
    order_index?: IntWithAggregatesFilter<"Image"> | number
    created_at?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type ProjectSkillWhereInput = {
    AND?: ProjectSkillWhereInput | ProjectSkillWhereInput[]
    OR?: ProjectSkillWhereInput[]
    NOT?: ProjectSkillWhereInput | ProjectSkillWhereInput[]
    project_id?: StringFilter<"ProjectSkill"> | string
    skill_id?: StringFilter<"ProjectSkill"> | string
    created_at?: DateTimeFilter<"ProjectSkill"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    skill?: XOR<SkillRelationFilter, SkillWhereInput>
  }

  export type ProjectSkillOrderByWithRelationInput = {
    project_id?: SortOrder
    skill_id?: SortOrder
    created_at?: SortOrder
    project?: ProjectOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type ProjectSkillWhereUniqueInput = Prisma.AtLeast<{
    project_id_skill_id?: ProjectSkillProject_idSkill_idCompoundUniqueInput
    AND?: ProjectSkillWhereInput | ProjectSkillWhereInput[]
    OR?: ProjectSkillWhereInput[]
    NOT?: ProjectSkillWhereInput | ProjectSkillWhereInput[]
    project_id?: StringFilter<"ProjectSkill"> | string
    skill_id?: StringFilter<"ProjectSkill"> | string
    created_at?: DateTimeFilter<"ProjectSkill"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    skill?: XOR<SkillRelationFilter, SkillWhereInput>
  }, "project_id_skill_id">

  export type ProjectSkillOrderByWithAggregationInput = {
    project_id?: SortOrder
    skill_id?: SortOrder
    created_at?: SortOrder
    _count?: ProjectSkillCountOrderByAggregateInput
    _max?: ProjectSkillMaxOrderByAggregateInput
    _min?: ProjectSkillMinOrderByAggregateInput
  }

  export type ProjectSkillScalarWhereWithAggregatesInput = {
    AND?: ProjectSkillScalarWhereWithAggregatesInput | ProjectSkillScalarWhereWithAggregatesInput[]
    OR?: ProjectSkillScalarWhereWithAggregatesInput[]
    NOT?: ProjectSkillScalarWhereWithAggregatesInput | ProjectSkillScalarWhereWithAggregatesInput[]
    project_id?: StringWithAggregatesFilter<"ProjectSkill"> | string
    skill_id?: StringWithAggregatesFilter<"ProjectSkill"> | string
    created_at?: DateTimeWithAggregatesFilter<"ProjectSkill"> | Date | string
  }

  export type PersonalContentWhereInput = {
    AND?: PersonalContentWhereInput | PersonalContentWhereInput[]
    OR?: PersonalContentWhereInput[]
    NOT?: PersonalContentWhereInput | PersonalContentWhereInput[]
    id?: StringFilter<"PersonalContent"> | string
    name?: StringFilter<"PersonalContent"> | string
    title_prefix?: StringFilter<"PersonalContent"> | string
    description?: StringFilter<"PersonalContent"> | string
    cv_file_path?: StringFilter<"PersonalContent"> | string
    cv_download_name?: StringFilter<"PersonalContent"> | string
    updated_at?: DateTimeFilter<"PersonalContent"> | Date | string
  }

  export type PersonalContentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    title_prefix?: SortOrder
    description?: SortOrder
    cv_file_path?: SortOrder
    cv_download_name?: SortOrder
    updated_at?: SortOrder
  }

  export type PersonalContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PersonalContentWhereInput | PersonalContentWhereInput[]
    OR?: PersonalContentWhereInput[]
    NOT?: PersonalContentWhereInput | PersonalContentWhereInput[]
    name?: StringFilter<"PersonalContent"> | string
    title_prefix?: StringFilter<"PersonalContent"> | string
    description?: StringFilter<"PersonalContent"> | string
    cv_file_path?: StringFilter<"PersonalContent"> | string
    cv_download_name?: StringFilter<"PersonalContent"> | string
    updated_at?: DateTimeFilter<"PersonalContent"> | Date | string
  }, "id">

  export type PersonalContentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    title_prefix?: SortOrder
    description?: SortOrder
    cv_file_path?: SortOrder
    cv_download_name?: SortOrder
    updated_at?: SortOrder
    _count?: PersonalContentCountOrderByAggregateInput
    _max?: PersonalContentMaxOrderByAggregateInput
    _min?: PersonalContentMinOrderByAggregateInput
  }

  export type PersonalContentScalarWhereWithAggregatesInput = {
    AND?: PersonalContentScalarWhereWithAggregatesInput | PersonalContentScalarWhereWithAggregatesInput[]
    OR?: PersonalContentScalarWhereWithAggregatesInput[]
    NOT?: PersonalContentScalarWhereWithAggregatesInput | PersonalContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PersonalContent"> | string
    name?: StringWithAggregatesFilter<"PersonalContent"> | string
    title_prefix?: StringWithAggregatesFilter<"PersonalContent"> | string
    description?: StringWithAggregatesFilter<"PersonalContent"> | string
    cv_file_path?: StringWithAggregatesFilter<"PersonalContent"> | string
    cv_download_name?: StringWithAggregatesFilter<"PersonalContent"> | string
    updated_at?: DateTimeWithAggregatesFilter<"PersonalContent"> | Date | string
  }

  export type JobRoleWhereInput = {
    AND?: JobRoleWhereInput | JobRoleWhereInput[]
    OR?: JobRoleWhereInput[]
    NOT?: JobRoleWhereInput | JobRoleWhereInput[]
    id?: StringFilter<"JobRole"> | string
    label?: StringFilter<"JobRole"> | string
    order_index?: IntFilter<"JobRole"> | number
    created_at?: DateTimeFilter<"JobRole"> | Date | string
    updated_at?: DateTimeFilter<"JobRole"> | Date | string
  }

  export type JobRoleOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type JobRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobRoleWhereInput | JobRoleWhereInput[]
    OR?: JobRoleWhereInput[]
    NOT?: JobRoleWhereInput | JobRoleWhereInput[]
    label?: StringFilter<"JobRole"> | string
    order_index?: IntFilter<"JobRole"> | number
    created_at?: DateTimeFilter<"JobRole"> | Date | string
    updated_at?: DateTimeFilter<"JobRole"> | Date | string
  }, "id">

  export type JobRoleOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: JobRoleCountOrderByAggregateInput
    _avg?: JobRoleAvgOrderByAggregateInput
    _max?: JobRoleMaxOrderByAggregateInput
    _min?: JobRoleMinOrderByAggregateInput
    _sum?: JobRoleSumOrderByAggregateInput
  }

  export type JobRoleScalarWhereWithAggregatesInput = {
    AND?: JobRoleScalarWhereWithAggregatesInput | JobRoleScalarWhereWithAggregatesInput[]
    OR?: JobRoleScalarWhereWithAggregatesInput[]
    NOT?: JobRoleScalarWhereWithAggregatesInput | JobRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobRole"> | string
    label?: StringWithAggregatesFilter<"JobRole"> | string
    order_index?: IntWithAggregatesFilter<"JobRole"> | number
    created_at?: DateTimeWithAggregatesFilter<"JobRole"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"JobRole"> | Date | string
  }

  export type AboutContentWhereInput = {
    AND?: AboutContentWhereInput | AboutContentWhereInput[]
    OR?: AboutContentWhereInput[]
    NOT?: AboutContentWhereInput | AboutContentWhereInput[]
    id?: StringFilter<"AboutContent"> | string
    role_title?: StringFilter<"AboutContent"> | string
    updated_at?: DateTimeFilter<"AboutContent"> | Date | string
  }

  export type AboutContentOrderByWithRelationInput = {
    id?: SortOrder
    role_title?: SortOrder
    updated_at?: SortOrder
  }

  export type AboutContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AboutContentWhereInput | AboutContentWhereInput[]
    OR?: AboutContentWhereInput[]
    NOT?: AboutContentWhereInput | AboutContentWhereInput[]
    role_title?: StringFilter<"AboutContent"> | string
    updated_at?: DateTimeFilter<"AboutContent"> | Date | string
  }, "id">

  export type AboutContentOrderByWithAggregationInput = {
    id?: SortOrder
    role_title?: SortOrder
    updated_at?: SortOrder
    _count?: AboutContentCountOrderByAggregateInput
    _max?: AboutContentMaxOrderByAggregateInput
    _min?: AboutContentMinOrderByAggregateInput
  }

  export type AboutContentScalarWhereWithAggregatesInput = {
    AND?: AboutContentScalarWhereWithAggregatesInput | AboutContentScalarWhereWithAggregatesInput[]
    OR?: AboutContentScalarWhereWithAggregatesInput[]
    NOT?: AboutContentScalarWhereWithAggregatesInput | AboutContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AboutContent"> | string
    role_title?: StringWithAggregatesFilter<"AboutContent"> | string
    updated_at?: DateTimeWithAggregatesFilter<"AboutContent"> | Date | string
  }

  export type AboutParagraphWhereInput = {
    AND?: AboutParagraphWhereInput | AboutParagraphWhereInput[]
    OR?: AboutParagraphWhereInput[]
    NOT?: AboutParagraphWhereInput | AboutParagraphWhereInput[]
    id?: StringFilter<"AboutParagraph"> | string
    content?: StringFilter<"AboutParagraph"> | string
    order_index?: IntFilter<"AboutParagraph"> | number
    created_at?: DateTimeFilter<"AboutParagraph"> | Date | string
    updated_at?: DateTimeFilter<"AboutParagraph"> | Date | string
  }

  export type AboutParagraphOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AboutParagraphWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AboutParagraphWhereInput | AboutParagraphWhereInput[]
    OR?: AboutParagraphWhereInput[]
    NOT?: AboutParagraphWhereInput | AboutParagraphWhereInput[]
    content?: StringFilter<"AboutParagraph"> | string
    order_index?: IntFilter<"AboutParagraph"> | number
    created_at?: DateTimeFilter<"AboutParagraph"> | Date | string
    updated_at?: DateTimeFilter<"AboutParagraph"> | Date | string
  }, "id">

  export type AboutParagraphOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AboutParagraphCountOrderByAggregateInput
    _avg?: AboutParagraphAvgOrderByAggregateInput
    _max?: AboutParagraphMaxOrderByAggregateInput
    _min?: AboutParagraphMinOrderByAggregateInput
    _sum?: AboutParagraphSumOrderByAggregateInput
  }

  export type AboutParagraphScalarWhereWithAggregatesInput = {
    AND?: AboutParagraphScalarWhereWithAggregatesInput | AboutParagraphScalarWhereWithAggregatesInput[]
    OR?: AboutParagraphScalarWhereWithAggregatesInput[]
    NOT?: AboutParagraphScalarWhereWithAggregatesInput | AboutParagraphScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AboutParagraph"> | string
    content?: StringWithAggregatesFilter<"AboutParagraph"> | string
    order_index?: IntWithAggregatesFilter<"AboutParagraph"> | number
    created_at?: DateTimeWithAggregatesFilter<"AboutParagraph"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"AboutParagraph"> | Date | string
  }

  export type StatWhereInput = {
    AND?: StatWhereInput | StatWhereInput[]
    OR?: StatWhereInput[]
    NOT?: StatWhereInput | StatWhereInput[]
    id?: StringFilter<"Stat"> | string
    label?: StringFilter<"Stat"> | string
    value?: StringFilter<"Stat"> | string
    context?: StringFilter<"Stat"> | string
    created_at?: DateTimeFilter<"Stat"> | Date | string
    updated_at?: DateTimeFilter<"Stat"> | Date | string
  }

  export type StatOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    context?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StatWhereInput | StatWhereInput[]
    OR?: StatWhereInput[]
    NOT?: StatWhereInput | StatWhereInput[]
    label?: StringFilter<"Stat"> | string
    value?: StringFilter<"Stat"> | string
    context?: StringFilter<"Stat"> | string
    created_at?: DateTimeFilter<"Stat"> | Date | string
    updated_at?: DateTimeFilter<"Stat"> | Date | string
  }, "id">

  export type StatOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    context?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: StatCountOrderByAggregateInput
    _max?: StatMaxOrderByAggregateInput
    _min?: StatMinOrderByAggregateInput
  }

  export type StatScalarWhereWithAggregatesInput = {
    AND?: StatScalarWhereWithAggregatesInput | StatScalarWhereWithAggregatesInput[]
    OR?: StatScalarWhereWithAggregatesInput[]
    NOT?: StatScalarWhereWithAggregatesInput | StatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stat"> | string
    label?: StringWithAggregatesFilter<"Stat"> | string
    value?: StringWithAggregatesFilter<"Stat"> | string
    context?: StringWithAggregatesFilter<"Stat"> | string
    created_at?: DateTimeWithAggregatesFilter<"Stat"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Stat"> | Date | string
  }

  export type EducationEntryWhereInput = {
    AND?: EducationEntryWhereInput | EducationEntryWhereInput[]
    OR?: EducationEntryWhereInput[]
    NOT?: EducationEntryWhereInput | EducationEntryWhereInput[]
    id?: StringFilter<"EducationEntry"> | string
    period?: StringFilter<"EducationEntry"> | string
    title?: StringFilter<"EducationEntry"> | string
    description?: StringFilter<"EducationEntry"> | string
    order_index?: IntFilter<"EducationEntry"> | number
    created_at?: DateTimeFilter<"EducationEntry"> | Date | string
    updated_at?: DateTimeFilter<"EducationEntry"> | Date | string
  }

  export type EducationEntryOrderByWithRelationInput = {
    id?: SortOrder
    period?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EducationEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EducationEntryWhereInput | EducationEntryWhereInput[]
    OR?: EducationEntryWhereInput[]
    NOT?: EducationEntryWhereInput | EducationEntryWhereInput[]
    period?: StringFilter<"EducationEntry"> | string
    title?: StringFilter<"EducationEntry"> | string
    description?: StringFilter<"EducationEntry"> | string
    order_index?: IntFilter<"EducationEntry"> | number
    created_at?: DateTimeFilter<"EducationEntry"> | Date | string
    updated_at?: DateTimeFilter<"EducationEntry"> | Date | string
  }, "id">

  export type EducationEntryOrderByWithAggregationInput = {
    id?: SortOrder
    period?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: EducationEntryCountOrderByAggregateInput
    _avg?: EducationEntryAvgOrderByAggregateInput
    _max?: EducationEntryMaxOrderByAggregateInput
    _min?: EducationEntryMinOrderByAggregateInput
    _sum?: EducationEntrySumOrderByAggregateInput
  }

  export type EducationEntryScalarWhereWithAggregatesInput = {
    AND?: EducationEntryScalarWhereWithAggregatesInput | EducationEntryScalarWhereWithAggregatesInput[]
    OR?: EducationEntryScalarWhereWithAggregatesInput[]
    NOT?: EducationEntryScalarWhereWithAggregatesInput | EducationEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EducationEntry"> | string
    period?: StringWithAggregatesFilter<"EducationEntry"> | string
    title?: StringWithAggregatesFilter<"EducationEntry"> | string
    description?: StringWithAggregatesFilter<"EducationEntry"> | string
    order_index?: IntWithAggregatesFilter<"EducationEntry"> | number
    created_at?: DateTimeWithAggregatesFilter<"EducationEntry"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"EducationEntry"> | Date | string
  }

  export type ExperienceEntryWhereInput = {
    AND?: ExperienceEntryWhereInput | ExperienceEntryWhereInput[]
    OR?: ExperienceEntryWhereInput[]
    NOT?: ExperienceEntryWhereInput | ExperienceEntryWhereInput[]
    id?: StringFilter<"ExperienceEntry"> | string
    period?: StringFilter<"ExperienceEntry"> | string
    title?: StringFilter<"ExperienceEntry"> | string
    description?: StringFilter<"ExperienceEntry"> | string
    order_index?: IntFilter<"ExperienceEntry"> | number
    created_at?: DateTimeFilter<"ExperienceEntry"> | Date | string
    updated_at?: DateTimeFilter<"ExperienceEntry"> | Date | string
  }

  export type ExperienceEntryOrderByWithRelationInput = {
    id?: SortOrder
    period?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ExperienceEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExperienceEntryWhereInput | ExperienceEntryWhereInput[]
    OR?: ExperienceEntryWhereInput[]
    NOT?: ExperienceEntryWhereInput | ExperienceEntryWhereInput[]
    period?: StringFilter<"ExperienceEntry"> | string
    title?: StringFilter<"ExperienceEntry"> | string
    description?: StringFilter<"ExperienceEntry"> | string
    order_index?: IntFilter<"ExperienceEntry"> | number
    created_at?: DateTimeFilter<"ExperienceEntry"> | Date | string
    updated_at?: DateTimeFilter<"ExperienceEntry"> | Date | string
  }, "id">

  export type ExperienceEntryOrderByWithAggregationInput = {
    id?: SortOrder
    period?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ExperienceEntryCountOrderByAggregateInput
    _avg?: ExperienceEntryAvgOrderByAggregateInput
    _max?: ExperienceEntryMaxOrderByAggregateInput
    _min?: ExperienceEntryMinOrderByAggregateInput
    _sum?: ExperienceEntrySumOrderByAggregateInput
  }

  export type ExperienceEntryScalarWhereWithAggregatesInput = {
    AND?: ExperienceEntryScalarWhereWithAggregatesInput | ExperienceEntryScalarWhereWithAggregatesInput[]
    OR?: ExperienceEntryScalarWhereWithAggregatesInput[]
    NOT?: ExperienceEntryScalarWhereWithAggregatesInput | ExperienceEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExperienceEntry"> | string
    period?: StringWithAggregatesFilter<"ExperienceEntry"> | string
    title?: StringWithAggregatesFilter<"ExperienceEntry"> | string
    description?: StringWithAggregatesFilter<"ExperienceEntry"> | string
    order_index?: IntWithAggregatesFilter<"ExperienceEntry"> | number
    created_at?: DateTimeWithAggregatesFilter<"ExperienceEntry"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ExperienceEntry"> | Date | string
  }

  export type ContactContentWhereInput = {
    AND?: ContactContentWhereInput | ContactContentWhereInput[]
    OR?: ContactContentWhereInput[]
    NOT?: ContactContentWhereInput | ContactContentWhereInput[]
    id?: StringFilter<"ContactContent"> | string
    subtitle?: StringFilter<"ContactContent"> | string
    success_title?: StringFilter<"ContactContent"> | string
    success_message?: StringFilter<"ContactContent"> | string
    updated_at?: DateTimeFilter<"ContactContent"> | Date | string
  }

  export type ContactContentOrderByWithRelationInput = {
    id?: SortOrder
    subtitle?: SortOrder
    success_title?: SortOrder
    success_message?: SortOrder
    updated_at?: SortOrder
  }

  export type ContactContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactContentWhereInput | ContactContentWhereInput[]
    OR?: ContactContentWhereInput[]
    NOT?: ContactContentWhereInput | ContactContentWhereInput[]
    subtitle?: StringFilter<"ContactContent"> | string
    success_title?: StringFilter<"ContactContent"> | string
    success_message?: StringFilter<"ContactContent"> | string
    updated_at?: DateTimeFilter<"ContactContent"> | Date | string
  }, "id">

  export type ContactContentOrderByWithAggregationInput = {
    id?: SortOrder
    subtitle?: SortOrder
    success_title?: SortOrder
    success_message?: SortOrder
    updated_at?: SortOrder
    _count?: ContactContentCountOrderByAggregateInput
    _max?: ContactContentMaxOrderByAggregateInput
    _min?: ContactContentMinOrderByAggregateInput
  }

  export type ContactContentScalarWhereWithAggregatesInput = {
    AND?: ContactContentScalarWhereWithAggregatesInput | ContactContentScalarWhereWithAggregatesInput[]
    OR?: ContactContentScalarWhereWithAggregatesInput[]
    NOT?: ContactContentScalarWhereWithAggregatesInput | ContactContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactContent"> | string
    subtitle?: StringWithAggregatesFilter<"ContactContent"> | string
    success_title?: StringWithAggregatesFilter<"ContactContent"> | string
    success_message?: StringWithAggregatesFilter<"ContactContent"> | string
    updated_at?: DateTimeWithAggregatesFilter<"ContactContent"> | Date | string
  }

  export type ContactInfoItemWhereInput = {
    AND?: ContactInfoItemWhereInput | ContactInfoItemWhereInput[]
    OR?: ContactInfoItemWhereInput[]
    NOT?: ContactInfoItemWhereInput | ContactInfoItemWhereInput[]
    id?: StringFilter<"ContactInfoItem"> | string
    type?: StringFilter<"ContactInfoItem"> | string
    label?: StringFilter<"ContactInfoItem"> | string
    value?: StringFilter<"ContactInfoItem"> | string
    href?: StringNullableFilter<"ContactInfoItem"> | string | null
    order_index?: IntFilter<"ContactInfoItem"> | number
    created_at?: DateTimeFilter<"ContactInfoItem"> | Date | string
    updated_at?: DateTimeFilter<"ContactInfoItem"> | Date | string
  }

  export type ContactInfoItemOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    label?: SortOrder
    value?: SortOrder
    href?: SortOrderInput | SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ContactInfoItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactInfoItemWhereInput | ContactInfoItemWhereInput[]
    OR?: ContactInfoItemWhereInput[]
    NOT?: ContactInfoItemWhereInput | ContactInfoItemWhereInput[]
    type?: StringFilter<"ContactInfoItem"> | string
    label?: StringFilter<"ContactInfoItem"> | string
    value?: StringFilter<"ContactInfoItem"> | string
    href?: StringNullableFilter<"ContactInfoItem"> | string | null
    order_index?: IntFilter<"ContactInfoItem"> | number
    created_at?: DateTimeFilter<"ContactInfoItem"> | Date | string
    updated_at?: DateTimeFilter<"ContactInfoItem"> | Date | string
  }, "id">

  export type ContactInfoItemOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    label?: SortOrder
    value?: SortOrder
    href?: SortOrderInput | SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ContactInfoItemCountOrderByAggregateInput
    _avg?: ContactInfoItemAvgOrderByAggregateInput
    _max?: ContactInfoItemMaxOrderByAggregateInput
    _min?: ContactInfoItemMinOrderByAggregateInput
    _sum?: ContactInfoItemSumOrderByAggregateInput
  }

  export type ContactInfoItemScalarWhereWithAggregatesInput = {
    AND?: ContactInfoItemScalarWhereWithAggregatesInput | ContactInfoItemScalarWhereWithAggregatesInput[]
    OR?: ContactInfoItemScalarWhereWithAggregatesInput[]
    NOT?: ContactInfoItemScalarWhereWithAggregatesInput | ContactInfoItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactInfoItem"> | string
    type?: StringWithAggregatesFilter<"ContactInfoItem"> | string
    label?: StringWithAggregatesFilter<"ContactInfoItem"> | string
    value?: StringWithAggregatesFilter<"ContactInfoItem"> | string
    href?: StringNullableWithAggregatesFilter<"ContactInfoItem"> | string | null
    order_index?: IntWithAggregatesFilter<"ContactInfoItem"> | number
    created_at?: DateTimeWithAggregatesFilter<"ContactInfoItem"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ContactInfoItem"> | Date | string
  }

  export type SocialLinkWhereInput = {
    AND?: SocialLinkWhereInput | SocialLinkWhereInput[]
    OR?: SocialLinkWhereInput[]
    NOT?: SocialLinkWhereInput | SocialLinkWhereInput[]
    id?: StringFilter<"SocialLink"> | string
    platform?: StringFilter<"SocialLink"> | string
    url?: StringFilter<"SocialLink"> | string
    order_index?: IntFilter<"SocialLink"> | number
    created_at?: DateTimeFilter<"SocialLink"> | Date | string
    updated_at?: DateTimeFilter<"SocialLink"> | Date | string
  }

  export type SocialLinkOrderByWithRelationInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SocialLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SocialLinkWhereInput | SocialLinkWhereInput[]
    OR?: SocialLinkWhereInput[]
    NOT?: SocialLinkWhereInput | SocialLinkWhereInput[]
    platform?: StringFilter<"SocialLink"> | string
    url?: StringFilter<"SocialLink"> | string
    order_index?: IntFilter<"SocialLink"> | number
    created_at?: DateTimeFilter<"SocialLink"> | Date | string
    updated_at?: DateTimeFilter<"SocialLink"> | Date | string
  }, "id">

  export type SocialLinkOrderByWithAggregationInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SocialLinkCountOrderByAggregateInput
    _avg?: SocialLinkAvgOrderByAggregateInput
    _max?: SocialLinkMaxOrderByAggregateInput
    _min?: SocialLinkMinOrderByAggregateInput
    _sum?: SocialLinkSumOrderByAggregateInput
  }

  export type SocialLinkScalarWhereWithAggregatesInput = {
    AND?: SocialLinkScalarWhereWithAggregatesInput | SocialLinkScalarWhereWithAggregatesInput[]
    OR?: SocialLinkScalarWhereWithAggregatesInput[]
    NOT?: SocialLinkScalarWhereWithAggregatesInput | SocialLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialLink"> | string
    platform?: StringWithAggregatesFilter<"SocialLink"> | string
    url?: StringWithAggregatesFilter<"SocialLink"> | string
    order_index?: IntWithAggregatesFilter<"SocialLink"> | number
    created_at?: DateTimeWithAggregatesFilter<"SocialLink"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"SocialLink"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    order_index?: number
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    projects?: ProjectCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    order_index?: number
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order_index?: IntFieldUpdateOperationsInput | number
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order_index?: IntFieldUpdateOperationsInput | number
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    order_index?: number
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order_index?: IntFieldUpdateOperationsInput | number
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order_index?: IntFieldUpdateOperationsInput | number
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    slug: string
    icon_url?: string | null
    category?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    project_skills?: ProjectSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    icon_url?: string | null
    category?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    project_skills?: ProjectSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    project_skills?: ProjectSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    project_skills?: ProjectSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: string
    name: string
    slug: string
    icon_url?: string | null
    category?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    description: string
    long_description?: string | null
    demo_url?: string | null
    repo_url?: string | null
    featured?: boolean
    is_published?: boolean
    order_index?: number
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutProjectsInput
    images?: ImageCreateNestedManyWithoutProjectInput
    project_skills?: ProjectSkillCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    long_description?: string | null
    demo_url?: string | null
    repo_url?: string | null
    featured?: boolean
    is_published?: boolean
    order_index?: number
    category_id: string
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutProjectInput
    project_skills?: ProjectSkillUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    demo_url?: NullableStringFieldUpdateOperationsInput | string | null
    repo_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    order_index?: IntFieldUpdateOperationsInput | number
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProjectsNestedInput
    images?: ImageUpdateManyWithoutProjectNestedInput
    project_skills?: ProjectSkillUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    demo_url?: NullableStringFieldUpdateOperationsInput | string | null
    repo_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    order_index?: IntFieldUpdateOperationsInput | number
    category_id?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutProjectNestedInput
    project_skills?: ProjectSkillUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    title: string
    description: string
    long_description?: string | null
    demo_url?: string | null
    repo_url?: string | null
    featured?: boolean
    is_published?: boolean
    order_index?: number
    category_id: string
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    demo_url?: NullableStringFieldUpdateOperationsInput | string | null
    repo_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    order_index?: IntFieldUpdateOperationsInput | number
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    demo_url?: NullableStringFieldUpdateOperationsInput | string | null
    repo_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    order_index?: IntFieldUpdateOperationsInput | number
    category_id?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    id?: string
    url: string
    alt_text?: string | null
    is_thumbnail?: boolean
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
    project: ProjectCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    project_id: string
    url: string
    alt_text?: string | null
    is_thumbnail?: boolean
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_thumbnail?: BoolFieldUpdateOperationsInput | boolean
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_thumbnail?: BoolFieldUpdateOperationsInput | boolean
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyInput = {
    id?: string
    project_id: string
    url: string
    alt_text?: string | null
    is_thumbnail?: boolean
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_thumbnail?: BoolFieldUpdateOperationsInput | boolean
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_thumbnail?: BoolFieldUpdateOperationsInput | boolean
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSkillCreateInput = {
    created_at?: Date | string
    project: ProjectCreateNestedOneWithoutProject_skillsInput
    skill: SkillCreateNestedOneWithoutProject_skillsInput
  }

  export type ProjectSkillUncheckedCreateInput = {
    project_id: string
    skill_id: string
    created_at?: Date | string
  }

  export type ProjectSkillUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProject_skillsNestedInput
    skill?: SkillUpdateOneRequiredWithoutProject_skillsNestedInput
  }

  export type ProjectSkillUncheckedUpdateInput = {
    project_id?: StringFieldUpdateOperationsInput | string
    skill_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSkillCreateManyInput = {
    project_id: string
    skill_id: string
    created_at?: Date | string
  }

  export type ProjectSkillUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSkillUncheckedUpdateManyInput = {
    project_id?: StringFieldUpdateOperationsInput | string
    skill_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalContentCreateInput = {
    id?: string
    name: string
    title_prefix: string
    description: string
    cv_file_path: string
    cv_download_name: string
    updated_at?: Date | string
  }

  export type PersonalContentUncheckedCreateInput = {
    id?: string
    name: string
    title_prefix: string
    description: string
    cv_file_path: string
    cv_download_name: string
    updated_at?: Date | string
  }

  export type PersonalContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title_prefix?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cv_file_path?: StringFieldUpdateOperationsInput | string
    cv_download_name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title_prefix?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cv_file_path?: StringFieldUpdateOperationsInput | string
    cv_download_name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalContentCreateManyInput = {
    id?: string
    name: string
    title_prefix: string
    description: string
    cv_file_path: string
    cv_download_name: string
    updated_at?: Date | string
  }

  export type PersonalContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title_prefix?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cv_file_path?: StringFieldUpdateOperationsInput | string
    cv_download_name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title_prefix?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cv_file_path?: StringFieldUpdateOperationsInput | string
    cv_download_name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobRoleCreateInput = {
    id?: string
    label: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type JobRoleUncheckedCreateInput = {
    id?: string
    label: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type JobRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobRoleCreateManyInput = {
    id?: string
    label: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type JobRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutContentCreateInput = {
    id?: string
    role_title: string
    updated_at?: Date | string
  }

  export type AboutContentUncheckedCreateInput = {
    id?: string
    role_title: string
    updated_at?: Date | string
  }

  export type AboutContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_title?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_title?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutContentCreateManyInput = {
    id?: string
    role_title: string
    updated_at?: Date | string
  }

  export type AboutContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_title?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_title?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutParagraphCreateInput = {
    id?: string
    content: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AboutParagraphUncheckedCreateInput = {
    id?: string
    content: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AboutParagraphUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutParagraphUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutParagraphCreateManyInput = {
    id?: string
    content: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AboutParagraphUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutParagraphUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatCreateInput = {
    id?: string
    label: string
    value: string
    context?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StatUncheckedCreateInput = {
    id?: string
    label: string
    value: string
    context?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    context?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    context?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatCreateManyInput = {
    id?: string
    label: string
    value: string
    context?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    context?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    context?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationEntryCreateInput = {
    id?: string
    period: string
    title: string
    description: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EducationEntryUncheckedCreateInput = {
    id?: string
    period: string
    title: string
    description: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EducationEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationEntryCreateManyInput = {
    id?: string
    period: string
    title: string
    description: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EducationEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceEntryCreateInput = {
    id?: string
    period: string
    title: string
    description: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ExperienceEntryUncheckedCreateInput = {
    id?: string
    period: string
    title: string
    description: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ExperienceEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceEntryCreateManyInput = {
    id?: string
    period: string
    title: string
    description: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ExperienceEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactContentCreateInput = {
    id?: string
    subtitle: string
    success_title: string
    success_message: string
    updated_at?: Date | string
  }

  export type ContactContentUncheckedCreateInput = {
    id?: string
    subtitle: string
    success_title: string
    success_message: string
    updated_at?: Date | string
  }

  export type ContactContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    success_title?: StringFieldUpdateOperationsInput | string
    success_message?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    success_title?: StringFieldUpdateOperationsInput | string
    success_message?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactContentCreateManyInput = {
    id?: string
    subtitle: string
    success_title: string
    success_message: string
    updated_at?: Date | string
  }

  export type ContactContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    success_title?: StringFieldUpdateOperationsInput | string
    success_message?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    success_title?: StringFieldUpdateOperationsInput | string
    success_message?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoItemCreateInput = {
    id?: string
    type: string
    label: string
    value: string
    href?: string | null
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ContactInfoItemUncheckedCreateInput = {
    id?: string
    type: string
    label: string
    value: string
    href?: string | null
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ContactInfoItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    href?: NullableStringFieldUpdateOperationsInput | string | null
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    href?: NullableStringFieldUpdateOperationsInput | string | null
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoItemCreateManyInput = {
    id?: string
    type: string
    label: string
    value: string
    href?: string | null
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ContactInfoItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    href?: NullableStringFieldUpdateOperationsInput | string | null
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    href?: NullableStringFieldUpdateOperationsInput | string | null
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkCreateInput = {
    id?: string
    platform: string
    url: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SocialLinkUncheckedCreateInput = {
    id?: string
    platform: string
    url: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SocialLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkCreateManyInput = {
    id?: string
    platform: string
    url: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SocialLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    order_index?: SortOrder
    deleted_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    order_index?: SortOrder
    deleted_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    order_index?: SortOrder
    deleted_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProjectSkillListRelationFilter = {
    every?: ProjectSkillWhereInput
    some?: ProjectSkillWhereInput
    none?: ProjectSkillWhereInput
  }

  export type ProjectSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    icon_url?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    icon_url?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    icon_url?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    long_description?: SortOrder
    demo_url?: SortOrder
    repo_url?: SortOrder
    featured?: SortOrder
    is_published?: SortOrder
    order_index?: SortOrder
    category_id?: SortOrder
    deleted_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    long_description?: SortOrder
    demo_url?: SortOrder
    repo_url?: SortOrder
    featured?: SortOrder
    is_published?: SortOrder
    order_index?: SortOrder
    category_id?: SortOrder
    deleted_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    long_description?: SortOrder
    demo_url?: SortOrder
    repo_url?: SortOrder
    featured?: SortOrder
    is_published?: SortOrder
    order_index?: SortOrder
    category_id?: SortOrder
    deleted_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    url?: SortOrder
    alt_text?: SortOrder
    is_thumbnail?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    url?: SortOrder
    alt_text?: SortOrder
    is_thumbnail?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    url?: SortOrder
    alt_text?: SortOrder
    is_thumbnail?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type SkillRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type ProjectSkillProject_idSkill_idCompoundUniqueInput = {
    project_id: string
    skill_id: string
  }

  export type ProjectSkillCountOrderByAggregateInput = {
    project_id?: SortOrder
    skill_id?: SortOrder
    created_at?: SortOrder
  }

  export type ProjectSkillMaxOrderByAggregateInput = {
    project_id?: SortOrder
    skill_id?: SortOrder
    created_at?: SortOrder
  }

  export type ProjectSkillMinOrderByAggregateInput = {
    project_id?: SortOrder
    skill_id?: SortOrder
    created_at?: SortOrder
  }

  export type PersonalContentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title_prefix?: SortOrder
    description?: SortOrder
    cv_file_path?: SortOrder
    cv_download_name?: SortOrder
    updated_at?: SortOrder
  }

  export type PersonalContentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title_prefix?: SortOrder
    description?: SortOrder
    cv_file_path?: SortOrder
    cv_download_name?: SortOrder
    updated_at?: SortOrder
  }

  export type PersonalContentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title_prefix?: SortOrder
    description?: SortOrder
    cv_file_path?: SortOrder
    cv_download_name?: SortOrder
    updated_at?: SortOrder
  }

  export type JobRoleCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type JobRoleAvgOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type JobRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type JobRoleMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type JobRoleSumOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type AboutContentCountOrderByAggregateInput = {
    id?: SortOrder
    role_title?: SortOrder
    updated_at?: SortOrder
  }

  export type AboutContentMaxOrderByAggregateInput = {
    id?: SortOrder
    role_title?: SortOrder
    updated_at?: SortOrder
  }

  export type AboutContentMinOrderByAggregateInput = {
    id?: SortOrder
    role_title?: SortOrder
    updated_at?: SortOrder
  }

  export type AboutParagraphCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AboutParagraphAvgOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type AboutParagraphMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AboutParagraphMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AboutParagraphSumOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type StatCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    context?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StatMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    context?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StatMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    context?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EducationEntryCountOrderByAggregateInput = {
    id?: SortOrder
    period?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EducationEntryAvgOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type EducationEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    period?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EducationEntryMinOrderByAggregateInput = {
    id?: SortOrder
    period?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EducationEntrySumOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type ExperienceEntryCountOrderByAggregateInput = {
    id?: SortOrder
    period?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ExperienceEntryAvgOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type ExperienceEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    period?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ExperienceEntryMinOrderByAggregateInput = {
    id?: SortOrder
    period?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ExperienceEntrySumOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type ContactContentCountOrderByAggregateInput = {
    id?: SortOrder
    subtitle?: SortOrder
    success_title?: SortOrder
    success_message?: SortOrder
    updated_at?: SortOrder
  }

  export type ContactContentMaxOrderByAggregateInput = {
    id?: SortOrder
    subtitle?: SortOrder
    success_title?: SortOrder
    success_message?: SortOrder
    updated_at?: SortOrder
  }

  export type ContactContentMinOrderByAggregateInput = {
    id?: SortOrder
    subtitle?: SortOrder
    success_title?: SortOrder
    success_message?: SortOrder
    updated_at?: SortOrder
  }

  export type ContactInfoItemCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    label?: SortOrder
    value?: SortOrder
    href?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ContactInfoItemAvgOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type ContactInfoItemMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    label?: SortOrder
    value?: SortOrder
    href?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ContactInfoItemMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    label?: SortOrder
    value?: SortOrder
    href?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ContactInfoItemSumOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type SocialLinkCountOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SocialLinkAvgOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type SocialLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SocialLinkMinOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SocialLinkSumOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProjectCreateWithoutCategoryInput, ProjectUncheckedCreateWithoutCategoryInput> | ProjectCreateWithoutCategoryInput[] | ProjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCategoryInput | ProjectCreateOrConnectWithoutCategoryInput[]
    createMany?: ProjectCreateManyCategoryInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProjectCreateWithoutCategoryInput, ProjectUncheckedCreateWithoutCategoryInput> | ProjectCreateWithoutCategoryInput[] | ProjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCategoryInput | ProjectCreateOrConnectWithoutCategoryInput[]
    createMany?: ProjectCreateManyCategoryInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProjectUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProjectCreateWithoutCategoryInput, ProjectUncheckedCreateWithoutCategoryInput> | ProjectCreateWithoutCategoryInput[] | ProjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCategoryInput | ProjectCreateOrConnectWithoutCategoryInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCategoryInput | ProjectUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProjectCreateManyCategoryInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCategoryInput | ProjectUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCategoryInput | ProjectUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProjectCreateWithoutCategoryInput, ProjectUncheckedCreateWithoutCategoryInput> | ProjectCreateWithoutCategoryInput[] | ProjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCategoryInput | ProjectCreateOrConnectWithoutCategoryInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCategoryInput | ProjectUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProjectCreateManyCategoryInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCategoryInput | ProjectUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCategoryInput | ProjectUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<ProjectSkillCreateWithoutSkillInput, ProjectSkillUncheckedCreateWithoutSkillInput> | ProjectSkillCreateWithoutSkillInput[] | ProjectSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ProjectSkillCreateOrConnectWithoutSkillInput | ProjectSkillCreateOrConnectWithoutSkillInput[]
    createMany?: ProjectSkillCreateManySkillInputEnvelope
    connect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
  }

  export type ProjectSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<ProjectSkillCreateWithoutSkillInput, ProjectSkillUncheckedCreateWithoutSkillInput> | ProjectSkillCreateWithoutSkillInput[] | ProjectSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ProjectSkillCreateOrConnectWithoutSkillInput | ProjectSkillCreateOrConnectWithoutSkillInput[]
    createMany?: ProjectSkillCreateManySkillInputEnvelope
    connect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
  }

  export type ProjectSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<ProjectSkillCreateWithoutSkillInput, ProjectSkillUncheckedCreateWithoutSkillInput> | ProjectSkillCreateWithoutSkillInput[] | ProjectSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ProjectSkillCreateOrConnectWithoutSkillInput | ProjectSkillCreateOrConnectWithoutSkillInput[]
    upsert?: ProjectSkillUpsertWithWhereUniqueWithoutSkillInput | ProjectSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: ProjectSkillCreateManySkillInputEnvelope
    set?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    disconnect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    delete?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    connect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    update?: ProjectSkillUpdateWithWhereUniqueWithoutSkillInput | ProjectSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: ProjectSkillUpdateManyWithWhereWithoutSkillInput | ProjectSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: ProjectSkillScalarWhereInput | ProjectSkillScalarWhereInput[]
  }

  export type ProjectSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<ProjectSkillCreateWithoutSkillInput, ProjectSkillUncheckedCreateWithoutSkillInput> | ProjectSkillCreateWithoutSkillInput[] | ProjectSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ProjectSkillCreateOrConnectWithoutSkillInput | ProjectSkillCreateOrConnectWithoutSkillInput[]
    upsert?: ProjectSkillUpsertWithWhereUniqueWithoutSkillInput | ProjectSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: ProjectSkillCreateManySkillInputEnvelope
    set?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    disconnect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    delete?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    connect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    update?: ProjectSkillUpdateWithWhereUniqueWithoutSkillInput | ProjectSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: ProjectSkillUpdateManyWithWhereWithoutSkillInput | ProjectSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: ProjectSkillScalarWhereInput | ProjectSkillScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProjectsInput = {
    create?: XOR<CategoryCreateWithoutProjectsInput, CategoryUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProjectsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ImageCreateNestedManyWithoutProjectInput = {
    create?: XOR<ImageCreateWithoutProjectInput, ImageUncheckedCreateWithoutProjectInput> | ImageCreateWithoutProjectInput[] | ImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProjectInput | ImageCreateOrConnectWithoutProjectInput[]
    createMany?: ImageCreateManyProjectInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ProjectSkillCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectSkillCreateWithoutProjectInput, ProjectSkillUncheckedCreateWithoutProjectInput> | ProjectSkillCreateWithoutProjectInput[] | ProjectSkillUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectSkillCreateOrConnectWithoutProjectInput | ProjectSkillCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectSkillCreateManyProjectInputEnvelope
    connect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ImageCreateWithoutProjectInput, ImageUncheckedCreateWithoutProjectInput> | ImageCreateWithoutProjectInput[] | ImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProjectInput | ImageCreateOrConnectWithoutProjectInput[]
    createMany?: ImageCreateManyProjectInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ProjectSkillUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectSkillCreateWithoutProjectInput, ProjectSkillUncheckedCreateWithoutProjectInput> | ProjectSkillCreateWithoutProjectInput[] | ProjectSkillUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectSkillCreateOrConnectWithoutProjectInput | ProjectSkillCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectSkillCreateManyProjectInputEnvelope
    connect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CategoryUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<CategoryCreateWithoutProjectsInput, CategoryUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProjectsInput
    upsert?: CategoryUpsertWithoutProjectsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProjectsInput, CategoryUpdateWithoutProjectsInput>, CategoryUncheckedUpdateWithoutProjectsInput>
  }

  export type ImageUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ImageCreateWithoutProjectInput, ImageUncheckedCreateWithoutProjectInput> | ImageCreateWithoutProjectInput[] | ImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProjectInput | ImageCreateOrConnectWithoutProjectInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutProjectInput | ImageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ImageCreateManyProjectInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutProjectInput | ImageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutProjectInput | ImageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ProjectSkillUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectSkillCreateWithoutProjectInput, ProjectSkillUncheckedCreateWithoutProjectInput> | ProjectSkillCreateWithoutProjectInput[] | ProjectSkillUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectSkillCreateOrConnectWithoutProjectInput | ProjectSkillCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectSkillUpsertWithWhereUniqueWithoutProjectInput | ProjectSkillUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectSkillCreateManyProjectInputEnvelope
    set?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    disconnect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    delete?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    connect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    update?: ProjectSkillUpdateWithWhereUniqueWithoutProjectInput | ProjectSkillUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectSkillUpdateManyWithWhereWithoutProjectInput | ProjectSkillUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectSkillScalarWhereInput | ProjectSkillScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ImageCreateWithoutProjectInput, ImageUncheckedCreateWithoutProjectInput> | ImageCreateWithoutProjectInput[] | ImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProjectInput | ImageCreateOrConnectWithoutProjectInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutProjectInput | ImageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ImageCreateManyProjectInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutProjectInput | ImageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutProjectInput | ImageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ProjectSkillUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectSkillCreateWithoutProjectInput, ProjectSkillUncheckedCreateWithoutProjectInput> | ProjectSkillCreateWithoutProjectInput[] | ProjectSkillUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectSkillCreateOrConnectWithoutProjectInput | ProjectSkillCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectSkillUpsertWithWhereUniqueWithoutProjectInput | ProjectSkillUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectSkillCreateManyProjectInputEnvelope
    set?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    disconnect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    delete?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    connect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    update?: ProjectSkillUpdateWithWhereUniqueWithoutProjectInput | ProjectSkillUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectSkillUpdateManyWithWhereWithoutProjectInput | ProjectSkillUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectSkillScalarWhereInput | ProjectSkillScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProjectCreateWithoutImagesInput, ProjectUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutImagesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProjectCreateWithoutImagesInput, ProjectUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutImagesInput
    upsert?: ProjectUpsertWithoutImagesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutImagesInput, ProjectUpdateWithoutImagesInput>, ProjectUncheckedUpdateWithoutImagesInput>
  }

  export type ProjectCreateNestedOneWithoutProject_skillsInput = {
    create?: XOR<ProjectCreateWithoutProject_skillsInput, ProjectUncheckedCreateWithoutProject_skillsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProject_skillsInput
    connect?: ProjectWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutProject_skillsInput = {
    create?: XOR<SkillCreateWithoutProject_skillsInput, SkillUncheckedCreateWithoutProject_skillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutProject_skillsInput
    connect?: SkillWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutProject_skillsNestedInput = {
    create?: XOR<ProjectCreateWithoutProject_skillsInput, ProjectUncheckedCreateWithoutProject_skillsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProject_skillsInput
    upsert?: ProjectUpsertWithoutProject_skillsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProject_skillsInput, ProjectUpdateWithoutProject_skillsInput>, ProjectUncheckedUpdateWithoutProject_skillsInput>
  }

  export type SkillUpdateOneRequiredWithoutProject_skillsNestedInput = {
    create?: XOR<SkillCreateWithoutProject_skillsInput, SkillUncheckedCreateWithoutProject_skillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutProject_skillsInput
    upsert?: SkillUpsertWithoutProject_skillsInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutProject_skillsInput, SkillUpdateWithoutProject_skillsInput>, SkillUncheckedUpdateWithoutProject_skillsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjectCreateWithoutCategoryInput = {
    id?: string
    title: string
    description: string
    long_description?: string | null
    demo_url?: string | null
    repo_url?: string | null
    featured?: boolean
    is_published?: boolean
    order_index?: number
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    images?: ImageCreateNestedManyWithoutProjectInput
    project_skills?: ProjectSkillCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    description: string
    long_description?: string | null
    demo_url?: string | null
    repo_url?: string | null
    featured?: boolean
    is_published?: boolean
    order_index?: number
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutProjectInput
    project_skills?: ProjectSkillUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCategoryInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCategoryInput, ProjectUncheckedCreateWithoutCategoryInput>
  }

  export type ProjectCreateManyCategoryInputEnvelope = {
    data: ProjectCreateManyCategoryInput | ProjectCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCategoryInput, ProjectUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProjectCreateWithoutCategoryInput, ProjectUncheckedCreateWithoutCategoryInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCategoryInput, ProjectUncheckedUpdateWithoutCategoryInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCategoryInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    long_description?: StringNullableFilter<"Project"> | string | null
    demo_url?: StringNullableFilter<"Project"> | string | null
    repo_url?: StringNullableFilter<"Project"> | string | null
    featured?: BoolFilter<"Project"> | boolean
    is_published?: BoolFilter<"Project"> | boolean
    order_index?: IntFilter<"Project"> | number
    category_id?: StringFilter<"Project"> | string
    deleted_at?: DateTimeNullableFilter<"Project"> | Date | string | null
    created_at?: DateTimeFilter<"Project"> | Date | string
    updated_at?: DateTimeFilter<"Project"> | Date | string
  }

  export type ProjectSkillCreateWithoutSkillInput = {
    created_at?: Date | string
    project: ProjectCreateNestedOneWithoutProject_skillsInput
  }

  export type ProjectSkillUncheckedCreateWithoutSkillInput = {
    project_id: string
    created_at?: Date | string
  }

  export type ProjectSkillCreateOrConnectWithoutSkillInput = {
    where: ProjectSkillWhereUniqueInput
    create: XOR<ProjectSkillCreateWithoutSkillInput, ProjectSkillUncheckedCreateWithoutSkillInput>
  }

  export type ProjectSkillCreateManySkillInputEnvelope = {
    data: ProjectSkillCreateManySkillInput | ProjectSkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type ProjectSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: ProjectSkillWhereUniqueInput
    update: XOR<ProjectSkillUpdateWithoutSkillInput, ProjectSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<ProjectSkillCreateWithoutSkillInput, ProjectSkillUncheckedCreateWithoutSkillInput>
  }

  export type ProjectSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: ProjectSkillWhereUniqueInput
    data: XOR<ProjectSkillUpdateWithoutSkillInput, ProjectSkillUncheckedUpdateWithoutSkillInput>
  }

  export type ProjectSkillUpdateManyWithWhereWithoutSkillInput = {
    where: ProjectSkillScalarWhereInput
    data: XOR<ProjectSkillUpdateManyMutationInput, ProjectSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type ProjectSkillScalarWhereInput = {
    AND?: ProjectSkillScalarWhereInput | ProjectSkillScalarWhereInput[]
    OR?: ProjectSkillScalarWhereInput[]
    NOT?: ProjectSkillScalarWhereInput | ProjectSkillScalarWhereInput[]
    project_id?: StringFilter<"ProjectSkill"> | string
    skill_id?: StringFilter<"ProjectSkill"> | string
    created_at?: DateTimeFilter<"ProjectSkill"> | Date | string
  }

  export type CategoryCreateWithoutProjectsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    order_index?: number
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    order_index?: number
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProjectsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProjectsInput, CategoryUncheckedCreateWithoutProjectsInput>
  }

  export type ImageCreateWithoutProjectInput = {
    id?: string
    url: string
    alt_text?: string | null
    is_thumbnail?: boolean
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ImageUncheckedCreateWithoutProjectInput = {
    id?: string
    url: string
    alt_text?: string | null
    is_thumbnail?: boolean
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ImageCreateOrConnectWithoutProjectInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutProjectInput, ImageUncheckedCreateWithoutProjectInput>
  }

  export type ImageCreateManyProjectInputEnvelope = {
    data: ImageCreateManyProjectInput | ImageCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectSkillCreateWithoutProjectInput = {
    created_at?: Date | string
    skill: SkillCreateNestedOneWithoutProject_skillsInput
  }

  export type ProjectSkillUncheckedCreateWithoutProjectInput = {
    skill_id: string
    created_at?: Date | string
  }

  export type ProjectSkillCreateOrConnectWithoutProjectInput = {
    where: ProjectSkillWhereUniqueInput
    create: XOR<ProjectSkillCreateWithoutProjectInput, ProjectSkillUncheckedCreateWithoutProjectInput>
  }

  export type ProjectSkillCreateManyProjectInputEnvelope = {
    data: ProjectSkillCreateManyProjectInput | ProjectSkillCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProjectsInput = {
    update: XOR<CategoryUpdateWithoutProjectsInput, CategoryUncheckedUpdateWithoutProjectsInput>
    create: XOR<CategoryCreateWithoutProjectsInput, CategoryUncheckedCreateWithoutProjectsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProjectsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProjectsInput, CategoryUncheckedUpdateWithoutProjectsInput>
  }

  export type CategoryUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order_index?: IntFieldUpdateOperationsInput | number
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order_index?: IntFieldUpdateOperationsInput | number
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpsertWithWhereUniqueWithoutProjectInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutProjectInput, ImageUncheckedUpdateWithoutProjectInput>
    create: XOR<ImageCreateWithoutProjectInput, ImageUncheckedCreateWithoutProjectInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutProjectInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutProjectInput, ImageUncheckedUpdateWithoutProjectInput>
  }

  export type ImageUpdateManyWithWhereWithoutProjectInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutProjectInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: StringFilter<"Image"> | string
    project_id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    alt_text?: StringNullableFilter<"Image"> | string | null
    is_thumbnail?: BoolFilter<"Image"> | boolean
    order_index?: IntFilter<"Image"> | number
    created_at?: DateTimeFilter<"Image"> | Date | string
    updated_at?: DateTimeFilter<"Image"> | Date | string
  }

  export type ProjectSkillUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectSkillWhereUniqueInput
    update: XOR<ProjectSkillUpdateWithoutProjectInput, ProjectSkillUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectSkillCreateWithoutProjectInput, ProjectSkillUncheckedCreateWithoutProjectInput>
  }

  export type ProjectSkillUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectSkillWhereUniqueInput
    data: XOR<ProjectSkillUpdateWithoutProjectInput, ProjectSkillUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectSkillUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectSkillScalarWhereInput
    data: XOR<ProjectSkillUpdateManyMutationInput, ProjectSkillUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutImagesInput = {
    id?: string
    title: string
    description: string
    long_description?: string | null
    demo_url?: string | null
    repo_url?: string | null
    featured?: boolean
    is_published?: boolean
    order_index?: number
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutProjectsInput
    project_skills?: ProjectSkillCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutImagesInput = {
    id?: string
    title: string
    description: string
    long_description?: string | null
    demo_url?: string | null
    repo_url?: string | null
    featured?: boolean
    is_published?: boolean
    order_index?: number
    category_id: string
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    project_skills?: ProjectSkillUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutImagesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutImagesInput, ProjectUncheckedCreateWithoutImagesInput>
  }

  export type ProjectUpsertWithoutImagesInput = {
    update: XOR<ProjectUpdateWithoutImagesInput, ProjectUncheckedUpdateWithoutImagesInput>
    create: XOR<ProjectCreateWithoutImagesInput, ProjectUncheckedCreateWithoutImagesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutImagesInput, ProjectUncheckedUpdateWithoutImagesInput>
  }

  export type ProjectUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    demo_url?: NullableStringFieldUpdateOperationsInput | string | null
    repo_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    order_index?: IntFieldUpdateOperationsInput | number
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProjectsNestedInput
    project_skills?: ProjectSkillUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    demo_url?: NullableStringFieldUpdateOperationsInput | string | null
    repo_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    order_index?: IntFieldUpdateOperationsInput | number
    category_id?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    project_skills?: ProjectSkillUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutProject_skillsInput = {
    id?: string
    title: string
    description: string
    long_description?: string | null
    demo_url?: string | null
    repo_url?: string | null
    featured?: boolean
    is_published?: boolean
    order_index?: number
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutProjectsInput
    images?: ImageCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProject_skillsInput = {
    id?: string
    title: string
    description: string
    long_description?: string | null
    demo_url?: string | null
    repo_url?: string | null
    featured?: boolean
    is_published?: boolean
    order_index?: number
    category_id: string
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProject_skillsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProject_skillsInput, ProjectUncheckedCreateWithoutProject_skillsInput>
  }

  export type SkillCreateWithoutProject_skillsInput = {
    id?: string
    name: string
    slug: string
    icon_url?: string | null
    category?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SkillUncheckedCreateWithoutProject_skillsInput = {
    id?: string
    name: string
    slug: string
    icon_url?: string | null
    category?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SkillCreateOrConnectWithoutProject_skillsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutProject_skillsInput, SkillUncheckedCreateWithoutProject_skillsInput>
  }

  export type ProjectUpsertWithoutProject_skillsInput = {
    update: XOR<ProjectUpdateWithoutProject_skillsInput, ProjectUncheckedUpdateWithoutProject_skillsInput>
    create: XOR<ProjectCreateWithoutProject_skillsInput, ProjectUncheckedCreateWithoutProject_skillsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProject_skillsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProject_skillsInput, ProjectUncheckedUpdateWithoutProject_skillsInput>
  }

  export type ProjectUpdateWithoutProject_skillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    demo_url?: NullableStringFieldUpdateOperationsInput | string | null
    repo_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    order_index?: IntFieldUpdateOperationsInput | number
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProjectsNestedInput
    images?: ImageUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProject_skillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    demo_url?: NullableStringFieldUpdateOperationsInput | string | null
    repo_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    order_index?: IntFieldUpdateOperationsInput | number
    category_id?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type SkillUpsertWithoutProject_skillsInput = {
    update: XOR<SkillUpdateWithoutProject_skillsInput, SkillUncheckedUpdateWithoutProject_skillsInput>
    create: XOR<SkillCreateWithoutProject_skillsInput, SkillUncheckedCreateWithoutProject_skillsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutProject_skillsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutProject_skillsInput, SkillUncheckedUpdateWithoutProject_skillsInput>
  }

  export type SkillUpdateWithoutProject_skillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateWithoutProject_skillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyCategoryInput = {
    id?: string
    title: string
    description: string
    long_description?: string | null
    demo_url?: string | null
    repo_url?: string | null
    featured?: boolean
    is_published?: boolean
    order_index?: number
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    demo_url?: NullableStringFieldUpdateOperationsInput | string | null
    repo_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    order_index?: IntFieldUpdateOperationsInput | number
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutProjectNestedInput
    project_skills?: ProjectSkillUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    demo_url?: NullableStringFieldUpdateOperationsInput | string | null
    repo_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    order_index?: IntFieldUpdateOperationsInput | number
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutProjectNestedInput
    project_skills?: ProjectSkillUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    demo_url?: NullableStringFieldUpdateOperationsInput | string | null
    repo_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    order_index?: IntFieldUpdateOperationsInput | number
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSkillCreateManySkillInput = {
    project_id: string
    created_at?: Date | string
  }

  export type ProjectSkillUpdateWithoutSkillInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProject_skillsNestedInput
  }

  export type ProjectSkillUncheckedUpdateWithoutSkillInput = {
    project_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSkillUncheckedUpdateManyWithoutSkillInput = {
    project_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyProjectInput = {
    id?: string
    url: string
    alt_text?: string | null
    is_thumbnail?: boolean
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectSkillCreateManyProjectInput = {
    skill_id: string
    created_at?: Date | string
  }

  export type ImageUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_thumbnail?: BoolFieldUpdateOperationsInput | boolean
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_thumbnail?: BoolFieldUpdateOperationsInput | boolean
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_thumbnail?: BoolFieldUpdateOperationsInput | boolean
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSkillUpdateWithoutProjectInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: SkillUpdateOneRequiredWithoutProject_skillsNestedInput
  }

  export type ProjectSkillUncheckedUpdateWithoutProjectInput = {
    skill_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSkillUncheckedUpdateManyWithoutProjectInput = {
    skill_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SkillCountOutputTypeDefaultArgs instead
     */
    export type SkillCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SkillCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SkillDefaultArgs instead
     */
    export type SkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SkillDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImageDefaultArgs instead
     */
    export type ImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectSkillDefaultArgs instead
     */
    export type ProjectSkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectSkillDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PersonalContentDefaultArgs instead
     */
    export type PersonalContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonalContentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobRoleDefaultArgs instead
     */
    export type JobRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobRoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AboutContentDefaultArgs instead
     */
    export type AboutContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AboutContentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AboutParagraphDefaultArgs instead
     */
    export type AboutParagraphArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AboutParagraphDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StatDefaultArgs instead
     */
    export type StatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StatDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EducationEntryDefaultArgs instead
     */
    export type EducationEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EducationEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExperienceEntryDefaultArgs instead
     */
    export type ExperienceEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExperienceEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactContentDefaultArgs instead
     */
    export type ContactContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactContentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactInfoItemDefaultArgs instead
     */
    export type ContactInfoItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactInfoItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SocialLinkDefaultArgs instead
     */
    export type SocialLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SocialLinkDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}