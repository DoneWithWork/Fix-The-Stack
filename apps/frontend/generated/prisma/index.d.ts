
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
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model DataStream
 * 
 */
export type DataStream = $Result.DefaultSelection<Prisma.$DataStreamPayload>
/**
 * Model DataPoint
 * 
 */
export type DataPoint = $Result.DefaultSelection<Prisma.$DataPointPayload>
/**
 * Model Rule
 * 
 */
export type Rule = $Result.DefaultSelection<Prisma.$RulePayload>
/**
 * Model Action
 * 
 */
export type Action = $Result.DefaultSelection<Prisma.$ActionPayload>
/**
 * Model EmailAction
 * 
 */
export type EmailAction = $Result.DefaultSelection<Prisma.$EmailActionPayload>
/**
 * Model TelegramAction
 * 
 */
export type TelegramAction = $Result.DefaultSelection<Prisma.$TelegramActionPayload>
/**
 * Model WebhookAction
 * 
 */
export type WebhookAction = $Result.DefaultSelection<Prisma.$WebhookActionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ApiKeyType: {
  READ: 'READ',
  READ_WRITE: 'READ_WRITE'
};

export type ApiKeyType = (typeof ApiKeyType)[keyof typeof ApiKeyType]


export const DeviceType: {
  ESP32: 'ESP32',
  ESP8266: 'ESP8266',
  NODEMCU: 'NODEMCU',
  HIBISCUS_SENSE: 'HIBISCUS_SENSE'
};

export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType]


export const ActionType: {
  EMAIL: 'EMAIL',
  TELEGRAM: 'TELEGRAM',
  WEBHOOK: 'WEBHOOK'
};

export type ActionType = (typeof ActionType)[keyof typeof ActionType]


export const LogicalOperator: {
  AND: 'AND',
  OR: 'OR'
};

export type LogicalOperator = (typeof LogicalOperator)[keyof typeof LogicalOperator]

}

export type ApiKeyType = $Enums.ApiKeyType

export const ApiKeyType: typeof $Enums.ApiKeyType

export type DeviceType = $Enums.DeviceType

export const DeviceType: typeof $Enums.DeviceType

export type ActionType = $Enums.ActionType

export const ActionType: typeof $Enums.ActionType

export type LogicalOperator = $Enums.LogicalOperator

export const LogicalOperator: typeof $Enums.LogicalOperator

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataStream`: Exposes CRUD operations for the **DataStream** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataStreams
    * const dataStreams = await prisma.dataStream.findMany()
    * ```
    */
  get dataStream(): Prisma.DataStreamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataPoint`: Exposes CRUD operations for the **DataPoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataPoints
    * const dataPoints = await prisma.dataPoint.findMany()
    * ```
    */
  get dataPoint(): Prisma.DataPointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rule`: Exposes CRUD operations for the **Rule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rules
    * const rules = await prisma.rule.findMany()
    * ```
    */
  get rule(): Prisma.RuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.action`: Exposes CRUD operations for the **Action** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actions
    * const actions = await prisma.action.findMany()
    * ```
    */
  get action(): Prisma.ActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailAction`: Exposes CRUD operations for the **EmailAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailActions
    * const emailActions = await prisma.emailAction.findMany()
    * ```
    */
  get emailAction(): Prisma.EmailActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telegramAction`: Exposes CRUD operations for the **TelegramAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TelegramActions
    * const telegramActions = await prisma.telegramAction.findMany()
    * ```
    */
  get telegramAction(): Prisma.TelegramActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhookAction`: Exposes CRUD operations for the **WebhookAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookActions
    * const webhookActions = await prisma.webhookAction.findMany()
    * ```
    */
  get webhookAction(): Prisma.WebhookActionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    ApiKey: 'ApiKey',
    Project: 'Project',
    Device: 'Device',
    DataStream: 'DataStream',
    DataPoint: 'DataPoint',
    Rule: 'Rule',
    Action: 'Action',
    EmailAction: 'EmailAction',
    TelegramAction: 'TelegramAction',
    WebhookAction: 'WebhookAction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "apiKey" | "project" | "device" | "dataStream" | "dataPoint" | "rule" | "action" | "emailAction" | "telegramAction" | "webhookAction"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
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
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
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
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      DataStream: {
        payload: Prisma.$DataStreamPayload<ExtArgs>
        fields: Prisma.DataStreamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataStreamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataStreamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataStreamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataStreamPayload>
          }
          findFirst: {
            args: Prisma.DataStreamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataStreamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataStreamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataStreamPayload>
          }
          findMany: {
            args: Prisma.DataStreamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataStreamPayload>[]
          }
          create: {
            args: Prisma.DataStreamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataStreamPayload>
          }
          createMany: {
            args: Prisma.DataStreamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DataStreamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataStreamPayload>[]
          }
          delete: {
            args: Prisma.DataStreamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataStreamPayload>
          }
          update: {
            args: Prisma.DataStreamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataStreamPayload>
          }
          deleteMany: {
            args: Prisma.DataStreamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataStreamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DataStreamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataStreamPayload>[]
          }
          upsert: {
            args: Prisma.DataStreamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataStreamPayload>
          }
          aggregate: {
            args: Prisma.DataStreamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataStream>
          }
          groupBy: {
            args: Prisma.DataStreamGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataStreamGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataStreamCountArgs<ExtArgs>
            result: $Utils.Optional<DataStreamCountAggregateOutputType> | number
          }
        }
      }
      DataPoint: {
        payload: Prisma.$DataPointPayload<ExtArgs>
        fields: Prisma.DataPointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataPointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataPointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPointPayload>
          }
          findFirst: {
            args: Prisma.DataPointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataPointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPointPayload>
          }
          findMany: {
            args: Prisma.DataPointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPointPayload>[]
          }
          create: {
            args: Prisma.DataPointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPointPayload>
          }
          createMany: {
            args: Prisma.DataPointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DataPointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPointPayload>[]
          }
          delete: {
            args: Prisma.DataPointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPointPayload>
          }
          update: {
            args: Prisma.DataPointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPointPayload>
          }
          deleteMany: {
            args: Prisma.DataPointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataPointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DataPointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPointPayload>[]
          }
          upsert: {
            args: Prisma.DataPointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPointPayload>
          }
          aggregate: {
            args: Prisma.DataPointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataPoint>
          }
          groupBy: {
            args: Prisma.DataPointGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataPointGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataPointCountArgs<ExtArgs>
            result: $Utils.Optional<DataPointCountAggregateOutputType> | number
          }
        }
      }
      Rule: {
        payload: Prisma.$RulePayload<ExtArgs>
        fields: Prisma.RuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          findFirst: {
            args: Prisma.RuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          findMany: {
            args: Prisma.RuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          create: {
            args: Prisma.RuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          createMany: {
            args: Prisma.RuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          delete: {
            args: Prisma.RuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          update: {
            args: Prisma.RuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          deleteMany: {
            args: Prisma.RuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          upsert: {
            args: Prisma.RuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          aggregate: {
            args: Prisma.RuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRule>
          }
          groupBy: {
            args: Prisma.RuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RuleCountArgs<ExtArgs>
            result: $Utils.Optional<RuleCountAggregateOutputType> | number
          }
        }
      }
      Action: {
        payload: Prisma.$ActionPayload<ExtArgs>
        fields: Prisma.ActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findFirst: {
            args: Prisma.ActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findMany: {
            args: Prisma.ActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          create: {
            args: Prisma.ActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          createMany: {
            args: Prisma.ActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          delete: {
            args: Prisma.ActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          update: {
            args: Prisma.ActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          deleteMany: {
            args: Prisma.ActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          upsert: {
            args: Prisma.ActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          aggregate: {
            args: Prisma.ActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAction>
          }
          groupBy: {
            args: Prisma.ActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionCountArgs<ExtArgs>
            result: $Utils.Optional<ActionCountAggregateOutputType> | number
          }
        }
      }
      EmailAction: {
        payload: Prisma.$EmailActionPayload<ExtArgs>
        fields: Prisma.EmailActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActionPayload>
          }
          findFirst: {
            args: Prisma.EmailActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActionPayload>
          }
          findMany: {
            args: Prisma.EmailActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActionPayload>[]
          }
          create: {
            args: Prisma.EmailActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActionPayload>
          }
          createMany: {
            args: Prisma.EmailActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActionPayload>[]
          }
          delete: {
            args: Prisma.EmailActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActionPayload>
          }
          update: {
            args: Prisma.EmailActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActionPayload>
          }
          deleteMany: {
            args: Prisma.EmailActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActionPayload>[]
          }
          upsert: {
            args: Prisma.EmailActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActionPayload>
          }
          aggregate: {
            args: Prisma.EmailActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailAction>
          }
          groupBy: {
            args: Prisma.EmailActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailActionCountArgs<ExtArgs>
            result: $Utils.Optional<EmailActionCountAggregateOutputType> | number
          }
        }
      }
      TelegramAction: {
        payload: Prisma.$TelegramActionPayload<ExtArgs>
        fields: Prisma.TelegramActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelegramActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelegramActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramActionPayload>
          }
          findFirst: {
            args: Prisma.TelegramActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelegramActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramActionPayload>
          }
          findMany: {
            args: Prisma.TelegramActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramActionPayload>[]
          }
          create: {
            args: Prisma.TelegramActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramActionPayload>
          }
          createMany: {
            args: Prisma.TelegramActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TelegramActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramActionPayload>[]
          }
          delete: {
            args: Prisma.TelegramActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramActionPayload>
          }
          update: {
            args: Prisma.TelegramActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramActionPayload>
          }
          deleteMany: {
            args: Prisma.TelegramActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelegramActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TelegramActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramActionPayload>[]
          }
          upsert: {
            args: Prisma.TelegramActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramActionPayload>
          }
          aggregate: {
            args: Prisma.TelegramActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelegramAction>
          }
          groupBy: {
            args: Prisma.TelegramActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelegramActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelegramActionCountArgs<ExtArgs>
            result: $Utils.Optional<TelegramActionCountAggregateOutputType> | number
          }
        }
      }
      WebhookAction: {
        payload: Prisma.$WebhookActionPayload<ExtArgs>
        fields: Prisma.WebhookActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookActionPayload>
          }
          findFirst: {
            args: Prisma.WebhookActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookActionPayload>
          }
          findMany: {
            args: Prisma.WebhookActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookActionPayload>[]
          }
          create: {
            args: Prisma.WebhookActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookActionPayload>
          }
          createMany: {
            args: Prisma.WebhookActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookActionPayload>[]
          }
          delete: {
            args: Prisma.WebhookActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookActionPayload>
          }
          update: {
            args: Prisma.WebhookActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookActionPayload>
          }
          deleteMany: {
            args: Prisma.WebhookActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebhookActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookActionPayload>[]
          }
          upsert: {
            args: Prisma.WebhookActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookActionPayload>
          }
          aggregate: {
            args: Prisma.WebhookActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookAction>
          }
          groupBy: {
            args: Prisma.WebhookActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookActionCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookActionCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    apiKey?: ApiKeyOmit
    project?: ProjectOmit
    device?: DeviceOmit
    dataStream?: DataStreamOmit
    dataPoint?: DataPointOmit
    rule?: RuleOmit
    action?: ActionOmit
    emailAction?: EmailActionOmit
    telegramAction?: TelegramActionOmit
    webhookAction?: WebhookActionOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    api_keys: number
    projects: number
    rules: number
    actions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_keys?: boolean | UserCountOutputTypeCountApi_keysArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    rules?: boolean | UserCountOutputTypeCountRulesArgs
    actions?: boolean | UserCountOutputTypeCountActionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApi_keysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    devices: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | ProjectCountOutputTypeCountDevicesArgs
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
  export type ProjectCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    dataStreams: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataStreams?: boolean | DeviceCountOutputTypeCountDataStreamsArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountDataStreamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataStreamWhereInput
  }


  /**
   * Count Type DataStreamCountOutputType
   */

  export type DataStreamCountOutputType = {
    dataPoints: number
  }

  export type DataStreamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataPoints?: boolean | DataStreamCountOutputTypeCountDataPointsArgs
  }

  // Custom InputTypes
  /**
   * DataStreamCountOutputType without action
   */
  export type DataStreamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataStreamCountOutputType
     */
    select?: DataStreamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DataStreamCountOutputType without action
   */
  export type DataStreamCountOutputTypeCountDataPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataPointWhereInput
  }


  /**
   * Count Type RuleCountOutputType
   */

  export type RuleCountOutputType = {
    actions: number
  }

  export type RuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | RuleCountOutputTypeCountActionsArgs
  }

  // Custom InputTypes
  /**
   * RuleCountOutputType without action
   */
  export type RuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleCountOutputType
     */
    select?: RuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RuleCountOutputType without action
   */
  export type RuleCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
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
    username: string | null
    email: string | null
    profile: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    profile: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    profile: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    profile?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    profile?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    profile?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
    username: string
    email: string
    profile: string
    role: string
    createdAt: Date
    updatedAt: Date
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
    username?: boolean
    email?: boolean
    profile?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    api_keys?: boolean | User$api_keysArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    rules?: boolean | User$rulesArgs<ExtArgs>
    actions?: boolean | User$actionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    profile?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    profile?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    profile?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "profile" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_keys?: boolean | User$api_keysArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    rules?: boolean | User$rulesArgs<ExtArgs>
    actions?: boolean | User$actionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      api_keys: Prisma.$ApiKeyPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      rules: Prisma.$RulePayload<ExtArgs>[]
      actions: Prisma.$ActionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      profile: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    api_keys<T extends User$api_keysArgs<ExtArgs> = {}>(args?: Subset<T, User$api_keysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rules<T extends User$rulesArgs<ExtArgs> = {}>(args?: Subset<T, User$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    actions<T extends User$actionsArgs<ExtArgs> = {}>(args?: Subset<T, User$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly profile: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.api_keys
   */
  export type User$api_keysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
   * User.rules
   */
  export type User$rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    where?: RuleWhereInput
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    cursor?: RuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * User.actions
   */
  export type User$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    key: string | null
    initial: string | null
    userId: string | null
    type: $Enums.ApiKeyType | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    key: string | null
    initial: string | null
    userId: string | null
    type: $Enums.ApiKeyType | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    key: number
    initial: number
    userId: number
    type: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    key?: true
    initial?: true
    userId?: true
    type?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    key?: true
    initial?: true
    userId?: true
    type?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    key?: true
    initial?: true
    userId?: true
    type?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    key: string
    initial: string
    userId: string
    type: $Enums.ApiKeyType
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    initial?: boolean
    userId?: boolean
    type?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    initial?: boolean
    userId?: boolean
    type?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    initial?: boolean
    userId?: boolean
    type?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    key?: boolean
    initial?: boolean
    userId?: boolean
    type?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "initial" | "userId" | "type" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["apiKey"]>
  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      initial: string
      userId: string
      type: $Enums.ApiKeyType
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
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
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly key: FieldRef<"ApiKey", 'String'>
    readonly initial: FieldRef<"ApiKey", 'String'>
    readonly userId: FieldRef<"ApiKey", 'String'>
    readonly type: FieldRef<"ApiKey", 'ApiKeyType'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
    readonly updatedAt: FieldRef<"ApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
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
    userId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    devices?: boolean | Project$devicesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    devices?: boolean | Project$devicesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      devices: Prisma.$DevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    devices<T extends Project$devicesArgs<ExtArgs> = {}>(args?: Subset<T, Project$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly userId: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.devices
   */
  export type Project$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    deviceType: $Enums.DeviceType | null
    deviceAuthToken: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    deviceType: $Enums.DeviceType | null
    deviceAuthToken: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    deviceType: number
    deviceAuthToken: number
    projectId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    deviceType?: true
    deviceAuthToken?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    deviceType?: true
    deviceAuthToken?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    deviceType?: true
    deviceAuthToken?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    name: string
    description: string
    deviceType: $Enums.DeviceType
    deviceAuthToken: string
    projectId: string
    createdAt: Date
    updatedAt: Date
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    deviceType?: boolean
    deviceAuthToken?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
    dataStreams?: boolean | Device$dataStreamsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    deviceType?: boolean
    deviceAuthToken?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    deviceType?: boolean
    deviceAuthToken?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    deviceType?: boolean
    deviceAuthToken?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "deviceType" | "deviceAuthToken" | "projectId" | "createdAt" | "updatedAt", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
    dataStreams?: boolean | Device$dataStreamsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      Project: Prisma.$ProjectPayload<ExtArgs>
      dataStreams: Prisma.$DataStreamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      deviceType: $Enums.DeviceType
      deviceAuthToken: string
      projectId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dataStreams<T extends Device$dataStreamsArgs<ExtArgs> = {}>(args?: Subset<T, Device$dataStreamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataStreamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly name: FieldRef<"Device", 'String'>
    readonly description: FieldRef<"Device", 'String'>
    readonly deviceType: FieldRef<"Device", 'DeviceType'>
    readonly deviceAuthToken: FieldRef<"Device", 'String'>
    readonly projectId: FieldRef<"Device", 'String'>
    readonly createdAt: FieldRef<"Device", 'DateTime'>
    readonly updatedAt: FieldRef<"Device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device.dataStreams
   */
  export type Device$dataStreamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataStream
     */
    select?: DataStreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataStream
     */
    omit?: DataStreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataStreamInclude<ExtArgs> | null
    where?: DataStreamWhereInput
    orderBy?: DataStreamOrderByWithRelationInput | DataStreamOrderByWithRelationInput[]
    cursor?: DataStreamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataStreamScalarFieldEnum | DataStreamScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model DataStream
   */

  export type AggregateDataStream = {
    _count: DataStreamCountAggregateOutputType | null
    _min: DataStreamMinAggregateOutputType | null
    _max: DataStreamMaxAggregateOutputType | null
  }

  export type DataStreamMinAggregateOutputType = {
    id: string | null
    deviceId: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataStreamMaxAggregateOutputType = {
    id: string | null
    deviceId: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataStreamCountAggregateOutputType = {
    id: number
    deviceId: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DataStreamMinAggregateInputType = {
    id?: true
    deviceId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataStreamMaxAggregateInputType = {
    id?: true
    deviceId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataStreamCountAggregateInputType = {
    id?: true
    deviceId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DataStreamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataStream to aggregate.
     */
    where?: DataStreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataStreams to fetch.
     */
    orderBy?: DataStreamOrderByWithRelationInput | DataStreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataStreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataStreams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataStreams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataStreams
    **/
    _count?: true | DataStreamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataStreamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataStreamMaxAggregateInputType
  }

  export type GetDataStreamAggregateType<T extends DataStreamAggregateArgs> = {
        [P in keyof T & keyof AggregateDataStream]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataStream[P]>
      : GetScalarType<T[P], AggregateDataStream[P]>
  }




  export type DataStreamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataStreamWhereInput
    orderBy?: DataStreamOrderByWithAggregationInput | DataStreamOrderByWithAggregationInput[]
    by: DataStreamScalarFieldEnum[] | DataStreamScalarFieldEnum
    having?: DataStreamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataStreamCountAggregateInputType | true
    _min?: DataStreamMinAggregateInputType
    _max?: DataStreamMaxAggregateInputType
  }

  export type DataStreamGroupByOutputType = {
    id: string
    deviceId: string
    title: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: DataStreamCountAggregateOutputType | null
    _min: DataStreamMinAggregateOutputType | null
    _max: DataStreamMaxAggregateOutputType | null
  }

  type GetDataStreamGroupByPayload<T extends DataStreamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataStreamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataStreamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataStreamGroupByOutputType[P]>
            : GetScalarType<T[P], DataStreamGroupByOutputType[P]>
        }
      >
    >


  export type DataStreamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Device?: boolean | DeviceDefaultArgs<ExtArgs>
    dataPoints?: boolean | DataStream$dataPointsArgs<ExtArgs>
    _count?: boolean | DataStreamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataStream"]>

  export type DataStreamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataStream"]>

  export type DataStreamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataStream"]>

  export type DataStreamSelectScalar = {
    id?: boolean
    deviceId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DataStreamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceId" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["dataStream"]>
  export type DataStreamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Device?: boolean | DeviceDefaultArgs<ExtArgs>
    dataPoints?: boolean | DataStream$dataPointsArgs<ExtArgs>
    _count?: boolean | DataStreamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DataStreamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type DataStreamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $DataStreamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataStream"
    objects: {
      Device: Prisma.$DevicePayload<ExtArgs>
      dataPoints: Prisma.$DataPointPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deviceId: string
      title: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dataStream"]>
    composites: {}
  }

  type DataStreamGetPayload<S extends boolean | null | undefined | DataStreamDefaultArgs> = $Result.GetResult<Prisma.$DataStreamPayload, S>

  type DataStreamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataStreamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataStreamCountAggregateInputType | true
    }

  export interface DataStreamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataStream'], meta: { name: 'DataStream' } }
    /**
     * Find zero or one DataStream that matches the filter.
     * @param {DataStreamFindUniqueArgs} args - Arguments to find a DataStream
     * @example
     * // Get one DataStream
     * const dataStream = await prisma.dataStream.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataStreamFindUniqueArgs>(args: SelectSubset<T, DataStreamFindUniqueArgs<ExtArgs>>): Prisma__DataStreamClient<$Result.GetResult<Prisma.$DataStreamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataStream that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataStreamFindUniqueOrThrowArgs} args - Arguments to find a DataStream
     * @example
     * // Get one DataStream
     * const dataStream = await prisma.dataStream.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataStreamFindUniqueOrThrowArgs>(args: SelectSubset<T, DataStreamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataStreamClient<$Result.GetResult<Prisma.$DataStreamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataStream that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataStreamFindFirstArgs} args - Arguments to find a DataStream
     * @example
     * // Get one DataStream
     * const dataStream = await prisma.dataStream.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataStreamFindFirstArgs>(args?: SelectSubset<T, DataStreamFindFirstArgs<ExtArgs>>): Prisma__DataStreamClient<$Result.GetResult<Prisma.$DataStreamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataStream that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataStreamFindFirstOrThrowArgs} args - Arguments to find a DataStream
     * @example
     * // Get one DataStream
     * const dataStream = await prisma.dataStream.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataStreamFindFirstOrThrowArgs>(args?: SelectSubset<T, DataStreamFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataStreamClient<$Result.GetResult<Prisma.$DataStreamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataStreams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataStreamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataStreams
     * const dataStreams = await prisma.dataStream.findMany()
     * 
     * // Get first 10 DataStreams
     * const dataStreams = await prisma.dataStream.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataStreamWithIdOnly = await prisma.dataStream.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataStreamFindManyArgs>(args?: SelectSubset<T, DataStreamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataStreamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataStream.
     * @param {DataStreamCreateArgs} args - Arguments to create a DataStream.
     * @example
     * // Create one DataStream
     * const DataStream = await prisma.dataStream.create({
     *   data: {
     *     // ... data to create a DataStream
     *   }
     * })
     * 
     */
    create<T extends DataStreamCreateArgs>(args: SelectSubset<T, DataStreamCreateArgs<ExtArgs>>): Prisma__DataStreamClient<$Result.GetResult<Prisma.$DataStreamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataStreams.
     * @param {DataStreamCreateManyArgs} args - Arguments to create many DataStreams.
     * @example
     * // Create many DataStreams
     * const dataStream = await prisma.dataStream.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataStreamCreateManyArgs>(args?: SelectSubset<T, DataStreamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataStreams and returns the data saved in the database.
     * @param {DataStreamCreateManyAndReturnArgs} args - Arguments to create many DataStreams.
     * @example
     * // Create many DataStreams
     * const dataStream = await prisma.dataStream.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataStreams and only return the `id`
     * const dataStreamWithIdOnly = await prisma.dataStream.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DataStreamCreateManyAndReturnArgs>(args?: SelectSubset<T, DataStreamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataStreamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DataStream.
     * @param {DataStreamDeleteArgs} args - Arguments to delete one DataStream.
     * @example
     * // Delete one DataStream
     * const DataStream = await prisma.dataStream.delete({
     *   where: {
     *     // ... filter to delete one DataStream
     *   }
     * })
     * 
     */
    delete<T extends DataStreamDeleteArgs>(args: SelectSubset<T, DataStreamDeleteArgs<ExtArgs>>): Prisma__DataStreamClient<$Result.GetResult<Prisma.$DataStreamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataStream.
     * @param {DataStreamUpdateArgs} args - Arguments to update one DataStream.
     * @example
     * // Update one DataStream
     * const dataStream = await prisma.dataStream.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataStreamUpdateArgs>(args: SelectSubset<T, DataStreamUpdateArgs<ExtArgs>>): Prisma__DataStreamClient<$Result.GetResult<Prisma.$DataStreamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataStreams.
     * @param {DataStreamDeleteManyArgs} args - Arguments to filter DataStreams to delete.
     * @example
     * // Delete a few DataStreams
     * const { count } = await prisma.dataStream.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataStreamDeleteManyArgs>(args?: SelectSubset<T, DataStreamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataStreams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataStreamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataStreams
     * const dataStream = await prisma.dataStream.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataStreamUpdateManyArgs>(args: SelectSubset<T, DataStreamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataStreams and returns the data updated in the database.
     * @param {DataStreamUpdateManyAndReturnArgs} args - Arguments to update many DataStreams.
     * @example
     * // Update many DataStreams
     * const dataStream = await prisma.dataStream.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DataStreams and only return the `id`
     * const dataStreamWithIdOnly = await prisma.dataStream.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DataStreamUpdateManyAndReturnArgs>(args: SelectSubset<T, DataStreamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataStreamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DataStream.
     * @param {DataStreamUpsertArgs} args - Arguments to update or create a DataStream.
     * @example
     * // Update or create a DataStream
     * const dataStream = await prisma.dataStream.upsert({
     *   create: {
     *     // ... data to create a DataStream
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataStream we want to update
     *   }
     * })
     */
    upsert<T extends DataStreamUpsertArgs>(args: SelectSubset<T, DataStreamUpsertArgs<ExtArgs>>): Prisma__DataStreamClient<$Result.GetResult<Prisma.$DataStreamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataStreams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataStreamCountArgs} args - Arguments to filter DataStreams to count.
     * @example
     * // Count the number of DataStreams
     * const count = await prisma.dataStream.count({
     *   where: {
     *     // ... the filter for the DataStreams we want to count
     *   }
     * })
    **/
    count<T extends DataStreamCountArgs>(
      args?: Subset<T, DataStreamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataStreamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataStream.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataStreamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataStreamAggregateArgs>(args: Subset<T, DataStreamAggregateArgs>): Prisma.PrismaPromise<GetDataStreamAggregateType<T>>

    /**
     * Group by DataStream.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataStreamGroupByArgs} args - Group by arguments.
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
      T extends DataStreamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataStreamGroupByArgs['orderBy'] }
        : { orderBy?: DataStreamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataStreamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataStreamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataStream model
   */
  readonly fields: DataStreamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataStream.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataStreamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dataPoints<T extends DataStream$dataPointsArgs<ExtArgs> = {}>(args?: Subset<T, DataStream$dataPointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DataStream model
   */
  interface DataStreamFieldRefs {
    readonly id: FieldRef<"DataStream", 'String'>
    readonly deviceId: FieldRef<"DataStream", 'String'>
    readonly title: FieldRef<"DataStream", 'String'>
    readonly description: FieldRef<"DataStream", 'String'>
    readonly createdAt: FieldRef<"DataStream", 'DateTime'>
    readonly updatedAt: FieldRef<"DataStream", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DataStream findUnique
   */
  export type DataStreamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataStream
     */
    select?: DataStreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataStream
     */
    omit?: DataStreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataStreamInclude<ExtArgs> | null
    /**
     * Filter, which DataStream to fetch.
     */
    where: DataStreamWhereUniqueInput
  }

  /**
   * DataStream findUniqueOrThrow
   */
  export type DataStreamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataStream
     */
    select?: DataStreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataStream
     */
    omit?: DataStreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataStreamInclude<ExtArgs> | null
    /**
     * Filter, which DataStream to fetch.
     */
    where: DataStreamWhereUniqueInput
  }

  /**
   * DataStream findFirst
   */
  export type DataStreamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataStream
     */
    select?: DataStreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataStream
     */
    omit?: DataStreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataStreamInclude<ExtArgs> | null
    /**
     * Filter, which DataStream to fetch.
     */
    where?: DataStreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataStreams to fetch.
     */
    orderBy?: DataStreamOrderByWithRelationInput | DataStreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataStreams.
     */
    cursor?: DataStreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataStreams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataStreams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataStreams.
     */
    distinct?: DataStreamScalarFieldEnum | DataStreamScalarFieldEnum[]
  }

  /**
   * DataStream findFirstOrThrow
   */
  export type DataStreamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataStream
     */
    select?: DataStreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataStream
     */
    omit?: DataStreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataStreamInclude<ExtArgs> | null
    /**
     * Filter, which DataStream to fetch.
     */
    where?: DataStreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataStreams to fetch.
     */
    orderBy?: DataStreamOrderByWithRelationInput | DataStreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataStreams.
     */
    cursor?: DataStreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataStreams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataStreams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataStreams.
     */
    distinct?: DataStreamScalarFieldEnum | DataStreamScalarFieldEnum[]
  }

  /**
   * DataStream findMany
   */
  export type DataStreamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataStream
     */
    select?: DataStreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataStream
     */
    omit?: DataStreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataStreamInclude<ExtArgs> | null
    /**
     * Filter, which DataStreams to fetch.
     */
    where?: DataStreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataStreams to fetch.
     */
    orderBy?: DataStreamOrderByWithRelationInput | DataStreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataStreams.
     */
    cursor?: DataStreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataStreams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataStreams.
     */
    skip?: number
    distinct?: DataStreamScalarFieldEnum | DataStreamScalarFieldEnum[]
  }

  /**
   * DataStream create
   */
  export type DataStreamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataStream
     */
    select?: DataStreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataStream
     */
    omit?: DataStreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataStreamInclude<ExtArgs> | null
    /**
     * The data needed to create a DataStream.
     */
    data: XOR<DataStreamCreateInput, DataStreamUncheckedCreateInput>
  }

  /**
   * DataStream createMany
   */
  export type DataStreamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataStreams.
     */
    data: DataStreamCreateManyInput | DataStreamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataStream createManyAndReturn
   */
  export type DataStreamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataStream
     */
    select?: DataStreamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataStream
     */
    omit?: DataStreamOmit<ExtArgs> | null
    /**
     * The data used to create many DataStreams.
     */
    data: DataStreamCreateManyInput | DataStreamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataStreamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DataStream update
   */
  export type DataStreamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataStream
     */
    select?: DataStreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataStream
     */
    omit?: DataStreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataStreamInclude<ExtArgs> | null
    /**
     * The data needed to update a DataStream.
     */
    data: XOR<DataStreamUpdateInput, DataStreamUncheckedUpdateInput>
    /**
     * Choose, which DataStream to update.
     */
    where: DataStreamWhereUniqueInput
  }

  /**
   * DataStream updateMany
   */
  export type DataStreamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataStreams.
     */
    data: XOR<DataStreamUpdateManyMutationInput, DataStreamUncheckedUpdateManyInput>
    /**
     * Filter which DataStreams to update
     */
    where?: DataStreamWhereInput
    /**
     * Limit how many DataStreams to update.
     */
    limit?: number
  }

  /**
   * DataStream updateManyAndReturn
   */
  export type DataStreamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataStream
     */
    select?: DataStreamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataStream
     */
    omit?: DataStreamOmit<ExtArgs> | null
    /**
     * The data used to update DataStreams.
     */
    data: XOR<DataStreamUpdateManyMutationInput, DataStreamUncheckedUpdateManyInput>
    /**
     * Filter which DataStreams to update
     */
    where?: DataStreamWhereInput
    /**
     * Limit how many DataStreams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataStreamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DataStream upsert
   */
  export type DataStreamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataStream
     */
    select?: DataStreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataStream
     */
    omit?: DataStreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataStreamInclude<ExtArgs> | null
    /**
     * The filter to search for the DataStream to update in case it exists.
     */
    where: DataStreamWhereUniqueInput
    /**
     * In case the DataStream found by the `where` argument doesn't exist, create a new DataStream with this data.
     */
    create: XOR<DataStreamCreateInput, DataStreamUncheckedCreateInput>
    /**
     * In case the DataStream was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataStreamUpdateInput, DataStreamUncheckedUpdateInput>
  }

  /**
   * DataStream delete
   */
  export type DataStreamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataStream
     */
    select?: DataStreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataStream
     */
    omit?: DataStreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataStreamInclude<ExtArgs> | null
    /**
     * Filter which DataStream to delete.
     */
    where: DataStreamWhereUniqueInput
  }

  /**
   * DataStream deleteMany
   */
  export type DataStreamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataStreams to delete
     */
    where?: DataStreamWhereInput
    /**
     * Limit how many DataStreams to delete.
     */
    limit?: number
  }

  /**
   * DataStream.dataPoints
   */
  export type DataStream$dataPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPoint
     */
    select?: DataPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPoint
     */
    omit?: DataPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPointInclude<ExtArgs> | null
    where?: DataPointWhereInput
    orderBy?: DataPointOrderByWithRelationInput | DataPointOrderByWithRelationInput[]
    cursor?: DataPointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataPointScalarFieldEnum | DataPointScalarFieldEnum[]
  }

  /**
   * DataStream without action
   */
  export type DataStreamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataStream
     */
    select?: DataStreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataStream
     */
    omit?: DataStreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataStreamInclude<ExtArgs> | null
  }


  /**
   * Model DataPoint
   */

  export type AggregateDataPoint = {
    _count: DataPointCountAggregateOutputType | null
    _min: DataPointMinAggregateOutputType | null
    _max: DataPointMaxAggregateOutputType | null
  }

  export type DataPointMinAggregateOutputType = {
    id: string | null
    dataStreamId: string | null
    value: string | null
    type: string | null
    createdAt: Date | null
  }

  export type DataPointMaxAggregateOutputType = {
    id: string | null
    dataStreamId: string | null
    value: string | null
    type: string | null
    createdAt: Date | null
  }

  export type DataPointCountAggregateOutputType = {
    id: number
    dataStreamId: number
    value: number
    type: number
    createdAt: number
    _all: number
  }


  export type DataPointMinAggregateInputType = {
    id?: true
    dataStreamId?: true
    value?: true
    type?: true
    createdAt?: true
  }

  export type DataPointMaxAggregateInputType = {
    id?: true
    dataStreamId?: true
    value?: true
    type?: true
    createdAt?: true
  }

  export type DataPointCountAggregateInputType = {
    id?: true
    dataStreamId?: true
    value?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type DataPointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataPoint to aggregate.
     */
    where?: DataPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPoints to fetch.
     */
    orderBy?: DataPointOrderByWithRelationInput | DataPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataPoints
    **/
    _count?: true | DataPointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataPointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataPointMaxAggregateInputType
  }

  export type GetDataPointAggregateType<T extends DataPointAggregateArgs> = {
        [P in keyof T & keyof AggregateDataPoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataPoint[P]>
      : GetScalarType<T[P], AggregateDataPoint[P]>
  }




  export type DataPointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataPointWhereInput
    orderBy?: DataPointOrderByWithAggregationInput | DataPointOrderByWithAggregationInput[]
    by: DataPointScalarFieldEnum[] | DataPointScalarFieldEnum
    having?: DataPointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataPointCountAggregateInputType | true
    _min?: DataPointMinAggregateInputType
    _max?: DataPointMaxAggregateInputType
  }

  export type DataPointGroupByOutputType = {
    id: string
    dataStreamId: string
    value: string
    type: string
    createdAt: Date
    _count: DataPointCountAggregateOutputType | null
    _min: DataPointMinAggregateOutputType | null
    _max: DataPointMaxAggregateOutputType | null
  }

  type GetDataPointGroupByPayload<T extends DataPointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataPointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataPointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataPointGroupByOutputType[P]>
            : GetScalarType<T[P], DataPointGroupByOutputType[P]>
        }
      >
    >


  export type DataPointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataStreamId?: boolean
    value?: boolean
    type?: boolean
    createdAt?: boolean
    dataStream?: boolean | DataStreamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataPoint"]>

  export type DataPointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataStreamId?: boolean
    value?: boolean
    type?: boolean
    createdAt?: boolean
    dataStream?: boolean | DataStreamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataPoint"]>

  export type DataPointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataStreamId?: boolean
    value?: boolean
    type?: boolean
    createdAt?: boolean
    dataStream?: boolean | DataStreamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataPoint"]>

  export type DataPointSelectScalar = {
    id?: boolean
    dataStreamId?: boolean
    value?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type DataPointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataStreamId" | "value" | "type" | "createdAt", ExtArgs["result"]["dataPoint"]>
  export type DataPointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataStream?: boolean | DataStreamDefaultArgs<ExtArgs>
  }
  export type DataPointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataStream?: boolean | DataStreamDefaultArgs<ExtArgs>
  }
  export type DataPointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataStream?: boolean | DataStreamDefaultArgs<ExtArgs>
  }

  export type $DataPointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataPoint"
    objects: {
      dataStream: Prisma.$DataStreamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dataStreamId: string
      value: string
      type: string
      createdAt: Date
    }, ExtArgs["result"]["dataPoint"]>
    composites: {}
  }

  type DataPointGetPayload<S extends boolean | null | undefined | DataPointDefaultArgs> = $Result.GetResult<Prisma.$DataPointPayload, S>

  type DataPointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataPointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataPointCountAggregateInputType | true
    }

  export interface DataPointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataPoint'], meta: { name: 'DataPoint' } }
    /**
     * Find zero or one DataPoint that matches the filter.
     * @param {DataPointFindUniqueArgs} args - Arguments to find a DataPoint
     * @example
     * // Get one DataPoint
     * const dataPoint = await prisma.dataPoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataPointFindUniqueArgs>(args: SelectSubset<T, DataPointFindUniqueArgs<ExtArgs>>): Prisma__DataPointClient<$Result.GetResult<Prisma.$DataPointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataPoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataPointFindUniqueOrThrowArgs} args - Arguments to find a DataPoint
     * @example
     * // Get one DataPoint
     * const dataPoint = await prisma.dataPoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataPointFindUniqueOrThrowArgs>(args: SelectSubset<T, DataPointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataPointClient<$Result.GetResult<Prisma.$DataPointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataPoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPointFindFirstArgs} args - Arguments to find a DataPoint
     * @example
     * // Get one DataPoint
     * const dataPoint = await prisma.dataPoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataPointFindFirstArgs>(args?: SelectSubset<T, DataPointFindFirstArgs<ExtArgs>>): Prisma__DataPointClient<$Result.GetResult<Prisma.$DataPointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataPoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPointFindFirstOrThrowArgs} args - Arguments to find a DataPoint
     * @example
     * // Get one DataPoint
     * const dataPoint = await prisma.dataPoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataPointFindFirstOrThrowArgs>(args?: SelectSubset<T, DataPointFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataPointClient<$Result.GetResult<Prisma.$DataPointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataPoints
     * const dataPoints = await prisma.dataPoint.findMany()
     * 
     * // Get first 10 DataPoints
     * const dataPoints = await prisma.dataPoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataPointWithIdOnly = await prisma.dataPoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataPointFindManyArgs>(args?: SelectSubset<T, DataPointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataPoint.
     * @param {DataPointCreateArgs} args - Arguments to create a DataPoint.
     * @example
     * // Create one DataPoint
     * const DataPoint = await prisma.dataPoint.create({
     *   data: {
     *     // ... data to create a DataPoint
     *   }
     * })
     * 
     */
    create<T extends DataPointCreateArgs>(args: SelectSubset<T, DataPointCreateArgs<ExtArgs>>): Prisma__DataPointClient<$Result.GetResult<Prisma.$DataPointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataPoints.
     * @param {DataPointCreateManyArgs} args - Arguments to create many DataPoints.
     * @example
     * // Create many DataPoints
     * const dataPoint = await prisma.dataPoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataPointCreateManyArgs>(args?: SelectSubset<T, DataPointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataPoints and returns the data saved in the database.
     * @param {DataPointCreateManyAndReturnArgs} args - Arguments to create many DataPoints.
     * @example
     * // Create many DataPoints
     * const dataPoint = await prisma.dataPoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataPoints and only return the `id`
     * const dataPointWithIdOnly = await prisma.dataPoint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DataPointCreateManyAndReturnArgs>(args?: SelectSubset<T, DataPointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DataPoint.
     * @param {DataPointDeleteArgs} args - Arguments to delete one DataPoint.
     * @example
     * // Delete one DataPoint
     * const DataPoint = await prisma.dataPoint.delete({
     *   where: {
     *     // ... filter to delete one DataPoint
     *   }
     * })
     * 
     */
    delete<T extends DataPointDeleteArgs>(args: SelectSubset<T, DataPointDeleteArgs<ExtArgs>>): Prisma__DataPointClient<$Result.GetResult<Prisma.$DataPointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataPoint.
     * @param {DataPointUpdateArgs} args - Arguments to update one DataPoint.
     * @example
     * // Update one DataPoint
     * const dataPoint = await prisma.dataPoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataPointUpdateArgs>(args: SelectSubset<T, DataPointUpdateArgs<ExtArgs>>): Prisma__DataPointClient<$Result.GetResult<Prisma.$DataPointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataPoints.
     * @param {DataPointDeleteManyArgs} args - Arguments to filter DataPoints to delete.
     * @example
     * // Delete a few DataPoints
     * const { count } = await prisma.dataPoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataPointDeleteManyArgs>(args?: SelectSubset<T, DataPointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataPoints
     * const dataPoint = await prisma.dataPoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataPointUpdateManyArgs>(args: SelectSubset<T, DataPointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataPoints and returns the data updated in the database.
     * @param {DataPointUpdateManyAndReturnArgs} args - Arguments to update many DataPoints.
     * @example
     * // Update many DataPoints
     * const dataPoint = await prisma.dataPoint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DataPoints and only return the `id`
     * const dataPointWithIdOnly = await prisma.dataPoint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DataPointUpdateManyAndReturnArgs>(args: SelectSubset<T, DataPointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DataPoint.
     * @param {DataPointUpsertArgs} args - Arguments to update or create a DataPoint.
     * @example
     * // Update or create a DataPoint
     * const dataPoint = await prisma.dataPoint.upsert({
     *   create: {
     *     // ... data to create a DataPoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataPoint we want to update
     *   }
     * })
     */
    upsert<T extends DataPointUpsertArgs>(args: SelectSubset<T, DataPointUpsertArgs<ExtArgs>>): Prisma__DataPointClient<$Result.GetResult<Prisma.$DataPointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPointCountArgs} args - Arguments to filter DataPoints to count.
     * @example
     * // Count the number of DataPoints
     * const count = await prisma.dataPoint.count({
     *   where: {
     *     // ... the filter for the DataPoints we want to count
     *   }
     * })
    **/
    count<T extends DataPointCountArgs>(
      args?: Subset<T, DataPointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataPointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataPointAggregateArgs>(args: Subset<T, DataPointAggregateArgs>): Prisma.PrismaPromise<GetDataPointAggregateType<T>>

    /**
     * Group by DataPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPointGroupByArgs} args - Group by arguments.
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
      T extends DataPointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataPointGroupByArgs['orderBy'] }
        : { orderBy?: DataPointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataPointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataPoint model
   */
  readonly fields: DataPointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataPoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataPointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dataStream<T extends DataStreamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DataStreamDefaultArgs<ExtArgs>>): Prisma__DataStreamClient<$Result.GetResult<Prisma.$DataStreamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DataPoint model
   */
  interface DataPointFieldRefs {
    readonly id: FieldRef<"DataPoint", 'String'>
    readonly dataStreamId: FieldRef<"DataPoint", 'String'>
    readonly value: FieldRef<"DataPoint", 'String'>
    readonly type: FieldRef<"DataPoint", 'String'>
    readonly createdAt: FieldRef<"DataPoint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DataPoint findUnique
   */
  export type DataPointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPoint
     */
    select?: DataPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPoint
     */
    omit?: DataPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPointInclude<ExtArgs> | null
    /**
     * Filter, which DataPoint to fetch.
     */
    where: DataPointWhereUniqueInput
  }

  /**
   * DataPoint findUniqueOrThrow
   */
  export type DataPointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPoint
     */
    select?: DataPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPoint
     */
    omit?: DataPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPointInclude<ExtArgs> | null
    /**
     * Filter, which DataPoint to fetch.
     */
    where: DataPointWhereUniqueInput
  }

  /**
   * DataPoint findFirst
   */
  export type DataPointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPoint
     */
    select?: DataPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPoint
     */
    omit?: DataPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPointInclude<ExtArgs> | null
    /**
     * Filter, which DataPoint to fetch.
     */
    where?: DataPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPoints to fetch.
     */
    orderBy?: DataPointOrderByWithRelationInput | DataPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataPoints.
     */
    cursor?: DataPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataPoints.
     */
    distinct?: DataPointScalarFieldEnum | DataPointScalarFieldEnum[]
  }

  /**
   * DataPoint findFirstOrThrow
   */
  export type DataPointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPoint
     */
    select?: DataPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPoint
     */
    omit?: DataPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPointInclude<ExtArgs> | null
    /**
     * Filter, which DataPoint to fetch.
     */
    where?: DataPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPoints to fetch.
     */
    orderBy?: DataPointOrderByWithRelationInput | DataPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataPoints.
     */
    cursor?: DataPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataPoints.
     */
    distinct?: DataPointScalarFieldEnum | DataPointScalarFieldEnum[]
  }

  /**
   * DataPoint findMany
   */
  export type DataPointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPoint
     */
    select?: DataPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPoint
     */
    omit?: DataPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPointInclude<ExtArgs> | null
    /**
     * Filter, which DataPoints to fetch.
     */
    where?: DataPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPoints to fetch.
     */
    orderBy?: DataPointOrderByWithRelationInput | DataPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataPoints.
     */
    cursor?: DataPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPoints.
     */
    skip?: number
    distinct?: DataPointScalarFieldEnum | DataPointScalarFieldEnum[]
  }

  /**
   * DataPoint create
   */
  export type DataPointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPoint
     */
    select?: DataPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPoint
     */
    omit?: DataPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPointInclude<ExtArgs> | null
    /**
     * The data needed to create a DataPoint.
     */
    data: XOR<DataPointCreateInput, DataPointUncheckedCreateInput>
  }

  /**
   * DataPoint createMany
   */
  export type DataPointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataPoints.
     */
    data: DataPointCreateManyInput | DataPointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataPoint createManyAndReturn
   */
  export type DataPointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPoint
     */
    select?: DataPointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataPoint
     */
    omit?: DataPointOmit<ExtArgs> | null
    /**
     * The data used to create many DataPoints.
     */
    data: DataPointCreateManyInput | DataPointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DataPoint update
   */
  export type DataPointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPoint
     */
    select?: DataPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPoint
     */
    omit?: DataPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPointInclude<ExtArgs> | null
    /**
     * The data needed to update a DataPoint.
     */
    data: XOR<DataPointUpdateInput, DataPointUncheckedUpdateInput>
    /**
     * Choose, which DataPoint to update.
     */
    where: DataPointWhereUniqueInput
  }

  /**
   * DataPoint updateMany
   */
  export type DataPointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataPoints.
     */
    data: XOR<DataPointUpdateManyMutationInput, DataPointUncheckedUpdateManyInput>
    /**
     * Filter which DataPoints to update
     */
    where?: DataPointWhereInput
    /**
     * Limit how many DataPoints to update.
     */
    limit?: number
  }

  /**
   * DataPoint updateManyAndReturn
   */
  export type DataPointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPoint
     */
    select?: DataPointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataPoint
     */
    omit?: DataPointOmit<ExtArgs> | null
    /**
     * The data used to update DataPoints.
     */
    data: XOR<DataPointUpdateManyMutationInput, DataPointUncheckedUpdateManyInput>
    /**
     * Filter which DataPoints to update
     */
    where?: DataPointWhereInput
    /**
     * Limit how many DataPoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DataPoint upsert
   */
  export type DataPointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPoint
     */
    select?: DataPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPoint
     */
    omit?: DataPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPointInclude<ExtArgs> | null
    /**
     * The filter to search for the DataPoint to update in case it exists.
     */
    where: DataPointWhereUniqueInput
    /**
     * In case the DataPoint found by the `where` argument doesn't exist, create a new DataPoint with this data.
     */
    create: XOR<DataPointCreateInput, DataPointUncheckedCreateInput>
    /**
     * In case the DataPoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataPointUpdateInput, DataPointUncheckedUpdateInput>
  }

  /**
   * DataPoint delete
   */
  export type DataPointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPoint
     */
    select?: DataPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPoint
     */
    omit?: DataPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPointInclude<ExtArgs> | null
    /**
     * Filter which DataPoint to delete.
     */
    where: DataPointWhereUniqueInput
  }

  /**
   * DataPoint deleteMany
   */
  export type DataPointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataPoints to delete
     */
    where?: DataPointWhereInput
    /**
     * Limit how many DataPoints to delete.
     */
    limit?: number
  }

  /**
   * DataPoint without action
   */
  export type DataPointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPoint
     */
    select?: DataPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPoint
     */
    omit?: DataPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPointInclude<ExtArgs> | null
  }


  /**
   * Model Rule
   */

  export type AggregateRule = {
    _count: RuleCountAggregateOutputType | null
    _avg: RuleAvgAggregateOutputType | null
    _sum: RuleSumAggregateOutputType | null
    _min: RuleMinAggregateOutputType | null
    _max: RuleMaxAggregateOutputType | null
  }

  export type RuleAvgAggregateOutputType = {
    attempts: number | null
  }

  export type RuleSumAggregateOutputType = {
    attempts: number | null
  }

  export type RuleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    active: boolean | null
    attempts: number | null
    userId: string | null
  }

  export type RuleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    active: boolean | null
    attempts: number | null
    userId: string | null
  }

  export type RuleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    active: number
    attempts: number
    userId: number
    _all: number
  }


  export type RuleAvgAggregateInputType = {
    attempts?: true
  }

  export type RuleSumAggregateInputType = {
    attempts?: true
  }

  export type RuleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    active?: true
    attempts?: true
    userId?: true
  }

  export type RuleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    active?: true
    attempts?: true
    userId?: true
  }

  export type RuleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    active?: true
    attempts?: true
    userId?: true
    _all?: true
  }

  export type RuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rule to aggregate.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rules
    **/
    _count?: true | RuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RuleMaxAggregateInputType
  }

  export type GetRuleAggregateType<T extends RuleAggregateArgs> = {
        [P in keyof T & keyof AggregateRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRule[P]>
      : GetScalarType<T[P], AggregateRule[P]>
  }




  export type RuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleWhereInput
    orderBy?: RuleOrderByWithAggregationInput | RuleOrderByWithAggregationInput[]
    by: RuleScalarFieldEnum[] | RuleScalarFieldEnum
    having?: RuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RuleCountAggregateInputType | true
    _avg?: RuleAvgAggregateInputType
    _sum?: RuleSumAggregateInputType
    _min?: RuleMinAggregateInputType
    _max?: RuleMaxAggregateInputType
  }

  export type RuleGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    active: boolean
    attempts: number
    userId: string | null
    _count: RuleCountAggregateOutputType | null
    _avg: RuleAvgAggregateOutputType | null
    _sum: RuleSumAggregateOutputType | null
    _min: RuleMinAggregateOutputType | null
    _max: RuleMaxAggregateOutputType | null
  }

  type GetRuleGroupByPayload<T extends RuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RuleGroupByOutputType[P]>
            : GetScalarType<T[P], RuleGroupByOutputType[P]>
        }
      >
    >


  export type RuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
    attempts?: boolean
    userId?: boolean
    actions?: boolean | Rule$actionsArgs<ExtArgs>
    User?: boolean | Rule$UserArgs<ExtArgs>
    _count?: boolean | RuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
    attempts?: boolean
    userId?: boolean
    User?: boolean | Rule$UserArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
    attempts?: boolean
    userId?: boolean
    User?: boolean | Rule$UserArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
    attempts?: boolean
    userId?: boolean
  }

  export type RuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "active" | "attempts" | "userId", ExtArgs["result"]["rule"]>
  export type RuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | Rule$actionsArgs<ExtArgs>
    User?: boolean | Rule$UserArgs<ExtArgs>
    _count?: boolean | RuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Rule$UserArgs<ExtArgs>
  }
  export type RuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Rule$UserArgs<ExtArgs>
  }

  export type $RulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rule"
    objects: {
      actions: Prisma.$ActionPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      active: boolean
      attempts: number
      userId: string | null
    }, ExtArgs["result"]["rule"]>
    composites: {}
  }

  type RuleGetPayload<S extends boolean | null | undefined | RuleDefaultArgs> = $Result.GetResult<Prisma.$RulePayload, S>

  type RuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RuleCountAggregateInputType | true
    }

  export interface RuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rule'], meta: { name: 'Rule' } }
    /**
     * Find zero or one Rule that matches the filter.
     * @param {RuleFindUniqueArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RuleFindUniqueArgs>(args: SelectSubset<T, RuleFindUniqueArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RuleFindUniqueOrThrowArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RuleFindUniqueOrThrowArgs>(args: SelectSubset<T, RuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindFirstArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RuleFindFirstArgs>(args?: SelectSubset<T, RuleFindFirstArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindFirstOrThrowArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RuleFindFirstOrThrowArgs>(args?: SelectSubset<T, RuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rules
     * const rules = await prisma.rule.findMany()
     * 
     * // Get first 10 Rules
     * const rules = await prisma.rule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ruleWithIdOnly = await prisma.rule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RuleFindManyArgs>(args?: SelectSubset<T, RuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rule.
     * @param {RuleCreateArgs} args - Arguments to create a Rule.
     * @example
     * // Create one Rule
     * const Rule = await prisma.rule.create({
     *   data: {
     *     // ... data to create a Rule
     *   }
     * })
     * 
     */
    create<T extends RuleCreateArgs>(args: SelectSubset<T, RuleCreateArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rules.
     * @param {RuleCreateManyArgs} args - Arguments to create many Rules.
     * @example
     * // Create many Rules
     * const rule = await prisma.rule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RuleCreateManyArgs>(args?: SelectSubset<T, RuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rules and returns the data saved in the database.
     * @param {RuleCreateManyAndReturnArgs} args - Arguments to create many Rules.
     * @example
     * // Create many Rules
     * const rule = await prisma.rule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rules and only return the `id`
     * const ruleWithIdOnly = await prisma.rule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RuleCreateManyAndReturnArgs>(args?: SelectSubset<T, RuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rule.
     * @param {RuleDeleteArgs} args - Arguments to delete one Rule.
     * @example
     * // Delete one Rule
     * const Rule = await prisma.rule.delete({
     *   where: {
     *     // ... filter to delete one Rule
     *   }
     * })
     * 
     */
    delete<T extends RuleDeleteArgs>(args: SelectSubset<T, RuleDeleteArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rule.
     * @param {RuleUpdateArgs} args - Arguments to update one Rule.
     * @example
     * // Update one Rule
     * const rule = await prisma.rule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RuleUpdateArgs>(args: SelectSubset<T, RuleUpdateArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rules.
     * @param {RuleDeleteManyArgs} args - Arguments to filter Rules to delete.
     * @example
     * // Delete a few Rules
     * const { count } = await prisma.rule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RuleDeleteManyArgs>(args?: SelectSubset<T, RuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rules
     * const rule = await prisma.rule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RuleUpdateManyArgs>(args: SelectSubset<T, RuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rules and returns the data updated in the database.
     * @param {RuleUpdateManyAndReturnArgs} args - Arguments to update many Rules.
     * @example
     * // Update many Rules
     * const rule = await prisma.rule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rules and only return the `id`
     * const ruleWithIdOnly = await prisma.rule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RuleUpdateManyAndReturnArgs>(args: SelectSubset<T, RuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rule.
     * @param {RuleUpsertArgs} args - Arguments to update or create a Rule.
     * @example
     * // Update or create a Rule
     * const rule = await prisma.rule.upsert({
     *   create: {
     *     // ... data to create a Rule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rule we want to update
     *   }
     * })
     */
    upsert<T extends RuleUpsertArgs>(args: SelectSubset<T, RuleUpsertArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleCountArgs} args - Arguments to filter Rules to count.
     * @example
     * // Count the number of Rules
     * const count = await prisma.rule.count({
     *   where: {
     *     // ... the filter for the Rules we want to count
     *   }
     * })
    **/
    count<T extends RuleCountArgs>(
      args?: Subset<T, RuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RuleAggregateArgs>(args: Subset<T, RuleAggregateArgs>): Prisma.PrismaPromise<GetRuleAggregateType<T>>

    /**
     * Group by Rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleGroupByArgs} args - Group by arguments.
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
      T extends RuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RuleGroupByArgs['orderBy'] }
        : { orderBy?: RuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rule model
   */
  readonly fields: RuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actions<T extends Rule$actionsArgs<ExtArgs> = {}>(args?: Subset<T, Rule$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Rule$UserArgs<ExtArgs> = {}>(args?: Subset<T, Rule$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rule model
   */
  interface RuleFieldRefs {
    readonly id: FieldRef<"Rule", 'String'>
    readonly name: FieldRef<"Rule", 'String'>
    readonly description: FieldRef<"Rule", 'String'>
    readonly createdAt: FieldRef<"Rule", 'DateTime'>
    readonly updatedAt: FieldRef<"Rule", 'DateTime'>
    readonly active: FieldRef<"Rule", 'Boolean'>
    readonly attempts: FieldRef<"Rule", 'Int'>
    readonly userId: FieldRef<"Rule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rule findUnique
   */
  export type RuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule findUniqueOrThrow
   */
  export type RuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule findFirst
   */
  export type RuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rules.
     */
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule findFirstOrThrow
   */
  export type RuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rules.
     */
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule findMany
   */
  export type RuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rules to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule create
   */
  export type RuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Rule.
     */
    data: XOR<RuleCreateInput, RuleUncheckedCreateInput>
  }

  /**
   * Rule createMany
   */
  export type RuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rules.
     */
    data: RuleCreateManyInput | RuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rule createManyAndReturn
   */
  export type RuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * The data used to create many Rules.
     */
    data: RuleCreateManyInput | RuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rule update
   */
  export type RuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Rule.
     */
    data: XOR<RuleUpdateInput, RuleUncheckedUpdateInput>
    /**
     * Choose, which Rule to update.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule updateMany
   */
  export type RuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rules.
     */
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyInput>
    /**
     * Filter which Rules to update
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to update.
     */
    limit?: number
  }

  /**
   * Rule updateManyAndReturn
   */
  export type RuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * The data used to update Rules.
     */
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyInput>
    /**
     * Filter which Rules to update
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rule upsert
   */
  export type RuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Rule to update in case it exists.
     */
    where: RuleWhereUniqueInput
    /**
     * In case the Rule found by the `where` argument doesn't exist, create a new Rule with this data.
     */
    create: XOR<RuleCreateInput, RuleUncheckedCreateInput>
    /**
     * In case the Rule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RuleUpdateInput, RuleUncheckedUpdateInput>
  }

  /**
   * Rule delete
   */
  export type RuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter which Rule to delete.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule deleteMany
   */
  export type RuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rules to delete
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to delete.
     */
    limit?: number
  }

  /**
   * Rule.actions
   */
  export type Rule$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Rule.User
   */
  export type Rule$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Rule without action
   */
  export type RuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
  }


  /**
   * Model Action
   */

  export type AggregateAction = {
    _count: ActionCountAggregateOutputType | null
    _avg: ActionAvgAggregateOutputType | null
    _sum: ActionSumAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  export type ActionAvgAggregateOutputType = {
    retries: number | null
    triggerLimit: number | null
  }

  export type ActionSumAggregateOutputType = {
    retries: number | null
    triggerLimit: number | null
  }

  export type ActionMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ActionType | null
    active: boolean | null
    retries: number | null
    triggerLimit: number | null
    createdAt: Date | null
    updatedAt: Date | null
    ruleId: string | null
    userId: string | null
  }

  export type ActionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ActionType | null
    active: boolean | null
    retries: number | null
    triggerLimit: number | null
    createdAt: Date | null
    updatedAt: Date | null
    ruleId: string | null
    userId: string | null
  }

  export type ActionCountAggregateOutputType = {
    id: number
    name: number
    type: number
    active: number
    retries: number
    triggerLimit: number
    createdAt: number
    updatedAt: number
    ruleId: number
    userId: number
    _all: number
  }


  export type ActionAvgAggregateInputType = {
    retries?: true
    triggerLimit?: true
  }

  export type ActionSumAggregateInputType = {
    retries?: true
    triggerLimit?: true
  }

  export type ActionMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    active?: true
    retries?: true
    triggerLimit?: true
    createdAt?: true
    updatedAt?: true
    ruleId?: true
    userId?: true
  }

  export type ActionMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    active?: true
    retries?: true
    triggerLimit?: true
    createdAt?: true
    updatedAt?: true
    ruleId?: true
    userId?: true
  }

  export type ActionCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    active?: true
    retries?: true
    triggerLimit?: true
    createdAt?: true
    updatedAt?: true
    ruleId?: true
    userId?: true
    _all?: true
  }

  export type ActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Action to aggregate.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actions
    **/
    _count?: true | ActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionMaxAggregateInputType
  }

  export type GetActionAggregateType<T extends ActionAggregateArgs> = {
        [P in keyof T & keyof AggregateAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAction[P]>
      : GetScalarType<T[P], AggregateAction[P]>
  }




  export type ActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithAggregationInput | ActionOrderByWithAggregationInput[]
    by: ActionScalarFieldEnum[] | ActionScalarFieldEnum
    having?: ActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionCountAggregateInputType | true
    _avg?: ActionAvgAggregateInputType
    _sum?: ActionSumAggregateInputType
    _min?: ActionMinAggregateInputType
    _max?: ActionMaxAggregateInputType
  }

  export type ActionGroupByOutputType = {
    id: string
    name: string
    type: $Enums.ActionType
    active: boolean
    retries: number
    triggerLimit: number
    createdAt: Date
    updatedAt: Date
    ruleId: string | null
    userId: string
    _count: ActionCountAggregateOutputType | null
    _avg: ActionAvgAggregateOutputType | null
    _sum: ActionSumAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  type GetActionGroupByPayload<T extends ActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionGroupByOutputType[P]>
            : GetScalarType<T[P], ActionGroupByOutputType[P]>
        }
      >
    >


  export type ActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    active?: boolean
    retries?: boolean
    triggerLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ruleId?: boolean
    userId?: boolean
    Rule?: boolean | Action$RuleArgs<ExtArgs>
    emailAction?: boolean | Action$emailActionArgs<ExtArgs>
    telegramAction?: boolean | Action$telegramActionArgs<ExtArgs>
    webhookAction?: boolean | Action$webhookActionArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    active?: boolean
    retries?: boolean
    triggerLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ruleId?: boolean
    userId?: boolean
    Rule?: boolean | Action$RuleArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    active?: boolean
    retries?: boolean
    triggerLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ruleId?: boolean
    userId?: boolean
    Rule?: boolean | Action$RuleArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    active?: boolean
    retries?: boolean
    triggerLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ruleId?: boolean
    userId?: boolean
  }

  export type ActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "active" | "retries" | "triggerLimit" | "createdAt" | "updatedAt" | "ruleId" | "userId", ExtArgs["result"]["action"]>
  export type ActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rule?: boolean | Action$RuleArgs<ExtArgs>
    emailAction?: boolean | Action$emailActionArgs<ExtArgs>
    telegramAction?: boolean | Action$telegramActionArgs<ExtArgs>
    webhookAction?: boolean | Action$webhookActionArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rule?: boolean | Action$RuleArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rule?: boolean | Action$RuleArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Action"
    objects: {
      Rule: Prisma.$RulePayload<ExtArgs> | null
      emailAction: Prisma.$EmailActionPayload<ExtArgs> | null
      telegramAction: Prisma.$TelegramActionPayload<ExtArgs> | null
      webhookAction: Prisma.$WebhookActionPayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.ActionType
      active: boolean
      retries: number
      triggerLimit: number
      createdAt: Date
      updatedAt: Date
      ruleId: string | null
      userId: string
    }, ExtArgs["result"]["action"]>
    composites: {}
  }

  type ActionGetPayload<S extends boolean | null | undefined | ActionDefaultArgs> = $Result.GetResult<Prisma.$ActionPayload, S>

  type ActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionCountAggregateInputType | true
    }

  export interface ActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Action'], meta: { name: 'Action' } }
    /**
     * Find zero or one Action that matches the filter.
     * @param {ActionFindUniqueArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionFindUniqueArgs>(args: SelectSubset<T, ActionFindUniqueArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Action that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionFindUniqueOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionFindFirstArgs>(args?: SelectSubset<T, ActionFindFirstArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actions
     * const actions = await prisma.action.findMany()
     * 
     * // Get first 10 Actions
     * const actions = await prisma.action.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionWithIdOnly = await prisma.action.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionFindManyArgs>(args?: SelectSubset<T, ActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Action.
     * @param {ActionCreateArgs} args - Arguments to create a Action.
     * @example
     * // Create one Action
     * const Action = await prisma.action.create({
     *   data: {
     *     // ... data to create a Action
     *   }
     * })
     * 
     */
    create<T extends ActionCreateArgs>(args: SelectSubset<T, ActionCreateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actions.
     * @param {ActionCreateManyArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionCreateManyArgs>(args?: SelectSubset<T, ActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actions and returns the data saved in the database.
     * @param {ActionCreateManyAndReturnArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Action.
     * @param {ActionDeleteArgs} args - Arguments to delete one Action.
     * @example
     * // Delete one Action
     * const Action = await prisma.action.delete({
     *   where: {
     *     // ... filter to delete one Action
     *   }
     * })
     * 
     */
    delete<T extends ActionDeleteArgs>(args: SelectSubset<T, ActionDeleteArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Action.
     * @param {ActionUpdateArgs} args - Arguments to update one Action.
     * @example
     * // Update one Action
     * const action = await prisma.action.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionUpdateArgs>(args: SelectSubset<T, ActionUpdateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actions.
     * @param {ActionDeleteManyArgs} args - Arguments to filter Actions to delete.
     * @example
     * // Delete a few Actions
     * const { count } = await prisma.action.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionDeleteManyArgs>(args?: SelectSubset<T, ActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionUpdateManyArgs>(args: SelectSubset<T, ActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions and returns the data updated in the database.
     * @param {ActionUpdateManyAndReturnArgs} args - Arguments to update many Actions.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActionUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Action.
     * @param {ActionUpsertArgs} args - Arguments to update or create a Action.
     * @example
     * // Update or create a Action
     * const action = await prisma.action.upsert({
     *   create: {
     *     // ... data to create a Action
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Action we want to update
     *   }
     * })
     */
    upsert<T extends ActionUpsertArgs>(args: SelectSubset<T, ActionUpsertArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionCountArgs} args - Arguments to filter Actions to count.
     * @example
     * // Count the number of Actions
     * const count = await prisma.action.count({
     *   where: {
     *     // ... the filter for the Actions we want to count
     *   }
     * })
    **/
    count<T extends ActionCountArgs>(
      args?: Subset<T, ActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActionAggregateArgs>(args: Subset<T, ActionAggregateArgs>): Prisma.PrismaPromise<GetActionAggregateType<T>>

    /**
     * Group by Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionGroupByArgs} args - Group by arguments.
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
      T extends ActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionGroupByArgs['orderBy'] }
        : { orderBy?: ActionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Action model
   */
  readonly fields: ActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Action.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Rule<T extends Action$RuleArgs<ExtArgs> = {}>(args?: Subset<T, Action$RuleArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    emailAction<T extends Action$emailActionArgs<ExtArgs> = {}>(args?: Subset<T, Action$emailActionArgs<ExtArgs>>): Prisma__EmailActionClient<$Result.GetResult<Prisma.$EmailActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    telegramAction<T extends Action$telegramActionArgs<ExtArgs> = {}>(args?: Subset<T, Action$telegramActionArgs<ExtArgs>>): Prisma__TelegramActionClient<$Result.GetResult<Prisma.$TelegramActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    webhookAction<T extends Action$webhookActionArgs<ExtArgs> = {}>(args?: Subset<T, Action$webhookActionArgs<ExtArgs>>): Prisma__WebhookActionClient<$Result.GetResult<Prisma.$WebhookActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Action model
   */
  interface ActionFieldRefs {
    readonly id: FieldRef<"Action", 'String'>
    readonly name: FieldRef<"Action", 'String'>
    readonly type: FieldRef<"Action", 'ActionType'>
    readonly active: FieldRef<"Action", 'Boolean'>
    readonly retries: FieldRef<"Action", 'Int'>
    readonly triggerLimit: FieldRef<"Action", 'Int'>
    readonly createdAt: FieldRef<"Action", 'DateTime'>
    readonly updatedAt: FieldRef<"Action", 'DateTime'>
    readonly ruleId: FieldRef<"Action", 'String'>
    readonly userId: FieldRef<"Action", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Action findUnique
   */
  export type ActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findUniqueOrThrow
   */
  export type ActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findFirst
   */
  export type ActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findFirstOrThrow
   */
  export type ActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findMany
   */
  export type ActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Actions to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action create
   */
  export type ActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to create a Action.
     */
    data: XOR<ActionCreateInput, ActionUncheckedCreateInput>
  }

  /**
   * Action createMany
   */
  export type ActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Action createManyAndReturn
   */
  export type ActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action update
   */
  export type ActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to update a Action.
     */
    data: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
    /**
     * Choose, which Action to update.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action updateMany
   */
  export type ActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
  }

  /**
   * Action updateManyAndReturn
   */
  export type ActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action upsert
   */
  export type ActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The filter to search for the Action to update in case it exists.
     */
    where: ActionWhereUniqueInput
    /**
     * In case the Action found by the `where` argument doesn't exist, create a new Action with this data.
     */
    create: XOR<ActionCreateInput, ActionUncheckedCreateInput>
    /**
     * In case the Action was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
  }

  /**
   * Action delete
   */
  export type ActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter which Action to delete.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action deleteMany
   */
  export type ActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actions to delete
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to delete.
     */
    limit?: number
  }

  /**
   * Action.Rule
   */
  export type Action$RuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    where?: RuleWhereInput
  }

  /**
   * Action.emailAction
   */
  export type Action$emailActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAction
     */
    select?: EmailActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAction
     */
    omit?: EmailActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActionInclude<ExtArgs> | null
    where?: EmailActionWhereInput
  }

  /**
   * Action.telegramAction
   */
  export type Action$telegramActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramAction
     */
    select?: TelegramActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramAction
     */
    omit?: TelegramActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramActionInclude<ExtArgs> | null
    where?: TelegramActionWhereInput
  }

  /**
   * Action.webhookAction
   */
  export type Action$webhookActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookAction
     */
    select?: WebhookActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookAction
     */
    omit?: WebhookActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookActionInclude<ExtArgs> | null
    where?: WebhookActionWhereInput
  }

  /**
   * Action without action
   */
  export type ActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
  }


  /**
   * Model EmailAction
   */

  export type AggregateEmailAction = {
    _count: EmailActionCountAggregateOutputType | null
    _min: EmailActionMinAggregateOutputType | null
    _max: EmailActionMaxAggregateOutputType | null
  }

  export type EmailActionMinAggregateOutputType = {
    id: string | null
    receiverEmail: string | null
    content: string | null
    actionId: string | null
  }

  export type EmailActionMaxAggregateOutputType = {
    id: string | null
    receiverEmail: string | null
    content: string | null
    actionId: string | null
  }

  export type EmailActionCountAggregateOutputType = {
    id: number
    receiverEmail: number
    content: number
    actionId: number
    _all: number
  }


  export type EmailActionMinAggregateInputType = {
    id?: true
    receiverEmail?: true
    content?: true
    actionId?: true
  }

  export type EmailActionMaxAggregateInputType = {
    id?: true
    receiverEmail?: true
    content?: true
    actionId?: true
  }

  export type EmailActionCountAggregateInputType = {
    id?: true
    receiverEmail?: true
    content?: true
    actionId?: true
    _all?: true
  }

  export type EmailActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailAction to aggregate.
     */
    where?: EmailActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailActions to fetch.
     */
    orderBy?: EmailActionOrderByWithRelationInput | EmailActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailActions
    **/
    _count?: true | EmailActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailActionMaxAggregateInputType
  }

  export type GetEmailActionAggregateType<T extends EmailActionAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailAction[P]>
      : GetScalarType<T[P], AggregateEmailAction[P]>
  }




  export type EmailActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailActionWhereInput
    orderBy?: EmailActionOrderByWithAggregationInput | EmailActionOrderByWithAggregationInput[]
    by: EmailActionScalarFieldEnum[] | EmailActionScalarFieldEnum
    having?: EmailActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailActionCountAggregateInputType | true
    _min?: EmailActionMinAggregateInputType
    _max?: EmailActionMaxAggregateInputType
  }

  export type EmailActionGroupByOutputType = {
    id: string
    receiverEmail: string
    content: string
    actionId: string
    _count: EmailActionCountAggregateOutputType | null
    _min: EmailActionMinAggregateOutputType | null
    _max: EmailActionMaxAggregateOutputType | null
  }

  type GetEmailActionGroupByPayload<T extends EmailActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailActionGroupByOutputType[P]>
            : GetScalarType<T[P], EmailActionGroupByOutputType[P]>
        }
      >
    >


  export type EmailActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiverEmail?: boolean
    content?: boolean
    actionId?: boolean
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailAction"]>

  export type EmailActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiverEmail?: boolean
    content?: boolean
    actionId?: boolean
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailAction"]>

  export type EmailActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiverEmail?: boolean
    content?: boolean
    actionId?: boolean
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailAction"]>

  export type EmailActionSelectScalar = {
    id?: boolean
    receiverEmail?: boolean
    content?: boolean
    actionId?: boolean
  }

  export type EmailActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "receiverEmail" | "content" | "actionId", ExtArgs["result"]["emailAction"]>
  export type EmailActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }
  export type EmailActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }
  export type EmailActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }

  export type $EmailActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailAction"
    objects: {
      action: Prisma.$ActionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      receiverEmail: string
      content: string
      actionId: string
    }, ExtArgs["result"]["emailAction"]>
    composites: {}
  }

  type EmailActionGetPayload<S extends boolean | null | undefined | EmailActionDefaultArgs> = $Result.GetResult<Prisma.$EmailActionPayload, S>

  type EmailActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailActionCountAggregateInputType | true
    }

  export interface EmailActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailAction'], meta: { name: 'EmailAction' } }
    /**
     * Find zero or one EmailAction that matches the filter.
     * @param {EmailActionFindUniqueArgs} args - Arguments to find a EmailAction
     * @example
     * // Get one EmailAction
     * const emailAction = await prisma.emailAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailActionFindUniqueArgs>(args: SelectSubset<T, EmailActionFindUniqueArgs<ExtArgs>>): Prisma__EmailActionClient<$Result.GetResult<Prisma.$EmailActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailAction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailActionFindUniqueOrThrowArgs} args - Arguments to find a EmailAction
     * @example
     * // Get one EmailAction
     * const emailAction = await prisma.emailAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailActionFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailActionClient<$Result.GetResult<Prisma.$EmailActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailActionFindFirstArgs} args - Arguments to find a EmailAction
     * @example
     * // Get one EmailAction
     * const emailAction = await prisma.emailAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailActionFindFirstArgs>(args?: SelectSubset<T, EmailActionFindFirstArgs<ExtArgs>>): Prisma__EmailActionClient<$Result.GetResult<Prisma.$EmailActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailActionFindFirstOrThrowArgs} args - Arguments to find a EmailAction
     * @example
     * // Get one EmailAction
     * const emailAction = await prisma.emailAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailActionFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailActionClient<$Result.GetResult<Prisma.$EmailActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailActions
     * const emailActions = await prisma.emailAction.findMany()
     * 
     * // Get first 10 EmailActions
     * const emailActions = await prisma.emailAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailActionWithIdOnly = await prisma.emailAction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailActionFindManyArgs>(args?: SelectSubset<T, EmailActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailAction.
     * @param {EmailActionCreateArgs} args - Arguments to create a EmailAction.
     * @example
     * // Create one EmailAction
     * const EmailAction = await prisma.emailAction.create({
     *   data: {
     *     // ... data to create a EmailAction
     *   }
     * })
     * 
     */
    create<T extends EmailActionCreateArgs>(args: SelectSubset<T, EmailActionCreateArgs<ExtArgs>>): Prisma__EmailActionClient<$Result.GetResult<Prisma.$EmailActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailActions.
     * @param {EmailActionCreateManyArgs} args - Arguments to create many EmailActions.
     * @example
     * // Create many EmailActions
     * const emailAction = await prisma.emailAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailActionCreateManyArgs>(args?: SelectSubset<T, EmailActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailActions and returns the data saved in the database.
     * @param {EmailActionCreateManyAndReturnArgs} args - Arguments to create many EmailActions.
     * @example
     * // Create many EmailActions
     * const emailAction = await prisma.emailAction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailActions and only return the `id`
     * const emailActionWithIdOnly = await prisma.emailAction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailActionCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailAction.
     * @param {EmailActionDeleteArgs} args - Arguments to delete one EmailAction.
     * @example
     * // Delete one EmailAction
     * const EmailAction = await prisma.emailAction.delete({
     *   where: {
     *     // ... filter to delete one EmailAction
     *   }
     * })
     * 
     */
    delete<T extends EmailActionDeleteArgs>(args: SelectSubset<T, EmailActionDeleteArgs<ExtArgs>>): Prisma__EmailActionClient<$Result.GetResult<Prisma.$EmailActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailAction.
     * @param {EmailActionUpdateArgs} args - Arguments to update one EmailAction.
     * @example
     * // Update one EmailAction
     * const emailAction = await prisma.emailAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailActionUpdateArgs>(args: SelectSubset<T, EmailActionUpdateArgs<ExtArgs>>): Prisma__EmailActionClient<$Result.GetResult<Prisma.$EmailActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailActions.
     * @param {EmailActionDeleteManyArgs} args - Arguments to filter EmailActions to delete.
     * @example
     * // Delete a few EmailActions
     * const { count } = await prisma.emailAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailActionDeleteManyArgs>(args?: SelectSubset<T, EmailActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailActions
     * const emailAction = await prisma.emailAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailActionUpdateManyArgs>(args: SelectSubset<T, EmailActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailActions and returns the data updated in the database.
     * @param {EmailActionUpdateManyAndReturnArgs} args - Arguments to update many EmailActions.
     * @example
     * // Update many EmailActions
     * const emailAction = await prisma.emailAction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailActions and only return the `id`
     * const emailActionWithIdOnly = await prisma.emailAction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailActionUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailAction.
     * @param {EmailActionUpsertArgs} args - Arguments to update or create a EmailAction.
     * @example
     * // Update or create a EmailAction
     * const emailAction = await prisma.emailAction.upsert({
     *   create: {
     *     // ... data to create a EmailAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailAction we want to update
     *   }
     * })
     */
    upsert<T extends EmailActionUpsertArgs>(args: SelectSubset<T, EmailActionUpsertArgs<ExtArgs>>): Prisma__EmailActionClient<$Result.GetResult<Prisma.$EmailActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailActionCountArgs} args - Arguments to filter EmailActions to count.
     * @example
     * // Count the number of EmailActions
     * const count = await prisma.emailAction.count({
     *   where: {
     *     // ... the filter for the EmailActions we want to count
     *   }
     * })
    **/
    count<T extends EmailActionCountArgs>(
      args?: Subset<T, EmailActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailActionAggregateArgs>(args: Subset<T, EmailActionAggregateArgs>): Prisma.PrismaPromise<GetEmailActionAggregateType<T>>

    /**
     * Group by EmailAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailActionGroupByArgs} args - Group by arguments.
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
      T extends EmailActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailActionGroupByArgs['orderBy'] }
        : { orderBy?: EmailActionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailAction model
   */
  readonly fields: EmailActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    action<T extends ActionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActionDefaultArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmailAction model
   */
  interface EmailActionFieldRefs {
    readonly id: FieldRef<"EmailAction", 'String'>
    readonly receiverEmail: FieldRef<"EmailAction", 'String'>
    readonly content: FieldRef<"EmailAction", 'String'>
    readonly actionId: FieldRef<"EmailAction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmailAction findUnique
   */
  export type EmailActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAction
     */
    select?: EmailActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAction
     */
    omit?: EmailActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActionInclude<ExtArgs> | null
    /**
     * Filter, which EmailAction to fetch.
     */
    where: EmailActionWhereUniqueInput
  }

  /**
   * EmailAction findUniqueOrThrow
   */
  export type EmailActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAction
     */
    select?: EmailActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAction
     */
    omit?: EmailActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActionInclude<ExtArgs> | null
    /**
     * Filter, which EmailAction to fetch.
     */
    where: EmailActionWhereUniqueInput
  }

  /**
   * EmailAction findFirst
   */
  export type EmailActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAction
     */
    select?: EmailActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAction
     */
    omit?: EmailActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActionInclude<ExtArgs> | null
    /**
     * Filter, which EmailAction to fetch.
     */
    where?: EmailActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailActions to fetch.
     */
    orderBy?: EmailActionOrderByWithRelationInput | EmailActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailActions.
     */
    cursor?: EmailActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailActions.
     */
    distinct?: EmailActionScalarFieldEnum | EmailActionScalarFieldEnum[]
  }

  /**
   * EmailAction findFirstOrThrow
   */
  export type EmailActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAction
     */
    select?: EmailActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAction
     */
    omit?: EmailActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActionInclude<ExtArgs> | null
    /**
     * Filter, which EmailAction to fetch.
     */
    where?: EmailActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailActions to fetch.
     */
    orderBy?: EmailActionOrderByWithRelationInput | EmailActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailActions.
     */
    cursor?: EmailActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailActions.
     */
    distinct?: EmailActionScalarFieldEnum | EmailActionScalarFieldEnum[]
  }

  /**
   * EmailAction findMany
   */
  export type EmailActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAction
     */
    select?: EmailActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAction
     */
    omit?: EmailActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActionInclude<ExtArgs> | null
    /**
     * Filter, which EmailActions to fetch.
     */
    where?: EmailActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailActions to fetch.
     */
    orderBy?: EmailActionOrderByWithRelationInput | EmailActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailActions.
     */
    cursor?: EmailActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailActions.
     */
    skip?: number
    distinct?: EmailActionScalarFieldEnum | EmailActionScalarFieldEnum[]
  }

  /**
   * EmailAction create
   */
  export type EmailActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAction
     */
    select?: EmailActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAction
     */
    omit?: EmailActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActionInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailAction.
     */
    data: XOR<EmailActionCreateInput, EmailActionUncheckedCreateInput>
  }

  /**
   * EmailAction createMany
   */
  export type EmailActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailActions.
     */
    data: EmailActionCreateManyInput | EmailActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailAction createManyAndReturn
   */
  export type EmailActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAction
     */
    select?: EmailActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAction
     */
    omit?: EmailActionOmit<ExtArgs> | null
    /**
     * The data used to create many EmailActions.
     */
    data: EmailActionCreateManyInput | EmailActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailAction update
   */
  export type EmailActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAction
     */
    select?: EmailActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAction
     */
    omit?: EmailActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActionInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailAction.
     */
    data: XOR<EmailActionUpdateInput, EmailActionUncheckedUpdateInput>
    /**
     * Choose, which EmailAction to update.
     */
    where: EmailActionWhereUniqueInput
  }

  /**
   * EmailAction updateMany
   */
  export type EmailActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailActions.
     */
    data: XOR<EmailActionUpdateManyMutationInput, EmailActionUncheckedUpdateManyInput>
    /**
     * Filter which EmailActions to update
     */
    where?: EmailActionWhereInput
    /**
     * Limit how many EmailActions to update.
     */
    limit?: number
  }

  /**
   * EmailAction updateManyAndReturn
   */
  export type EmailActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAction
     */
    select?: EmailActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAction
     */
    omit?: EmailActionOmit<ExtArgs> | null
    /**
     * The data used to update EmailActions.
     */
    data: XOR<EmailActionUpdateManyMutationInput, EmailActionUncheckedUpdateManyInput>
    /**
     * Filter which EmailActions to update
     */
    where?: EmailActionWhereInput
    /**
     * Limit how many EmailActions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailAction upsert
   */
  export type EmailActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAction
     */
    select?: EmailActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAction
     */
    omit?: EmailActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActionInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailAction to update in case it exists.
     */
    where: EmailActionWhereUniqueInput
    /**
     * In case the EmailAction found by the `where` argument doesn't exist, create a new EmailAction with this data.
     */
    create: XOR<EmailActionCreateInput, EmailActionUncheckedCreateInput>
    /**
     * In case the EmailAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailActionUpdateInput, EmailActionUncheckedUpdateInput>
  }

  /**
   * EmailAction delete
   */
  export type EmailActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAction
     */
    select?: EmailActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAction
     */
    omit?: EmailActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActionInclude<ExtArgs> | null
    /**
     * Filter which EmailAction to delete.
     */
    where: EmailActionWhereUniqueInput
  }

  /**
   * EmailAction deleteMany
   */
  export type EmailActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailActions to delete
     */
    where?: EmailActionWhereInput
    /**
     * Limit how many EmailActions to delete.
     */
    limit?: number
  }

  /**
   * EmailAction without action
   */
  export type EmailActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAction
     */
    select?: EmailActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAction
     */
    omit?: EmailActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActionInclude<ExtArgs> | null
  }


  /**
   * Model TelegramAction
   */

  export type AggregateTelegramAction = {
    _count: TelegramActionCountAggregateOutputType | null
    _min: TelegramActionMinAggregateOutputType | null
    _max: TelegramActionMaxAggregateOutputType | null
  }

  export type TelegramActionMinAggregateOutputType = {
    id: string | null
    chatId: string | null
    actionId: string | null
  }

  export type TelegramActionMaxAggregateOutputType = {
    id: string | null
    chatId: string | null
    actionId: string | null
  }

  export type TelegramActionCountAggregateOutputType = {
    id: number
    chatId: number
    actionId: number
    _all: number
  }


  export type TelegramActionMinAggregateInputType = {
    id?: true
    chatId?: true
    actionId?: true
  }

  export type TelegramActionMaxAggregateInputType = {
    id?: true
    chatId?: true
    actionId?: true
  }

  export type TelegramActionCountAggregateInputType = {
    id?: true
    chatId?: true
    actionId?: true
    _all?: true
  }

  export type TelegramActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramAction to aggregate.
     */
    where?: TelegramActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramActions to fetch.
     */
    orderBy?: TelegramActionOrderByWithRelationInput | TelegramActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelegramActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TelegramActions
    **/
    _count?: true | TelegramActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelegramActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelegramActionMaxAggregateInputType
  }

  export type GetTelegramActionAggregateType<T extends TelegramActionAggregateArgs> = {
        [P in keyof T & keyof AggregateTelegramAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelegramAction[P]>
      : GetScalarType<T[P], AggregateTelegramAction[P]>
  }




  export type TelegramActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelegramActionWhereInput
    orderBy?: TelegramActionOrderByWithAggregationInput | TelegramActionOrderByWithAggregationInput[]
    by: TelegramActionScalarFieldEnum[] | TelegramActionScalarFieldEnum
    having?: TelegramActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelegramActionCountAggregateInputType | true
    _min?: TelegramActionMinAggregateInputType
    _max?: TelegramActionMaxAggregateInputType
  }

  export type TelegramActionGroupByOutputType = {
    id: string
    chatId: string
    actionId: string
    _count: TelegramActionCountAggregateOutputType | null
    _min: TelegramActionMinAggregateOutputType | null
    _max: TelegramActionMaxAggregateOutputType | null
  }

  type GetTelegramActionGroupByPayload<T extends TelegramActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelegramActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelegramActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelegramActionGroupByOutputType[P]>
            : GetScalarType<T[P], TelegramActionGroupByOutputType[P]>
        }
      >
    >


  export type TelegramActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    actionId?: boolean
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telegramAction"]>

  export type TelegramActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    actionId?: boolean
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telegramAction"]>

  export type TelegramActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    actionId?: boolean
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telegramAction"]>

  export type TelegramActionSelectScalar = {
    id?: boolean
    chatId?: boolean
    actionId?: boolean
  }

  export type TelegramActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatId" | "actionId", ExtArgs["result"]["telegramAction"]>
  export type TelegramActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }
  export type TelegramActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }
  export type TelegramActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }

  export type $TelegramActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TelegramAction"
    objects: {
      action: Prisma.$ActionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatId: string
      actionId: string
    }, ExtArgs["result"]["telegramAction"]>
    composites: {}
  }

  type TelegramActionGetPayload<S extends boolean | null | undefined | TelegramActionDefaultArgs> = $Result.GetResult<Prisma.$TelegramActionPayload, S>

  type TelegramActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelegramActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelegramActionCountAggregateInputType | true
    }

  export interface TelegramActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TelegramAction'], meta: { name: 'TelegramAction' } }
    /**
     * Find zero or one TelegramAction that matches the filter.
     * @param {TelegramActionFindUniqueArgs} args - Arguments to find a TelegramAction
     * @example
     * // Get one TelegramAction
     * const telegramAction = await prisma.telegramAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelegramActionFindUniqueArgs>(args: SelectSubset<T, TelegramActionFindUniqueArgs<ExtArgs>>): Prisma__TelegramActionClient<$Result.GetResult<Prisma.$TelegramActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TelegramAction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelegramActionFindUniqueOrThrowArgs} args - Arguments to find a TelegramAction
     * @example
     * // Get one TelegramAction
     * const telegramAction = await prisma.telegramAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelegramActionFindUniqueOrThrowArgs>(args: SelectSubset<T, TelegramActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelegramActionClient<$Result.GetResult<Prisma.$TelegramActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramActionFindFirstArgs} args - Arguments to find a TelegramAction
     * @example
     * // Get one TelegramAction
     * const telegramAction = await prisma.telegramAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelegramActionFindFirstArgs>(args?: SelectSubset<T, TelegramActionFindFirstArgs<ExtArgs>>): Prisma__TelegramActionClient<$Result.GetResult<Prisma.$TelegramActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramActionFindFirstOrThrowArgs} args - Arguments to find a TelegramAction
     * @example
     * // Get one TelegramAction
     * const telegramAction = await prisma.telegramAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelegramActionFindFirstOrThrowArgs>(args?: SelectSubset<T, TelegramActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelegramActionClient<$Result.GetResult<Prisma.$TelegramActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TelegramActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TelegramActions
     * const telegramActions = await prisma.telegramAction.findMany()
     * 
     * // Get first 10 TelegramActions
     * const telegramActions = await prisma.telegramAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telegramActionWithIdOnly = await prisma.telegramAction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TelegramActionFindManyArgs>(args?: SelectSubset<T, TelegramActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TelegramAction.
     * @param {TelegramActionCreateArgs} args - Arguments to create a TelegramAction.
     * @example
     * // Create one TelegramAction
     * const TelegramAction = await prisma.telegramAction.create({
     *   data: {
     *     // ... data to create a TelegramAction
     *   }
     * })
     * 
     */
    create<T extends TelegramActionCreateArgs>(args: SelectSubset<T, TelegramActionCreateArgs<ExtArgs>>): Prisma__TelegramActionClient<$Result.GetResult<Prisma.$TelegramActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TelegramActions.
     * @param {TelegramActionCreateManyArgs} args - Arguments to create many TelegramActions.
     * @example
     * // Create many TelegramActions
     * const telegramAction = await prisma.telegramAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelegramActionCreateManyArgs>(args?: SelectSubset<T, TelegramActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TelegramActions and returns the data saved in the database.
     * @param {TelegramActionCreateManyAndReturnArgs} args - Arguments to create many TelegramActions.
     * @example
     * // Create many TelegramActions
     * const telegramAction = await prisma.telegramAction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TelegramActions and only return the `id`
     * const telegramActionWithIdOnly = await prisma.telegramAction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TelegramActionCreateManyAndReturnArgs>(args?: SelectSubset<T, TelegramActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TelegramAction.
     * @param {TelegramActionDeleteArgs} args - Arguments to delete one TelegramAction.
     * @example
     * // Delete one TelegramAction
     * const TelegramAction = await prisma.telegramAction.delete({
     *   where: {
     *     // ... filter to delete one TelegramAction
     *   }
     * })
     * 
     */
    delete<T extends TelegramActionDeleteArgs>(args: SelectSubset<T, TelegramActionDeleteArgs<ExtArgs>>): Prisma__TelegramActionClient<$Result.GetResult<Prisma.$TelegramActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TelegramAction.
     * @param {TelegramActionUpdateArgs} args - Arguments to update one TelegramAction.
     * @example
     * // Update one TelegramAction
     * const telegramAction = await prisma.telegramAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelegramActionUpdateArgs>(args: SelectSubset<T, TelegramActionUpdateArgs<ExtArgs>>): Prisma__TelegramActionClient<$Result.GetResult<Prisma.$TelegramActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TelegramActions.
     * @param {TelegramActionDeleteManyArgs} args - Arguments to filter TelegramActions to delete.
     * @example
     * // Delete a few TelegramActions
     * const { count } = await prisma.telegramAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelegramActionDeleteManyArgs>(args?: SelectSubset<T, TelegramActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TelegramActions
     * const telegramAction = await prisma.telegramAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelegramActionUpdateManyArgs>(args: SelectSubset<T, TelegramActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramActions and returns the data updated in the database.
     * @param {TelegramActionUpdateManyAndReturnArgs} args - Arguments to update many TelegramActions.
     * @example
     * // Update many TelegramActions
     * const telegramAction = await prisma.telegramAction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TelegramActions and only return the `id`
     * const telegramActionWithIdOnly = await prisma.telegramAction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TelegramActionUpdateManyAndReturnArgs>(args: SelectSubset<T, TelegramActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TelegramAction.
     * @param {TelegramActionUpsertArgs} args - Arguments to update or create a TelegramAction.
     * @example
     * // Update or create a TelegramAction
     * const telegramAction = await prisma.telegramAction.upsert({
     *   create: {
     *     // ... data to create a TelegramAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TelegramAction we want to update
     *   }
     * })
     */
    upsert<T extends TelegramActionUpsertArgs>(args: SelectSubset<T, TelegramActionUpsertArgs<ExtArgs>>): Prisma__TelegramActionClient<$Result.GetResult<Prisma.$TelegramActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TelegramActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramActionCountArgs} args - Arguments to filter TelegramActions to count.
     * @example
     * // Count the number of TelegramActions
     * const count = await prisma.telegramAction.count({
     *   where: {
     *     // ... the filter for the TelegramActions we want to count
     *   }
     * })
    **/
    count<T extends TelegramActionCountArgs>(
      args?: Subset<T, TelegramActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelegramActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TelegramAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TelegramActionAggregateArgs>(args: Subset<T, TelegramActionAggregateArgs>): Prisma.PrismaPromise<GetTelegramActionAggregateType<T>>

    /**
     * Group by TelegramAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramActionGroupByArgs} args - Group by arguments.
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
      T extends TelegramActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelegramActionGroupByArgs['orderBy'] }
        : { orderBy?: TelegramActionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TelegramActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelegramActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TelegramAction model
   */
  readonly fields: TelegramActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TelegramAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelegramActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    action<T extends ActionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActionDefaultArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TelegramAction model
   */
  interface TelegramActionFieldRefs {
    readonly id: FieldRef<"TelegramAction", 'String'>
    readonly chatId: FieldRef<"TelegramAction", 'String'>
    readonly actionId: FieldRef<"TelegramAction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TelegramAction findUnique
   */
  export type TelegramActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramAction
     */
    select?: TelegramActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramAction
     */
    omit?: TelegramActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramActionInclude<ExtArgs> | null
    /**
     * Filter, which TelegramAction to fetch.
     */
    where: TelegramActionWhereUniqueInput
  }

  /**
   * TelegramAction findUniqueOrThrow
   */
  export type TelegramActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramAction
     */
    select?: TelegramActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramAction
     */
    omit?: TelegramActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramActionInclude<ExtArgs> | null
    /**
     * Filter, which TelegramAction to fetch.
     */
    where: TelegramActionWhereUniqueInput
  }

  /**
   * TelegramAction findFirst
   */
  export type TelegramActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramAction
     */
    select?: TelegramActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramAction
     */
    omit?: TelegramActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramActionInclude<ExtArgs> | null
    /**
     * Filter, which TelegramAction to fetch.
     */
    where?: TelegramActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramActions to fetch.
     */
    orderBy?: TelegramActionOrderByWithRelationInput | TelegramActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramActions.
     */
    cursor?: TelegramActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramActions.
     */
    distinct?: TelegramActionScalarFieldEnum | TelegramActionScalarFieldEnum[]
  }

  /**
   * TelegramAction findFirstOrThrow
   */
  export type TelegramActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramAction
     */
    select?: TelegramActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramAction
     */
    omit?: TelegramActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramActionInclude<ExtArgs> | null
    /**
     * Filter, which TelegramAction to fetch.
     */
    where?: TelegramActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramActions to fetch.
     */
    orderBy?: TelegramActionOrderByWithRelationInput | TelegramActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramActions.
     */
    cursor?: TelegramActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramActions.
     */
    distinct?: TelegramActionScalarFieldEnum | TelegramActionScalarFieldEnum[]
  }

  /**
   * TelegramAction findMany
   */
  export type TelegramActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramAction
     */
    select?: TelegramActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramAction
     */
    omit?: TelegramActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramActionInclude<ExtArgs> | null
    /**
     * Filter, which TelegramActions to fetch.
     */
    where?: TelegramActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramActions to fetch.
     */
    orderBy?: TelegramActionOrderByWithRelationInput | TelegramActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TelegramActions.
     */
    cursor?: TelegramActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramActions.
     */
    skip?: number
    distinct?: TelegramActionScalarFieldEnum | TelegramActionScalarFieldEnum[]
  }

  /**
   * TelegramAction create
   */
  export type TelegramActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramAction
     */
    select?: TelegramActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramAction
     */
    omit?: TelegramActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramActionInclude<ExtArgs> | null
    /**
     * The data needed to create a TelegramAction.
     */
    data: XOR<TelegramActionCreateInput, TelegramActionUncheckedCreateInput>
  }

  /**
   * TelegramAction createMany
   */
  export type TelegramActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TelegramActions.
     */
    data: TelegramActionCreateManyInput | TelegramActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TelegramAction createManyAndReturn
   */
  export type TelegramActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramAction
     */
    select?: TelegramActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramAction
     */
    omit?: TelegramActionOmit<ExtArgs> | null
    /**
     * The data used to create many TelegramActions.
     */
    data: TelegramActionCreateManyInput | TelegramActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TelegramAction update
   */
  export type TelegramActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramAction
     */
    select?: TelegramActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramAction
     */
    omit?: TelegramActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramActionInclude<ExtArgs> | null
    /**
     * The data needed to update a TelegramAction.
     */
    data: XOR<TelegramActionUpdateInput, TelegramActionUncheckedUpdateInput>
    /**
     * Choose, which TelegramAction to update.
     */
    where: TelegramActionWhereUniqueInput
  }

  /**
   * TelegramAction updateMany
   */
  export type TelegramActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TelegramActions.
     */
    data: XOR<TelegramActionUpdateManyMutationInput, TelegramActionUncheckedUpdateManyInput>
    /**
     * Filter which TelegramActions to update
     */
    where?: TelegramActionWhereInput
    /**
     * Limit how many TelegramActions to update.
     */
    limit?: number
  }

  /**
   * TelegramAction updateManyAndReturn
   */
  export type TelegramActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramAction
     */
    select?: TelegramActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramAction
     */
    omit?: TelegramActionOmit<ExtArgs> | null
    /**
     * The data used to update TelegramActions.
     */
    data: XOR<TelegramActionUpdateManyMutationInput, TelegramActionUncheckedUpdateManyInput>
    /**
     * Filter which TelegramActions to update
     */
    where?: TelegramActionWhereInput
    /**
     * Limit how many TelegramActions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TelegramAction upsert
   */
  export type TelegramActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramAction
     */
    select?: TelegramActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramAction
     */
    omit?: TelegramActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramActionInclude<ExtArgs> | null
    /**
     * The filter to search for the TelegramAction to update in case it exists.
     */
    where: TelegramActionWhereUniqueInput
    /**
     * In case the TelegramAction found by the `where` argument doesn't exist, create a new TelegramAction with this data.
     */
    create: XOR<TelegramActionCreateInput, TelegramActionUncheckedCreateInput>
    /**
     * In case the TelegramAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelegramActionUpdateInput, TelegramActionUncheckedUpdateInput>
  }

  /**
   * TelegramAction delete
   */
  export type TelegramActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramAction
     */
    select?: TelegramActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramAction
     */
    omit?: TelegramActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramActionInclude<ExtArgs> | null
    /**
     * Filter which TelegramAction to delete.
     */
    where: TelegramActionWhereUniqueInput
  }

  /**
   * TelegramAction deleteMany
   */
  export type TelegramActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramActions to delete
     */
    where?: TelegramActionWhereInput
    /**
     * Limit how many TelegramActions to delete.
     */
    limit?: number
  }

  /**
   * TelegramAction without action
   */
  export type TelegramActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramAction
     */
    select?: TelegramActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramAction
     */
    omit?: TelegramActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramActionInclude<ExtArgs> | null
  }


  /**
   * Model WebhookAction
   */

  export type AggregateWebhookAction = {
    _count: WebhookActionCountAggregateOutputType | null
    _min: WebhookActionMinAggregateOutputType | null
    _max: WebhookActionMaxAggregateOutputType | null
  }

  export type WebhookActionMinAggregateOutputType = {
    id: string | null
    url: string | null
    payload: string | null
    actionId: string | null
  }

  export type WebhookActionMaxAggregateOutputType = {
    id: string | null
    url: string | null
    payload: string | null
    actionId: string | null
  }

  export type WebhookActionCountAggregateOutputType = {
    id: number
    url: number
    payload: number
    actionId: number
    _all: number
  }


  export type WebhookActionMinAggregateInputType = {
    id?: true
    url?: true
    payload?: true
    actionId?: true
  }

  export type WebhookActionMaxAggregateInputType = {
    id?: true
    url?: true
    payload?: true
    actionId?: true
  }

  export type WebhookActionCountAggregateInputType = {
    id?: true
    url?: true
    payload?: true
    actionId?: true
    _all?: true
  }

  export type WebhookActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookAction to aggregate.
     */
    where?: WebhookActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookActions to fetch.
     */
    orderBy?: WebhookActionOrderByWithRelationInput | WebhookActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookActions
    **/
    _count?: true | WebhookActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookActionMaxAggregateInputType
  }

  export type GetWebhookActionAggregateType<T extends WebhookActionAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookAction[P]>
      : GetScalarType<T[P], AggregateWebhookAction[P]>
  }




  export type WebhookActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookActionWhereInput
    orderBy?: WebhookActionOrderByWithAggregationInput | WebhookActionOrderByWithAggregationInput[]
    by: WebhookActionScalarFieldEnum[] | WebhookActionScalarFieldEnum
    having?: WebhookActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookActionCountAggregateInputType | true
    _min?: WebhookActionMinAggregateInputType
    _max?: WebhookActionMaxAggregateInputType
  }

  export type WebhookActionGroupByOutputType = {
    id: string
    url: string
    payload: string
    actionId: string
    _count: WebhookActionCountAggregateOutputType | null
    _min: WebhookActionMinAggregateOutputType | null
    _max: WebhookActionMaxAggregateOutputType | null
  }

  type GetWebhookActionGroupByPayload<T extends WebhookActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookActionGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookActionGroupByOutputType[P]>
        }
      >
    >


  export type WebhookActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    payload?: boolean
    actionId?: boolean
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookAction"]>

  export type WebhookActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    payload?: boolean
    actionId?: boolean
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookAction"]>

  export type WebhookActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    payload?: boolean
    actionId?: boolean
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookAction"]>

  export type WebhookActionSelectScalar = {
    id?: boolean
    url?: boolean
    payload?: boolean
    actionId?: boolean
  }

  export type WebhookActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "payload" | "actionId", ExtArgs["result"]["webhookAction"]>
  export type WebhookActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }
  export type WebhookActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }
  export type WebhookActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }

  export type $WebhookActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookAction"
    objects: {
      action: Prisma.$ActionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      payload: string
      actionId: string
    }, ExtArgs["result"]["webhookAction"]>
    composites: {}
  }

  type WebhookActionGetPayload<S extends boolean | null | undefined | WebhookActionDefaultArgs> = $Result.GetResult<Prisma.$WebhookActionPayload, S>

  type WebhookActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookActionCountAggregateInputType | true
    }

  export interface WebhookActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookAction'], meta: { name: 'WebhookAction' } }
    /**
     * Find zero or one WebhookAction that matches the filter.
     * @param {WebhookActionFindUniqueArgs} args - Arguments to find a WebhookAction
     * @example
     * // Get one WebhookAction
     * const webhookAction = await prisma.webhookAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookActionFindUniqueArgs>(args: SelectSubset<T, WebhookActionFindUniqueArgs<ExtArgs>>): Prisma__WebhookActionClient<$Result.GetResult<Prisma.$WebhookActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebhookAction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookActionFindUniqueOrThrowArgs} args - Arguments to find a WebhookAction
     * @example
     * // Get one WebhookAction
     * const webhookAction = await prisma.webhookAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookActionFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookActionClient<$Result.GetResult<Prisma.$WebhookActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookActionFindFirstArgs} args - Arguments to find a WebhookAction
     * @example
     * // Get one WebhookAction
     * const webhookAction = await prisma.webhookAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookActionFindFirstArgs>(args?: SelectSubset<T, WebhookActionFindFirstArgs<ExtArgs>>): Prisma__WebhookActionClient<$Result.GetResult<Prisma.$WebhookActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookActionFindFirstOrThrowArgs} args - Arguments to find a WebhookAction
     * @example
     * // Get one WebhookAction
     * const webhookAction = await prisma.webhookAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookActionFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookActionClient<$Result.GetResult<Prisma.$WebhookActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebhookActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookActions
     * const webhookActions = await prisma.webhookAction.findMany()
     * 
     * // Get first 10 WebhookActions
     * const webhookActions = await prisma.webhookAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookActionWithIdOnly = await prisma.webhookAction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookActionFindManyArgs>(args?: SelectSubset<T, WebhookActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebhookAction.
     * @param {WebhookActionCreateArgs} args - Arguments to create a WebhookAction.
     * @example
     * // Create one WebhookAction
     * const WebhookAction = await prisma.webhookAction.create({
     *   data: {
     *     // ... data to create a WebhookAction
     *   }
     * })
     * 
     */
    create<T extends WebhookActionCreateArgs>(args: SelectSubset<T, WebhookActionCreateArgs<ExtArgs>>): Prisma__WebhookActionClient<$Result.GetResult<Prisma.$WebhookActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebhookActions.
     * @param {WebhookActionCreateManyArgs} args - Arguments to create many WebhookActions.
     * @example
     * // Create many WebhookActions
     * const webhookAction = await prisma.webhookAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookActionCreateManyArgs>(args?: SelectSubset<T, WebhookActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookActions and returns the data saved in the database.
     * @param {WebhookActionCreateManyAndReturnArgs} args - Arguments to create many WebhookActions.
     * @example
     * // Create many WebhookActions
     * const webhookAction = await prisma.webhookAction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookActions and only return the `id`
     * const webhookActionWithIdOnly = await prisma.webhookAction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookActionCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebhookAction.
     * @param {WebhookActionDeleteArgs} args - Arguments to delete one WebhookAction.
     * @example
     * // Delete one WebhookAction
     * const WebhookAction = await prisma.webhookAction.delete({
     *   where: {
     *     // ... filter to delete one WebhookAction
     *   }
     * })
     * 
     */
    delete<T extends WebhookActionDeleteArgs>(args: SelectSubset<T, WebhookActionDeleteArgs<ExtArgs>>): Prisma__WebhookActionClient<$Result.GetResult<Prisma.$WebhookActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebhookAction.
     * @param {WebhookActionUpdateArgs} args - Arguments to update one WebhookAction.
     * @example
     * // Update one WebhookAction
     * const webhookAction = await prisma.webhookAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookActionUpdateArgs>(args: SelectSubset<T, WebhookActionUpdateArgs<ExtArgs>>): Prisma__WebhookActionClient<$Result.GetResult<Prisma.$WebhookActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebhookActions.
     * @param {WebhookActionDeleteManyArgs} args - Arguments to filter WebhookActions to delete.
     * @example
     * // Delete a few WebhookActions
     * const { count } = await prisma.webhookAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookActionDeleteManyArgs>(args?: SelectSubset<T, WebhookActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookActions
     * const webhookAction = await prisma.webhookAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookActionUpdateManyArgs>(args: SelectSubset<T, WebhookActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookActions and returns the data updated in the database.
     * @param {WebhookActionUpdateManyAndReturnArgs} args - Arguments to update many WebhookActions.
     * @example
     * // Update many WebhookActions
     * const webhookAction = await prisma.webhookAction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebhookActions and only return the `id`
     * const webhookActionWithIdOnly = await prisma.webhookAction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebhookActionUpdateManyAndReturnArgs>(args: SelectSubset<T, WebhookActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebhookAction.
     * @param {WebhookActionUpsertArgs} args - Arguments to update or create a WebhookAction.
     * @example
     * // Update or create a WebhookAction
     * const webhookAction = await prisma.webhookAction.upsert({
     *   create: {
     *     // ... data to create a WebhookAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookAction we want to update
     *   }
     * })
     */
    upsert<T extends WebhookActionUpsertArgs>(args: SelectSubset<T, WebhookActionUpsertArgs<ExtArgs>>): Prisma__WebhookActionClient<$Result.GetResult<Prisma.$WebhookActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebhookActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookActionCountArgs} args - Arguments to filter WebhookActions to count.
     * @example
     * // Count the number of WebhookActions
     * const count = await prisma.webhookAction.count({
     *   where: {
     *     // ... the filter for the WebhookActions we want to count
     *   }
     * })
    **/
    count<T extends WebhookActionCountArgs>(
      args?: Subset<T, WebhookActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebhookActionAggregateArgs>(args: Subset<T, WebhookActionAggregateArgs>): Prisma.PrismaPromise<GetWebhookActionAggregateType<T>>

    /**
     * Group by WebhookAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookActionGroupByArgs} args - Group by arguments.
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
      T extends WebhookActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookActionGroupByArgs['orderBy'] }
        : { orderBy?: WebhookActionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebhookActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookAction model
   */
  readonly fields: WebhookActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    action<T extends ActionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActionDefaultArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WebhookAction model
   */
  interface WebhookActionFieldRefs {
    readonly id: FieldRef<"WebhookAction", 'String'>
    readonly url: FieldRef<"WebhookAction", 'String'>
    readonly payload: FieldRef<"WebhookAction", 'String'>
    readonly actionId: FieldRef<"WebhookAction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WebhookAction findUnique
   */
  export type WebhookActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookAction
     */
    select?: WebhookActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookAction
     */
    omit?: WebhookActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookActionInclude<ExtArgs> | null
    /**
     * Filter, which WebhookAction to fetch.
     */
    where: WebhookActionWhereUniqueInput
  }

  /**
   * WebhookAction findUniqueOrThrow
   */
  export type WebhookActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookAction
     */
    select?: WebhookActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookAction
     */
    omit?: WebhookActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookActionInclude<ExtArgs> | null
    /**
     * Filter, which WebhookAction to fetch.
     */
    where: WebhookActionWhereUniqueInput
  }

  /**
   * WebhookAction findFirst
   */
  export type WebhookActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookAction
     */
    select?: WebhookActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookAction
     */
    omit?: WebhookActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookActionInclude<ExtArgs> | null
    /**
     * Filter, which WebhookAction to fetch.
     */
    where?: WebhookActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookActions to fetch.
     */
    orderBy?: WebhookActionOrderByWithRelationInput | WebhookActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookActions.
     */
    cursor?: WebhookActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookActions.
     */
    distinct?: WebhookActionScalarFieldEnum | WebhookActionScalarFieldEnum[]
  }

  /**
   * WebhookAction findFirstOrThrow
   */
  export type WebhookActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookAction
     */
    select?: WebhookActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookAction
     */
    omit?: WebhookActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookActionInclude<ExtArgs> | null
    /**
     * Filter, which WebhookAction to fetch.
     */
    where?: WebhookActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookActions to fetch.
     */
    orderBy?: WebhookActionOrderByWithRelationInput | WebhookActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookActions.
     */
    cursor?: WebhookActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookActions.
     */
    distinct?: WebhookActionScalarFieldEnum | WebhookActionScalarFieldEnum[]
  }

  /**
   * WebhookAction findMany
   */
  export type WebhookActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookAction
     */
    select?: WebhookActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookAction
     */
    omit?: WebhookActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookActionInclude<ExtArgs> | null
    /**
     * Filter, which WebhookActions to fetch.
     */
    where?: WebhookActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookActions to fetch.
     */
    orderBy?: WebhookActionOrderByWithRelationInput | WebhookActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookActions.
     */
    cursor?: WebhookActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookActions.
     */
    skip?: number
    distinct?: WebhookActionScalarFieldEnum | WebhookActionScalarFieldEnum[]
  }

  /**
   * WebhookAction create
   */
  export type WebhookActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookAction
     */
    select?: WebhookActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookAction
     */
    omit?: WebhookActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookActionInclude<ExtArgs> | null
    /**
     * The data needed to create a WebhookAction.
     */
    data: XOR<WebhookActionCreateInput, WebhookActionUncheckedCreateInput>
  }

  /**
   * WebhookAction createMany
   */
  export type WebhookActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookActions.
     */
    data: WebhookActionCreateManyInput | WebhookActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookAction createManyAndReturn
   */
  export type WebhookActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookAction
     */
    select?: WebhookActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookAction
     */
    omit?: WebhookActionOmit<ExtArgs> | null
    /**
     * The data used to create many WebhookActions.
     */
    data: WebhookActionCreateManyInput | WebhookActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookAction update
   */
  export type WebhookActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookAction
     */
    select?: WebhookActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookAction
     */
    omit?: WebhookActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookActionInclude<ExtArgs> | null
    /**
     * The data needed to update a WebhookAction.
     */
    data: XOR<WebhookActionUpdateInput, WebhookActionUncheckedUpdateInput>
    /**
     * Choose, which WebhookAction to update.
     */
    where: WebhookActionWhereUniqueInput
  }

  /**
   * WebhookAction updateMany
   */
  export type WebhookActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookActions.
     */
    data: XOR<WebhookActionUpdateManyMutationInput, WebhookActionUncheckedUpdateManyInput>
    /**
     * Filter which WebhookActions to update
     */
    where?: WebhookActionWhereInput
    /**
     * Limit how many WebhookActions to update.
     */
    limit?: number
  }

  /**
   * WebhookAction updateManyAndReturn
   */
  export type WebhookActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookAction
     */
    select?: WebhookActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookAction
     */
    omit?: WebhookActionOmit<ExtArgs> | null
    /**
     * The data used to update WebhookActions.
     */
    data: XOR<WebhookActionUpdateManyMutationInput, WebhookActionUncheckedUpdateManyInput>
    /**
     * Filter which WebhookActions to update
     */
    where?: WebhookActionWhereInput
    /**
     * Limit how many WebhookActions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookAction upsert
   */
  export type WebhookActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookAction
     */
    select?: WebhookActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookAction
     */
    omit?: WebhookActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookActionInclude<ExtArgs> | null
    /**
     * The filter to search for the WebhookAction to update in case it exists.
     */
    where: WebhookActionWhereUniqueInput
    /**
     * In case the WebhookAction found by the `where` argument doesn't exist, create a new WebhookAction with this data.
     */
    create: XOR<WebhookActionCreateInput, WebhookActionUncheckedCreateInput>
    /**
     * In case the WebhookAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookActionUpdateInput, WebhookActionUncheckedUpdateInput>
  }

  /**
   * WebhookAction delete
   */
  export type WebhookActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookAction
     */
    select?: WebhookActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookAction
     */
    omit?: WebhookActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookActionInclude<ExtArgs> | null
    /**
     * Filter which WebhookAction to delete.
     */
    where: WebhookActionWhereUniqueInput
  }

  /**
   * WebhookAction deleteMany
   */
  export type WebhookActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookActions to delete
     */
    where?: WebhookActionWhereInput
    /**
     * Limit how many WebhookActions to delete.
     */
    limit?: number
  }

  /**
   * WebhookAction without action
   */
  export type WebhookActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookAction
     */
    select?: WebhookActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookAction
     */
    omit?: WebhookActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookActionInclude<ExtArgs> | null
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
    username: 'username',
    email: 'email',
    profile: 'profile',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    key: 'key',
    initial: 'initial',
    userId: 'userId',
    type: 'type',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    deviceType: 'deviceType',
    deviceAuthToken: 'deviceAuthToken',
    projectId: 'projectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const DataStreamScalarFieldEnum: {
    id: 'id',
    deviceId: 'deviceId',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DataStreamScalarFieldEnum = (typeof DataStreamScalarFieldEnum)[keyof typeof DataStreamScalarFieldEnum]


  export const DataPointScalarFieldEnum: {
    id: 'id',
    dataStreamId: 'dataStreamId',
    value: 'value',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type DataPointScalarFieldEnum = (typeof DataPointScalarFieldEnum)[keyof typeof DataPointScalarFieldEnum]


  export const RuleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    active: 'active',
    attempts: 'attempts',
    userId: 'userId'
  };

  export type RuleScalarFieldEnum = (typeof RuleScalarFieldEnum)[keyof typeof RuleScalarFieldEnum]


  export const ActionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    active: 'active',
    retries: 'retries',
    triggerLimit: 'triggerLimit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ruleId: 'ruleId',
    userId: 'userId'
  };

  export type ActionScalarFieldEnum = (typeof ActionScalarFieldEnum)[keyof typeof ActionScalarFieldEnum]


  export const EmailActionScalarFieldEnum: {
    id: 'id',
    receiverEmail: 'receiverEmail',
    content: 'content',
    actionId: 'actionId'
  };

  export type EmailActionScalarFieldEnum = (typeof EmailActionScalarFieldEnum)[keyof typeof EmailActionScalarFieldEnum]


  export const TelegramActionScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    actionId: 'actionId'
  };

  export type TelegramActionScalarFieldEnum = (typeof TelegramActionScalarFieldEnum)[keyof typeof TelegramActionScalarFieldEnum]


  export const WebhookActionScalarFieldEnum: {
    id: 'id',
    url: 'url',
    payload: 'payload',
    actionId: 'actionId'
  };

  export type WebhookActionScalarFieldEnum = (typeof WebhookActionScalarFieldEnum)[keyof typeof WebhookActionScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ApiKeyType'
   */
  export type EnumApiKeyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApiKeyType'>
    


  /**
   * Reference to a field of type 'ApiKeyType[]'
   */
  export type ListEnumApiKeyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApiKeyType[]'>
    


  /**
   * Reference to a field of type 'DeviceType'
   */
  export type EnumDeviceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceType'>
    


  /**
   * Reference to a field of type 'DeviceType[]'
   */
  export type ListEnumDeviceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ActionType'
   */
  export type EnumActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActionType'>
    


  /**
   * Reference to a field of type 'ActionType[]'
   */
  export type ListEnumActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActionType[]'>
    


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
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    profile?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    api_keys?: ApiKeyListRelationFilter
    projects?: ProjectListRelationFilter
    rules?: RuleListRelationFilter
    actions?: ActionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    profile?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    api_keys?: ApiKeyOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    rules?: RuleOrderByRelationAggregateInput
    actions?: ActionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    profile?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    api_keys?: ApiKeyListRelationFilter
    projects?: ProjectListRelationFilter
    rules?: RuleListRelationFilter
    actions?: ActionListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    profile?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    profile?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    key?: StringFilter<"ApiKey"> | string
    initial?: StringFilter<"ApiKey"> | string
    userId?: StringFilter<"ApiKey"> | string
    type?: EnumApiKeyTypeFilter<"ApiKey"> | $Enums.ApiKeyType
    name?: StringFilter<"ApiKey"> | string
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    initial?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    key?: StringFilter<"ApiKey"> | string
    initial?: StringFilter<"ApiKey"> | string
    userId?: StringFilter<"ApiKey"> | string
    type?: EnumApiKeyTypeFilter<"ApiKey"> | $Enums.ApiKeyType
    name?: StringFilter<"ApiKey"> | string
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    initial?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    key?: StringWithAggregatesFilter<"ApiKey"> | string
    initial?: StringWithAggregatesFilter<"ApiKey"> | string
    userId?: StringWithAggregatesFilter<"ApiKey"> | string
    type?: EnumApiKeyTypeWithAggregatesFilter<"ApiKey"> | $Enums.ApiKeyType
    name?: StringWithAggregatesFilter<"ApiKey"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    devices?: DeviceListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
    devices?: DeviceOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    userId?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    devices?: DeviceListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    userId?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    description?: StringFilter<"Device"> | string
    deviceType?: EnumDeviceTypeFilter<"Device"> | $Enums.DeviceType
    deviceAuthToken?: StringFilter<"Device"> | string
    projectId?: StringFilter<"Device"> | string
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    Project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    dataStreams?: DataStreamListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    deviceType?: SortOrder
    deviceAuthToken?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Project?: ProjectOrderByWithRelationInput
    dataStreams?: DataStreamOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    name?: StringFilter<"Device"> | string
    description?: StringFilter<"Device"> | string
    deviceType?: EnumDeviceTypeFilter<"Device"> | $Enums.DeviceType
    deviceAuthToken?: StringFilter<"Device"> | string
    projectId?: StringFilter<"Device"> | string
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    Project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    dataStreams?: DataStreamListRelationFilter
  }, "id">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    deviceType?: SortOrder
    deviceAuthToken?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Device"> | string
    name?: StringWithAggregatesFilter<"Device"> | string
    description?: StringWithAggregatesFilter<"Device"> | string
    deviceType?: EnumDeviceTypeWithAggregatesFilter<"Device"> | $Enums.DeviceType
    deviceAuthToken?: StringWithAggregatesFilter<"Device"> | string
    projectId?: StringWithAggregatesFilter<"Device"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
  }

  export type DataStreamWhereInput = {
    AND?: DataStreamWhereInput | DataStreamWhereInput[]
    OR?: DataStreamWhereInput[]
    NOT?: DataStreamWhereInput | DataStreamWhereInput[]
    id?: StringFilter<"DataStream"> | string
    deviceId?: StringFilter<"DataStream"> | string
    title?: StringFilter<"DataStream"> | string
    description?: StringFilter<"DataStream"> | string
    createdAt?: DateTimeFilter<"DataStream"> | Date | string
    updatedAt?: DateTimeFilter<"DataStream"> | Date | string
    Device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    dataPoints?: DataPointListRelationFilter
  }

  export type DataStreamOrderByWithRelationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Device?: DeviceOrderByWithRelationInput
    dataPoints?: DataPointOrderByRelationAggregateInput
  }

  export type DataStreamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: DataStreamWhereInput | DataStreamWhereInput[]
    OR?: DataStreamWhereInput[]
    NOT?: DataStreamWhereInput | DataStreamWhereInput[]
    deviceId?: StringFilter<"DataStream"> | string
    description?: StringFilter<"DataStream"> | string
    createdAt?: DateTimeFilter<"DataStream"> | Date | string
    updatedAt?: DateTimeFilter<"DataStream"> | Date | string
    Device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    dataPoints?: DataPointListRelationFilter
  }, "id" | "title">

  export type DataStreamOrderByWithAggregationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DataStreamCountOrderByAggregateInput
    _max?: DataStreamMaxOrderByAggregateInput
    _min?: DataStreamMinOrderByAggregateInput
  }

  export type DataStreamScalarWhereWithAggregatesInput = {
    AND?: DataStreamScalarWhereWithAggregatesInput | DataStreamScalarWhereWithAggregatesInput[]
    OR?: DataStreamScalarWhereWithAggregatesInput[]
    NOT?: DataStreamScalarWhereWithAggregatesInput | DataStreamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DataStream"> | string
    deviceId?: StringWithAggregatesFilter<"DataStream"> | string
    title?: StringWithAggregatesFilter<"DataStream"> | string
    description?: StringWithAggregatesFilter<"DataStream"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DataStream"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DataStream"> | Date | string
  }

  export type DataPointWhereInput = {
    AND?: DataPointWhereInput | DataPointWhereInput[]
    OR?: DataPointWhereInput[]
    NOT?: DataPointWhereInput | DataPointWhereInput[]
    id?: StringFilter<"DataPoint"> | string
    dataStreamId?: StringFilter<"DataPoint"> | string
    value?: StringFilter<"DataPoint"> | string
    type?: StringFilter<"DataPoint"> | string
    createdAt?: DateTimeFilter<"DataPoint"> | Date | string
    dataStream?: XOR<DataStreamScalarRelationFilter, DataStreamWhereInput>
  }

  export type DataPointOrderByWithRelationInput = {
    id?: SortOrder
    dataStreamId?: SortOrder
    value?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    dataStream?: DataStreamOrderByWithRelationInput
  }

  export type DataPointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DataPointWhereInput | DataPointWhereInput[]
    OR?: DataPointWhereInput[]
    NOT?: DataPointWhereInput | DataPointWhereInput[]
    dataStreamId?: StringFilter<"DataPoint"> | string
    value?: StringFilter<"DataPoint"> | string
    type?: StringFilter<"DataPoint"> | string
    createdAt?: DateTimeFilter<"DataPoint"> | Date | string
    dataStream?: XOR<DataStreamScalarRelationFilter, DataStreamWhereInput>
  }, "id">

  export type DataPointOrderByWithAggregationInput = {
    id?: SortOrder
    dataStreamId?: SortOrder
    value?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: DataPointCountOrderByAggregateInput
    _max?: DataPointMaxOrderByAggregateInput
    _min?: DataPointMinOrderByAggregateInput
  }

  export type DataPointScalarWhereWithAggregatesInput = {
    AND?: DataPointScalarWhereWithAggregatesInput | DataPointScalarWhereWithAggregatesInput[]
    OR?: DataPointScalarWhereWithAggregatesInput[]
    NOT?: DataPointScalarWhereWithAggregatesInput | DataPointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DataPoint"> | string
    dataStreamId?: StringWithAggregatesFilter<"DataPoint"> | string
    value?: StringWithAggregatesFilter<"DataPoint"> | string
    type?: StringWithAggregatesFilter<"DataPoint"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DataPoint"> | Date | string
  }

  export type RuleWhereInput = {
    AND?: RuleWhereInput | RuleWhereInput[]
    OR?: RuleWhereInput[]
    NOT?: RuleWhereInput | RuleWhereInput[]
    id?: StringFilter<"Rule"> | string
    name?: StringFilter<"Rule"> | string
    description?: StringNullableFilter<"Rule"> | string | null
    createdAt?: DateTimeFilter<"Rule"> | Date | string
    updatedAt?: DateTimeFilter<"Rule"> | Date | string
    active?: BoolFilter<"Rule"> | boolean
    attempts?: IntFilter<"Rule"> | number
    userId?: StringNullableFilter<"Rule"> | string | null
    actions?: ActionListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type RuleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    attempts?: SortOrder
    userId?: SortOrderInput | SortOrder
    actions?: ActionOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type RuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RuleWhereInput | RuleWhereInput[]
    OR?: RuleWhereInput[]
    NOT?: RuleWhereInput | RuleWhereInput[]
    name?: StringFilter<"Rule"> | string
    description?: StringNullableFilter<"Rule"> | string | null
    createdAt?: DateTimeFilter<"Rule"> | Date | string
    updatedAt?: DateTimeFilter<"Rule"> | Date | string
    active?: BoolFilter<"Rule"> | boolean
    attempts?: IntFilter<"Rule"> | number
    userId?: StringNullableFilter<"Rule"> | string | null
    actions?: ActionListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type RuleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    attempts?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: RuleCountOrderByAggregateInput
    _avg?: RuleAvgOrderByAggregateInput
    _max?: RuleMaxOrderByAggregateInput
    _min?: RuleMinOrderByAggregateInput
    _sum?: RuleSumOrderByAggregateInput
  }

  export type RuleScalarWhereWithAggregatesInput = {
    AND?: RuleScalarWhereWithAggregatesInput | RuleScalarWhereWithAggregatesInput[]
    OR?: RuleScalarWhereWithAggregatesInput[]
    NOT?: RuleScalarWhereWithAggregatesInput | RuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rule"> | string
    name?: StringWithAggregatesFilter<"Rule"> | string
    description?: StringNullableWithAggregatesFilter<"Rule"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Rule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rule"> | Date | string
    active?: BoolWithAggregatesFilter<"Rule"> | boolean
    attempts?: IntWithAggregatesFilter<"Rule"> | number
    userId?: StringNullableWithAggregatesFilter<"Rule"> | string | null
  }

  export type ActionWhereInput = {
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    id?: StringFilter<"Action"> | string
    name?: StringFilter<"Action"> | string
    type?: EnumActionTypeFilter<"Action"> | $Enums.ActionType
    active?: BoolFilter<"Action"> | boolean
    retries?: IntFilter<"Action"> | number
    triggerLimit?: IntFilter<"Action"> | number
    createdAt?: DateTimeFilter<"Action"> | Date | string
    updatedAt?: DateTimeFilter<"Action"> | Date | string
    ruleId?: StringNullableFilter<"Action"> | string | null
    userId?: StringFilter<"Action"> | string
    Rule?: XOR<RuleNullableScalarRelationFilter, RuleWhereInput> | null
    emailAction?: XOR<EmailActionNullableScalarRelationFilter, EmailActionWhereInput> | null
    telegramAction?: XOR<TelegramActionNullableScalarRelationFilter, TelegramActionWhereInput> | null
    webhookAction?: XOR<WebhookActionNullableScalarRelationFilter, WebhookActionWhereInput> | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ActionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    active?: SortOrder
    retries?: SortOrder
    triggerLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ruleId?: SortOrderInput | SortOrder
    userId?: SortOrder
    Rule?: RuleOrderByWithRelationInput
    emailAction?: EmailActionOrderByWithRelationInput
    telegramAction?: TelegramActionOrderByWithRelationInput
    webhookAction?: WebhookActionOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type ActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    name?: StringFilter<"Action"> | string
    type?: EnumActionTypeFilter<"Action"> | $Enums.ActionType
    active?: BoolFilter<"Action"> | boolean
    retries?: IntFilter<"Action"> | number
    triggerLimit?: IntFilter<"Action"> | number
    createdAt?: DateTimeFilter<"Action"> | Date | string
    updatedAt?: DateTimeFilter<"Action"> | Date | string
    ruleId?: StringNullableFilter<"Action"> | string | null
    userId?: StringFilter<"Action"> | string
    Rule?: XOR<RuleNullableScalarRelationFilter, RuleWhereInput> | null
    emailAction?: XOR<EmailActionNullableScalarRelationFilter, EmailActionWhereInput> | null
    telegramAction?: XOR<TelegramActionNullableScalarRelationFilter, TelegramActionWhereInput> | null
    webhookAction?: XOR<WebhookActionNullableScalarRelationFilter, WebhookActionWhereInput> | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ActionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    active?: SortOrder
    retries?: SortOrder
    triggerLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ruleId?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: ActionCountOrderByAggregateInput
    _avg?: ActionAvgOrderByAggregateInput
    _max?: ActionMaxOrderByAggregateInput
    _min?: ActionMinOrderByAggregateInput
    _sum?: ActionSumOrderByAggregateInput
  }

  export type ActionScalarWhereWithAggregatesInput = {
    AND?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    OR?: ActionScalarWhereWithAggregatesInput[]
    NOT?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Action"> | string
    name?: StringWithAggregatesFilter<"Action"> | string
    type?: EnumActionTypeWithAggregatesFilter<"Action"> | $Enums.ActionType
    active?: BoolWithAggregatesFilter<"Action"> | boolean
    retries?: IntWithAggregatesFilter<"Action"> | number
    triggerLimit?: IntWithAggregatesFilter<"Action"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Action"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Action"> | Date | string
    ruleId?: StringNullableWithAggregatesFilter<"Action"> | string | null
    userId?: StringWithAggregatesFilter<"Action"> | string
  }

  export type EmailActionWhereInput = {
    AND?: EmailActionWhereInput | EmailActionWhereInput[]
    OR?: EmailActionWhereInput[]
    NOT?: EmailActionWhereInput | EmailActionWhereInput[]
    id?: StringFilter<"EmailAction"> | string
    receiverEmail?: StringFilter<"EmailAction"> | string
    content?: StringFilter<"EmailAction"> | string
    actionId?: StringFilter<"EmailAction"> | string
    action?: XOR<ActionScalarRelationFilter, ActionWhereInput>
  }

  export type EmailActionOrderByWithRelationInput = {
    id?: SortOrder
    receiverEmail?: SortOrder
    content?: SortOrder
    actionId?: SortOrder
    action?: ActionOrderByWithRelationInput
  }

  export type EmailActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    actionId?: string
    AND?: EmailActionWhereInput | EmailActionWhereInput[]
    OR?: EmailActionWhereInput[]
    NOT?: EmailActionWhereInput | EmailActionWhereInput[]
    receiverEmail?: StringFilter<"EmailAction"> | string
    content?: StringFilter<"EmailAction"> | string
    action?: XOR<ActionScalarRelationFilter, ActionWhereInput>
  }, "id" | "actionId">

  export type EmailActionOrderByWithAggregationInput = {
    id?: SortOrder
    receiverEmail?: SortOrder
    content?: SortOrder
    actionId?: SortOrder
    _count?: EmailActionCountOrderByAggregateInput
    _max?: EmailActionMaxOrderByAggregateInput
    _min?: EmailActionMinOrderByAggregateInput
  }

  export type EmailActionScalarWhereWithAggregatesInput = {
    AND?: EmailActionScalarWhereWithAggregatesInput | EmailActionScalarWhereWithAggregatesInput[]
    OR?: EmailActionScalarWhereWithAggregatesInput[]
    NOT?: EmailActionScalarWhereWithAggregatesInput | EmailActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailAction"> | string
    receiverEmail?: StringWithAggregatesFilter<"EmailAction"> | string
    content?: StringWithAggregatesFilter<"EmailAction"> | string
    actionId?: StringWithAggregatesFilter<"EmailAction"> | string
  }

  export type TelegramActionWhereInput = {
    AND?: TelegramActionWhereInput | TelegramActionWhereInput[]
    OR?: TelegramActionWhereInput[]
    NOT?: TelegramActionWhereInput | TelegramActionWhereInput[]
    id?: StringFilter<"TelegramAction"> | string
    chatId?: StringFilter<"TelegramAction"> | string
    actionId?: StringFilter<"TelegramAction"> | string
    action?: XOR<ActionScalarRelationFilter, ActionWhereInput>
  }

  export type TelegramActionOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    actionId?: SortOrder
    action?: ActionOrderByWithRelationInput
  }

  export type TelegramActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    actionId?: string
    AND?: TelegramActionWhereInput | TelegramActionWhereInput[]
    OR?: TelegramActionWhereInput[]
    NOT?: TelegramActionWhereInput | TelegramActionWhereInput[]
    chatId?: StringFilter<"TelegramAction"> | string
    action?: XOR<ActionScalarRelationFilter, ActionWhereInput>
  }, "id" | "actionId">

  export type TelegramActionOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    actionId?: SortOrder
    _count?: TelegramActionCountOrderByAggregateInput
    _max?: TelegramActionMaxOrderByAggregateInput
    _min?: TelegramActionMinOrderByAggregateInput
  }

  export type TelegramActionScalarWhereWithAggregatesInput = {
    AND?: TelegramActionScalarWhereWithAggregatesInput | TelegramActionScalarWhereWithAggregatesInput[]
    OR?: TelegramActionScalarWhereWithAggregatesInput[]
    NOT?: TelegramActionScalarWhereWithAggregatesInput | TelegramActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TelegramAction"> | string
    chatId?: StringWithAggregatesFilter<"TelegramAction"> | string
    actionId?: StringWithAggregatesFilter<"TelegramAction"> | string
  }

  export type WebhookActionWhereInput = {
    AND?: WebhookActionWhereInput | WebhookActionWhereInput[]
    OR?: WebhookActionWhereInput[]
    NOT?: WebhookActionWhereInput | WebhookActionWhereInput[]
    id?: StringFilter<"WebhookAction"> | string
    url?: StringFilter<"WebhookAction"> | string
    payload?: StringFilter<"WebhookAction"> | string
    actionId?: StringFilter<"WebhookAction"> | string
    action?: XOR<ActionScalarRelationFilter, ActionWhereInput>
  }

  export type WebhookActionOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    payload?: SortOrder
    actionId?: SortOrder
    action?: ActionOrderByWithRelationInput
  }

  export type WebhookActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    actionId?: string
    AND?: WebhookActionWhereInput | WebhookActionWhereInput[]
    OR?: WebhookActionWhereInput[]
    NOT?: WebhookActionWhereInput | WebhookActionWhereInput[]
    url?: StringFilter<"WebhookAction"> | string
    payload?: StringFilter<"WebhookAction"> | string
    action?: XOR<ActionScalarRelationFilter, ActionWhereInput>
  }, "id" | "actionId">

  export type WebhookActionOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    payload?: SortOrder
    actionId?: SortOrder
    _count?: WebhookActionCountOrderByAggregateInput
    _max?: WebhookActionMaxOrderByAggregateInput
    _min?: WebhookActionMinOrderByAggregateInput
  }

  export type WebhookActionScalarWhereWithAggregatesInput = {
    AND?: WebhookActionScalarWhereWithAggregatesInput | WebhookActionScalarWhereWithAggregatesInput[]
    OR?: WebhookActionScalarWhereWithAggregatesInput[]
    NOT?: WebhookActionScalarWhereWithAggregatesInput | WebhookActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookAction"> | string
    url?: StringWithAggregatesFilter<"WebhookAction"> | string
    payload?: StringWithAggregatesFilter<"WebhookAction"> | string
    actionId?: StringWithAggregatesFilter<"WebhookAction"> | string
  }

  export type UserCreateInput = {
    id: string
    username: string
    email: string
    profile: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    api_keys?: ApiKeyCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    rules?: RuleCreateNestedManyWithoutUserInput
    actions?: ActionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    username: string
    email: string
    profile: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    api_keys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    rules?: RuleUncheckedCreateNestedManyWithoutUserInput
    actions?: ActionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    api_keys?: ApiKeyUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    rules?: RuleUpdateManyWithoutUserNestedInput
    actions?: ActionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    api_keys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    rules?: RuleUncheckedUpdateManyWithoutUserNestedInput
    actions?: ActionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    username: string
    email: string
    profile: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    key: string
    initial: string
    type: $Enums.ApiKeyType
    name?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutApi_keysInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    key: string
    initial: string
    userId: string
    type: $Enums.ApiKeyType
    name?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    initial?: StringFieldUpdateOperationsInput | string
    type?: EnumApiKeyTypeFieldUpdateOperationsInput | $Enums.ApiKeyType
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutApi_keysNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    initial?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumApiKeyTypeFieldUpdateOperationsInput | $Enums.ApiKeyType
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    key: string
    initial: string
    userId: string
    type: $Enums.ApiKeyType
    name?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    initial?: StringFieldUpdateOperationsInput | string
    type?: EnumApiKeyTypeFieldUpdateOperationsInput | $Enums.ApiKeyType
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    initial?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumApiKeyTypeFieldUpdateOperationsInput | $Enums.ApiKeyType
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    title?: string
    description?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutProjectsInput
    devices?: DeviceCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    userId: string
    title?: string
    description?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutProjectsNestedInput
    devices?: DeviceUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    userId: string
    title?: string
    description?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateInput = {
    id?: string
    name: string
    description: string
    deviceType: $Enums.DeviceType
    deviceAuthToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Project: ProjectCreateNestedOneWithoutDevicesInput
    dataStreams?: DataStreamCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    deviceType: $Enums.DeviceType
    deviceAuthToken: string
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dataStreams?: DataStreamUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    deviceAuthToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Project?: ProjectUpdateOneRequiredWithoutDevicesNestedInput
    dataStreams?: DataStreamUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    deviceAuthToken?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataStreams?: DataStreamUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id?: string
    name: string
    description: string
    deviceType: $Enums.DeviceType
    deviceAuthToken: string
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    deviceAuthToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    deviceAuthToken?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataStreamCreateInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Device: DeviceCreateNestedOneWithoutDataStreamsInput
    dataPoints?: DataPointCreateNestedManyWithoutDataStreamInput
  }

  export type DataStreamUncheckedCreateInput = {
    id?: string
    deviceId: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dataPoints?: DataPointUncheckedCreateNestedManyWithoutDataStreamInput
  }

  export type DataStreamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Device?: DeviceUpdateOneRequiredWithoutDataStreamsNestedInput
    dataPoints?: DataPointUpdateManyWithoutDataStreamNestedInput
  }

  export type DataStreamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPoints?: DataPointUncheckedUpdateManyWithoutDataStreamNestedInput
  }

  export type DataStreamCreateManyInput = {
    id?: string
    deviceId: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataStreamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataStreamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataPointCreateInput = {
    id?: string
    value: string
    type: string
    createdAt?: Date | string
    dataStream: DataStreamCreateNestedOneWithoutDataPointsInput
  }

  export type DataPointUncheckedCreateInput = {
    id?: string
    dataStreamId: string
    value: string
    type: string
    createdAt?: Date | string
  }

  export type DataPointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataStream?: DataStreamUpdateOneRequiredWithoutDataPointsNestedInput
  }

  export type DataPointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataStreamId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataPointCreateManyInput = {
    id?: string
    dataStreamId: string
    value: string
    type: string
    createdAt?: Date | string
  }

  export type DataPointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataPointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataStreamId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RuleCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    active: boolean
    attempts: number
    actions?: ActionCreateNestedManyWithoutRuleInput
    User?: UserCreateNestedOneWithoutRulesInput
  }

  export type RuleUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    active: boolean
    attempts: number
    userId?: string | null
    actions?: ActionUncheckedCreateNestedManyWithoutRuleInput
  }

  export type RuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    actions?: ActionUpdateManyWithoutRuleNestedInput
    User?: UserUpdateOneWithoutRulesNestedInput
  }

  export type RuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    actions?: ActionUncheckedUpdateManyWithoutRuleNestedInput
  }

  export type RuleCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    active: boolean
    attempts: number
    userId?: string | null
  }

  export type RuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
  }

  export type RuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActionCreateInput = {
    id?: string
    name: string
    type: $Enums.ActionType
    active: boolean
    retries: number
    triggerLimit: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Rule?: RuleCreateNestedOneWithoutActionsInput
    emailAction?: EmailActionCreateNestedOneWithoutActionInput
    telegramAction?: TelegramActionCreateNestedOneWithoutActionInput
    webhookAction?: WebhookActionCreateNestedOneWithoutActionInput
    User: UserCreateNestedOneWithoutActionsInput
  }

  export type ActionUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.ActionType
    active: boolean
    retries: number
    triggerLimit: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ruleId?: string | null
    userId: string
    emailAction?: EmailActionUncheckedCreateNestedOneWithoutActionInput
    telegramAction?: TelegramActionUncheckedCreateNestedOneWithoutActionInput
    webhookAction?: WebhookActionUncheckedCreateNestedOneWithoutActionInput
  }

  export type ActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    active?: BoolFieldUpdateOperationsInput | boolean
    retries?: IntFieldUpdateOperationsInput | number
    triggerLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Rule?: RuleUpdateOneWithoutActionsNestedInput
    emailAction?: EmailActionUpdateOneWithoutActionNestedInput
    telegramAction?: TelegramActionUpdateOneWithoutActionNestedInput
    webhookAction?: WebhookActionUpdateOneWithoutActionNestedInput
    User?: UserUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    active?: BoolFieldUpdateOperationsInput | boolean
    retries?: IntFieldUpdateOperationsInput | number
    triggerLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ruleId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    emailAction?: EmailActionUncheckedUpdateOneWithoutActionNestedInput
    telegramAction?: TelegramActionUncheckedUpdateOneWithoutActionNestedInput
    webhookAction?: WebhookActionUncheckedUpdateOneWithoutActionNestedInput
  }

  export type ActionCreateManyInput = {
    id?: string
    name: string
    type: $Enums.ActionType
    active: boolean
    retries: number
    triggerLimit: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ruleId?: string | null
    userId: string
  }

  export type ActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    active?: BoolFieldUpdateOperationsInput | boolean
    retries?: IntFieldUpdateOperationsInput | number
    triggerLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    active?: BoolFieldUpdateOperationsInput | boolean
    retries?: IntFieldUpdateOperationsInput | number
    triggerLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ruleId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EmailActionCreateInput = {
    id?: string
    receiverEmail: string
    content: string
    action: ActionCreateNestedOneWithoutEmailActionInput
  }

  export type EmailActionUncheckedCreateInput = {
    id?: string
    receiverEmail: string
    content: string
    actionId: string
  }

  export type EmailActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverEmail?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    action?: ActionUpdateOneRequiredWithoutEmailActionNestedInput
  }

  export type EmailActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverEmail?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
  }

  export type EmailActionCreateManyInput = {
    id?: string
    receiverEmail: string
    content: string
    actionId: string
  }

  export type EmailActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverEmail?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type EmailActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverEmail?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
  }

  export type TelegramActionCreateInput = {
    id?: string
    chatId: string
    action: ActionCreateNestedOneWithoutTelegramActionInput
  }

  export type TelegramActionUncheckedCreateInput = {
    id?: string
    chatId: string
    actionId: string
  }

  export type TelegramActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    action?: ActionUpdateOneRequiredWithoutTelegramActionNestedInput
  }

  export type TelegramActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
  }

  export type TelegramActionCreateManyInput = {
    id?: string
    chatId: string
    actionId: string
  }

  export type TelegramActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type TelegramActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
  }

  export type WebhookActionCreateInput = {
    id?: string
    url: string
    payload: string
    action: ActionCreateNestedOneWithoutWebhookActionInput
  }

  export type WebhookActionUncheckedCreateInput = {
    id?: string
    url: string
    payload: string
    actionId: string
  }

  export type WebhookActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    action?: ActionUpdateOneRequiredWithoutWebhookActionNestedInput
  }

  export type WebhookActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
  }

  export type WebhookActionCreateManyInput = {
    id?: string
    url: string
    payload: string
    actionId: string
  }

  export type WebhookActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
  }

  export type WebhookActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
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

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type RuleListRelationFilter = {
    every?: RuleWhereInput
    some?: RuleWhereInput
    none?: RuleWhereInput
  }

  export type ActionListRelationFilter = {
    every?: ActionWhereInput
    some?: ActionWhereInput
    none?: ActionWhereInput
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    profile?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    profile?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    profile?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumApiKeyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyType | EnumApiKeyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyType[] | ListEnumApiKeyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyType[] | ListEnumApiKeyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyTypeFilter<$PrismaModel> | $Enums.ApiKeyType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    initial?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    initial?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    initial?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumApiKeyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyType | EnumApiKeyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyType[] | ListEnumApiKeyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyType[] | ListEnumApiKeyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyTypeWithAggregatesFilter<$PrismaModel> | $Enums.ApiKeyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApiKeyTypeFilter<$PrismaModel>
    _max?: NestedEnumApiKeyTypeFilter<$PrismaModel>
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDeviceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeFilter<$PrismaModel> | $Enums.DeviceType
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type DataStreamListRelationFilter = {
    every?: DataStreamWhereInput
    some?: DataStreamWhereInput
    none?: DataStreamWhereInput
  }

  export type DataStreamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    deviceType?: SortOrder
    deviceAuthToken?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    deviceType?: SortOrder
    deviceAuthToken?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    deviceType?: SortOrder
    deviceAuthToken?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDeviceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeviceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceTypeFilter<$PrismaModel>
    _max?: NestedEnumDeviceTypeFilter<$PrismaModel>
  }

  export type DeviceScalarRelationFilter = {
    is?: DeviceWhereInput
    isNot?: DeviceWhereInput
  }

  export type DataPointListRelationFilter = {
    every?: DataPointWhereInput
    some?: DataPointWhereInput
    none?: DataPointWhereInput
  }

  export type DataPointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DataStreamCountOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataStreamMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataStreamMinOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataStreamScalarRelationFilter = {
    is?: DataStreamWhereInput
    isNot?: DataStreamWhereInput
  }

  export type DataPointCountOrderByAggregateInput = {
    id?: SortOrder
    dataStreamId?: SortOrder
    value?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type DataPointMaxOrderByAggregateInput = {
    id?: SortOrder
    dataStreamId?: SortOrder
    value?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type DataPointMinOrderByAggregateInput = {
    id?: SortOrder
    dataStreamId?: SortOrder
    value?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RuleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    attempts?: SortOrder
    userId?: SortOrder
  }

  export type RuleAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type RuleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    attempts?: SortOrder
    userId?: SortOrder
  }

  export type RuleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    attempts?: SortOrder
    userId?: SortOrder
  }

  export type RuleSumOrderByAggregateInput = {
    attempts?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActionTypeFilter<$PrismaModel> | $Enums.ActionType
  }

  export type RuleNullableScalarRelationFilter = {
    is?: RuleWhereInput | null
    isNot?: RuleWhereInput | null
  }

  export type EmailActionNullableScalarRelationFilter = {
    is?: EmailActionWhereInput | null
    isNot?: EmailActionWhereInput | null
  }

  export type TelegramActionNullableScalarRelationFilter = {
    is?: TelegramActionWhereInput | null
    isNot?: TelegramActionWhereInput | null
  }

  export type WebhookActionNullableScalarRelationFilter = {
    is?: WebhookActionWhereInput | null
    isNot?: WebhookActionWhereInput | null
  }

  export type ActionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    active?: SortOrder
    retries?: SortOrder
    triggerLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ruleId?: SortOrder
    userId?: SortOrder
  }

  export type ActionAvgOrderByAggregateInput = {
    retries?: SortOrder
    triggerLimit?: SortOrder
  }

  export type ActionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    active?: SortOrder
    retries?: SortOrder
    triggerLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ruleId?: SortOrder
    userId?: SortOrder
  }

  export type ActionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    active?: SortOrder
    retries?: SortOrder
    triggerLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ruleId?: SortOrder
    userId?: SortOrder
  }

  export type ActionSumOrderByAggregateInput = {
    retries?: SortOrder
    triggerLimit?: SortOrder
  }

  export type EnumActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionTypeFilter<$PrismaModel>
    _max?: NestedEnumActionTypeFilter<$PrismaModel>
  }

  export type ActionScalarRelationFilter = {
    is?: ActionWhereInput
    isNot?: ActionWhereInput
  }

  export type EmailActionCountOrderByAggregateInput = {
    id?: SortOrder
    receiverEmail?: SortOrder
    content?: SortOrder
    actionId?: SortOrder
  }

  export type EmailActionMaxOrderByAggregateInput = {
    id?: SortOrder
    receiverEmail?: SortOrder
    content?: SortOrder
    actionId?: SortOrder
  }

  export type EmailActionMinOrderByAggregateInput = {
    id?: SortOrder
    receiverEmail?: SortOrder
    content?: SortOrder
    actionId?: SortOrder
  }

  export type TelegramActionCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    actionId?: SortOrder
  }

  export type TelegramActionMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    actionId?: SortOrder
  }

  export type TelegramActionMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    actionId?: SortOrder
  }

  export type WebhookActionCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    payload?: SortOrder
    actionId?: SortOrder
  }

  export type WebhookActionMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    payload?: SortOrder
    actionId?: SortOrder
  }

  export type WebhookActionMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    payload?: SortOrder
    actionId?: SortOrder
  }

  export type ApiKeyCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type RuleCreateNestedManyWithoutUserInput = {
    create?: XOR<RuleCreateWithoutUserInput, RuleUncheckedCreateWithoutUserInput> | RuleCreateWithoutUserInput[] | RuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutUserInput | RuleCreateOrConnectWithoutUserInput[]
    createMany?: RuleCreateManyUserInputEnvelope
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
  }

  export type ActionCreateNestedManyWithoutUserInput = {
    create?: XOR<ActionCreateWithoutUserInput, ActionUncheckedCreateWithoutUserInput> | ActionCreateWithoutUserInput[] | ActionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutUserInput | ActionCreateOrConnectWithoutUserInput[]
    createMany?: ActionCreateManyUserInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type RuleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RuleCreateWithoutUserInput, RuleUncheckedCreateWithoutUserInput> | RuleCreateWithoutUserInput[] | RuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutUserInput | RuleCreateOrConnectWithoutUserInput[]
    createMany?: RuleCreateManyUserInputEnvelope
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
  }

  export type ActionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActionCreateWithoutUserInput, ActionUncheckedCreateWithoutUserInput> | ActionCreateWithoutUserInput[] | ActionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutUserInput | ActionCreateOrConnectWithoutUserInput[]
    createMany?: ActionCreateManyUserInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ApiKeyUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type RuleUpdateManyWithoutUserNestedInput = {
    create?: XOR<RuleCreateWithoutUserInput, RuleUncheckedCreateWithoutUserInput> | RuleCreateWithoutUserInput[] | RuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutUserInput | RuleCreateOrConnectWithoutUserInput[]
    upsert?: RuleUpsertWithWhereUniqueWithoutUserInput | RuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RuleCreateManyUserInputEnvelope
    set?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    disconnect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    delete?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    update?: RuleUpdateWithWhereUniqueWithoutUserInput | RuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RuleUpdateManyWithWhereWithoutUserInput | RuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RuleScalarWhereInput | RuleScalarWhereInput[]
  }

  export type ActionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActionCreateWithoutUserInput, ActionUncheckedCreateWithoutUserInput> | ActionCreateWithoutUserInput[] | ActionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutUserInput | ActionCreateOrConnectWithoutUserInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutUserInput | ActionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActionCreateManyUserInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutUserInput | ActionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutUserInput | ActionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type RuleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RuleCreateWithoutUserInput, RuleUncheckedCreateWithoutUserInput> | RuleCreateWithoutUserInput[] | RuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutUserInput | RuleCreateOrConnectWithoutUserInput[]
    upsert?: RuleUpsertWithWhereUniqueWithoutUserInput | RuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RuleCreateManyUserInputEnvelope
    set?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    disconnect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    delete?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    update?: RuleUpdateWithWhereUniqueWithoutUserInput | RuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RuleUpdateManyWithWhereWithoutUserInput | RuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RuleScalarWhereInput | RuleScalarWhereInput[]
  }

  export type ActionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActionCreateWithoutUserInput, ActionUncheckedCreateWithoutUserInput> | ActionCreateWithoutUserInput[] | ActionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutUserInput | ActionCreateOrConnectWithoutUserInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutUserInput | ActionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActionCreateManyUserInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutUserInput | ActionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutUserInput | ActionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutApi_keysInput = {
    create?: XOR<UserCreateWithoutApi_keysInput, UserUncheckedCreateWithoutApi_keysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApi_keysInput
    connect?: UserWhereUniqueInput
  }

  export type EnumApiKeyTypeFieldUpdateOperationsInput = {
    set?: $Enums.ApiKeyType
  }

  export type UserUpdateOneRequiredWithoutApi_keysNestedInput = {
    create?: XOR<UserCreateWithoutApi_keysInput, UserUncheckedCreateWithoutApi_keysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApi_keysInput
    upsert?: UserUpsertWithoutApi_keysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApi_keysInput, UserUpdateWithoutApi_keysInput>, UserUncheckedUpdateWithoutApi_keysInput>
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type DeviceCreateNestedManyWithoutProjectInput = {
    create?: XOR<DeviceCreateWithoutProjectInput, DeviceUncheckedCreateWithoutProjectInput> | DeviceCreateWithoutProjectInput[] | DeviceUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutProjectInput | DeviceCreateOrConnectWithoutProjectInput[]
    createMany?: DeviceCreateManyProjectInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<DeviceCreateWithoutProjectInput, DeviceUncheckedCreateWithoutProjectInput> | DeviceCreateWithoutProjectInput[] | DeviceUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutProjectInput | DeviceCreateOrConnectWithoutProjectInput[]
    createMany?: DeviceCreateManyProjectInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type DeviceUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DeviceCreateWithoutProjectInput, DeviceUncheckedCreateWithoutProjectInput> | DeviceCreateWithoutProjectInput[] | DeviceUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutProjectInput | DeviceCreateOrConnectWithoutProjectInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutProjectInput | DeviceUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DeviceCreateManyProjectInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutProjectInput | DeviceUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutProjectInput | DeviceUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DeviceCreateWithoutProjectInput, DeviceUncheckedCreateWithoutProjectInput> | DeviceCreateWithoutProjectInput[] | DeviceUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutProjectInput | DeviceCreateOrConnectWithoutProjectInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutProjectInput | DeviceUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DeviceCreateManyProjectInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutProjectInput | DeviceUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutProjectInput | DeviceUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutDevicesInput = {
    create?: XOR<ProjectCreateWithoutDevicesInput, ProjectUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDevicesInput
    connect?: ProjectWhereUniqueInput
  }

  export type DataStreamCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DataStreamCreateWithoutDeviceInput, DataStreamUncheckedCreateWithoutDeviceInput> | DataStreamCreateWithoutDeviceInput[] | DataStreamUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DataStreamCreateOrConnectWithoutDeviceInput | DataStreamCreateOrConnectWithoutDeviceInput[]
    createMany?: DataStreamCreateManyDeviceInputEnvelope
    connect?: DataStreamWhereUniqueInput | DataStreamWhereUniqueInput[]
  }

  export type DataStreamUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DataStreamCreateWithoutDeviceInput, DataStreamUncheckedCreateWithoutDeviceInput> | DataStreamCreateWithoutDeviceInput[] | DataStreamUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DataStreamCreateOrConnectWithoutDeviceInput | DataStreamCreateOrConnectWithoutDeviceInput[]
    createMany?: DataStreamCreateManyDeviceInputEnvelope
    connect?: DataStreamWhereUniqueInput | DataStreamWhereUniqueInput[]
  }

  export type EnumDeviceTypeFieldUpdateOperationsInput = {
    set?: $Enums.DeviceType
  }

  export type ProjectUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<ProjectCreateWithoutDevicesInput, ProjectUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDevicesInput
    upsert?: ProjectUpsertWithoutDevicesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutDevicesInput, ProjectUpdateWithoutDevicesInput>, ProjectUncheckedUpdateWithoutDevicesInput>
  }

  export type DataStreamUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DataStreamCreateWithoutDeviceInput, DataStreamUncheckedCreateWithoutDeviceInput> | DataStreamCreateWithoutDeviceInput[] | DataStreamUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DataStreamCreateOrConnectWithoutDeviceInput | DataStreamCreateOrConnectWithoutDeviceInput[]
    upsert?: DataStreamUpsertWithWhereUniqueWithoutDeviceInput | DataStreamUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DataStreamCreateManyDeviceInputEnvelope
    set?: DataStreamWhereUniqueInput | DataStreamWhereUniqueInput[]
    disconnect?: DataStreamWhereUniqueInput | DataStreamWhereUniqueInput[]
    delete?: DataStreamWhereUniqueInput | DataStreamWhereUniqueInput[]
    connect?: DataStreamWhereUniqueInput | DataStreamWhereUniqueInput[]
    update?: DataStreamUpdateWithWhereUniqueWithoutDeviceInput | DataStreamUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DataStreamUpdateManyWithWhereWithoutDeviceInput | DataStreamUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DataStreamScalarWhereInput | DataStreamScalarWhereInput[]
  }

  export type DataStreamUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DataStreamCreateWithoutDeviceInput, DataStreamUncheckedCreateWithoutDeviceInput> | DataStreamCreateWithoutDeviceInput[] | DataStreamUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DataStreamCreateOrConnectWithoutDeviceInput | DataStreamCreateOrConnectWithoutDeviceInput[]
    upsert?: DataStreamUpsertWithWhereUniqueWithoutDeviceInput | DataStreamUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DataStreamCreateManyDeviceInputEnvelope
    set?: DataStreamWhereUniqueInput | DataStreamWhereUniqueInput[]
    disconnect?: DataStreamWhereUniqueInput | DataStreamWhereUniqueInput[]
    delete?: DataStreamWhereUniqueInput | DataStreamWhereUniqueInput[]
    connect?: DataStreamWhereUniqueInput | DataStreamWhereUniqueInput[]
    update?: DataStreamUpdateWithWhereUniqueWithoutDeviceInput | DataStreamUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DataStreamUpdateManyWithWhereWithoutDeviceInput | DataStreamUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DataStreamScalarWhereInput | DataStreamScalarWhereInput[]
  }

  export type DeviceCreateNestedOneWithoutDataStreamsInput = {
    create?: XOR<DeviceCreateWithoutDataStreamsInput, DeviceUncheckedCreateWithoutDataStreamsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutDataStreamsInput
    connect?: DeviceWhereUniqueInput
  }

  export type DataPointCreateNestedManyWithoutDataStreamInput = {
    create?: XOR<DataPointCreateWithoutDataStreamInput, DataPointUncheckedCreateWithoutDataStreamInput> | DataPointCreateWithoutDataStreamInput[] | DataPointUncheckedCreateWithoutDataStreamInput[]
    connectOrCreate?: DataPointCreateOrConnectWithoutDataStreamInput | DataPointCreateOrConnectWithoutDataStreamInput[]
    createMany?: DataPointCreateManyDataStreamInputEnvelope
    connect?: DataPointWhereUniqueInput | DataPointWhereUniqueInput[]
  }

  export type DataPointUncheckedCreateNestedManyWithoutDataStreamInput = {
    create?: XOR<DataPointCreateWithoutDataStreamInput, DataPointUncheckedCreateWithoutDataStreamInput> | DataPointCreateWithoutDataStreamInput[] | DataPointUncheckedCreateWithoutDataStreamInput[]
    connectOrCreate?: DataPointCreateOrConnectWithoutDataStreamInput | DataPointCreateOrConnectWithoutDataStreamInput[]
    createMany?: DataPointCreateManyDataStreamInputEnvelope
    connect?: DataPointWhereUniqueInput | DataPointWhereUniqueInput[]
  }

  export type DeviceUpdateOneRequiredWithoutDataStreamsNestedInput = {
    create?: XOR<DeviceCreateWithoutDataStreamsInput, DeviceUncheckedCreateWithoutDataStreamsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutDataStreamsInput
    upsert?: DeviceUpsertWithoutDataStreamsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutDataStreamsInput, DeviceUpdateWithoutDataStreamsInput>, DeviceUncheckedUpdateWithoutDataStreamsInput>
  }

  export type DataPointUpdateManyWithoutDataStreamNestedInput = {
    create?: XOR<DataPointCreateWithoutDataStreamInput, DataPointUncheckedCreateWithoutDataStreamInput> | DataPointCreateWithoutDataStreamInput[] | DataPointUncheckedCreateWithoutDataStreamInput[]
    connectOrCreate?: DataPointCreateOrConnectWithoutDataStreamInput | DataPointCreateOrConnectWithoutDataStreamInput[]
    upsert?: DataPointUpsertWithWhereUniqueWithoutDataStreamInput | DataPointUpsertWithWhereUniqueWithoutDataStreamInput[]
    createMany?: DataPointCreateManyDataStreamInputEnvelope
    set?: DataPointWhereUniqueInput | DataPointWhereUniqueInput[]
    disconnect?: DataPointWhereUniqueInput | DataPointWhereUniqueInput[]
    delete?: DataPointWhereUniqueInput | DataPointWhereUniqueInput[]
    connect?: DataPointWhereUniqueInput | DataPointWhereUniqueInput[]
    update?: DataPointUpdateWithWhereUniqueWithoutDataStreamInput | DataPointUpdateWithWhereUniqueWithoutDataStreamInput[]
    updateMany?: DataPointUpdateManyWithWhereWithoutDataStreamInput | DataPointUpdateManyWithWhereWithoutDataStreamInput[]
    deleteMany?: DataPointScalarWhereInput | DataPointScalarWhereInput[]
  }

  export type DataPointUncheckedUpdateManyWithoutDataStreamNestedInput = {
    create?: XOR<DataPointCreateWithoutDataStreamInput, DataPointUncheckedCreateWithoutDataStreamInput> | DataPointCreateWithoutDataStreamInput[] | DataPointUncheckedCreateWithoutDataStreamInput[]
    connectOrCreate?: DataPointCreateOrConnectWithoutDataStreamInput | DataPointCreateOrConnectWithoutDataStreamInput[]
    upsert?: DataPointUpsertWithWhereUniqueWithoutDataStreamInput | DataPointUpsertWithWhereUniqueWithoutDataStreamInput[]
    createMany?: DataPointCreateManyDataStreamInputEnvelope
    set?: DataPointWhereUniqueInput | DataPointWhereUniqueInput[]
    disconnect?: DataPointWhereUniqueInput | DataPointWhereUniqueInput[]
    delete?: DataPointWhereUniqueInput | DataPointWhereUniqueInput[]
    connect?: DataPointWhereUniqueInput | DataPointWhereUniqueInput[]
    update?: DataPointUpdateWithWhereUniqueWithoutDataStreamInput | DataPointUpdateWithWhereUniqueWithoutDataStreamInput[]
    updateMany?: DataPointUpdateManyWithWhereWithoutDataStreamInput | DataPointUpdateManyWithWhereWithoutDataStreamInput[]
    deleteMany?: DataPointScalarWhereInput | DataPointScalarWhereInput[]
  }

  export type DataStreamCreateNestedOneWithoutDataPointsInput = {
    create?: XOR<DataStreamCreateWithoutDataPointsInput, DataStreamUncheckedCreateWithoutDataPointsInput>
    connectOrCreate?: DataStreamCreateOrConnectWithoutDataPointsInput
    connect?: DataStreamWhereUniqueInput
  }

  export type DataStreamUpdateOneRequiredWithoutDataPointsNestedInput = {
    create?: XOR<DataStreamCreateWithoutDataPointsInput, DataStreamUncheckedCreateWithoutDataPointsInput>
    connectOrCreate?: DataStreamCreateOrConnectWithoutDataPointsInput
    upsert?: DataStreamUpsertWithoutDataPointsInput
    connect?: DataStreamWhereUniqueInput
    update?: XOR<XOR<DataStreamUpdateToOneWithWhereWithoutDataPointsInput, DataStreamUpdateWithoutDataPointsInput>, DataStreamUncheckedUpdateWithoutDataPointsInput>
  }

  export type ActionCreateNestedManyWithoutRuleInput = {
    create?: XOR<ActionCreateWithoutRuleInput, ActionUncheckedCreateWithoutRuleInput> | ActionCreateWithoutRuleInput[] | ActionUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutRuleInput | ActionCreateOrConnectWithoutRuleInput[]
    createMany?: ActionCreateManyRuleInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutRulesInput = {
    create?: XOR<UserCreateWithoutRulesInput, UserUncheckedCreateWithoutRulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRulesInput
    connect?: UserWhereUniqueInput
  }

  export type ActionUncheckedCreateNestedManyWithoutRuleInput = {
    create?: XOR<ActionCreateWithoutRuleInput, ActionUncheckedCreateWithoutRuleInput> | ActionCreateWithoutRuleInput[] | ActionUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutRuleInput | ActionCreateOrConnectWithoutRuleInput[]
    createMany?: ActionCreateManyRuleInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ActionUpdateManyWithoutRuleNestedInput = {
    create?: XOR<ActionCreateWithoutRuleInput, ActionUncheckedCreateWithoutRuleInput> | ActionCreateWithoutRuleInput[] | ActionUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutRuleInput | ActionCreateOrConnectWithoutRuleInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutRuleInput | ActionUpsertWithWhereUniqueWithoutRuleInput[]
    createMany?: ActionCreateManyRuleInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutRuleInput | ActionUpdateWithWhereUniqueWithoutRuleInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutRuleInput | ActionUpdateManyWithWhereWithoutRuleInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type UserUpdateOneWithoutRulesNestedInput = {
    create?: XOR<UserCreateWithoutRulesInput, UserUncheckedCreateWithoutRulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRulesInput
    upsert?: UserUpsertWithoutRulesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRulesInput, UserUpdateWithoutRulesInput>, UserUncheckedUpdateWithoutRulesInput>
  }

  export type ActionUncheckedUpdateManyWithoutRuleNestedInput = {
    create?: XOR<ActionCreateWithoutRuleInput, ActionUncheckedCreateWithoutRuleInput> | ActionCreateWithoutRuleInput[] | ActionUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutRuleInput | ActionCreateOrConnectWithoutRuleInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutRuleInput | ActionUpsertWithWhereUniqueWithoutRuleInput[]
    createMany?: ActionCreateManyRuleInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutRuleInput | ActionUpdateWithWhereUniqueWithoutRuleInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutRuleInput | ActionUpdateManyWithWhereWithoutRuleInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type RuleCreateNestedOneWithoutActionsInput = {
    create?: XOR<RuleCreateWithoutActionsInput, RuleUncheckedCreateWithoutActionsInput>
    connectOrCreate?: RuleCreateOrConnectWithoutActionsInput
    connect?: RuleWhereUniqueInput
  }

  export type EmailActionCreateNestedOneWithoutActionInput = {
    create?: XOR<EmailActionCreateWithoutActionInput, EmailActionUncheckedCreateWithoutActionInput>
    connectOrCreate?: EmailActionCreateOrConnectWithoutActionInput
    connect?: EmailActionWhereUniqueInput
  }

  export type TelegramActionCreateNestedOneWithoutActionInput = {
    create?: XOR<TelegramActionCreateWithoutActionInput, TelegramActionUncheckedCreateWithoutActionInput>
    connectOrCreate?: TelegramActionCreateOrConnectWithoutActionInput
    connect?: TelegramActionWhereUniqueInput
  }

  export type WebhookActionCreateNestedOneWithoutActionInput = {
    create?: XOR<WebhookActionCreateWithoutActionInput, WebhookActionUncheckedCreateWithoutActionInput>
    connectOrCreate?: WebhookActionCreateOrConnectWithoutActionInput
    connect?: WebhookActionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutActionsInput = {
    create?: XOR<UserCreateWithoutActionsInput, UserUncheckedCreateWithoutActionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActionsInput
    connect?: UserWhereUniqueInput
  }

  export type EmailActionUncheckedCreateNestedOneWithoutActionInput = {
    create?: XOR<EmailActionCreateWithoutActionInput, EmailActionUncheckedCreateWithoutActionInput>
    connectOrCreate?: EmailActionCreateOrConnectWithoutActionInput
    connect?: EmailActionWhereUniqueInput
  }

  export type TelegramActionUncheckedCreateNestedOneWithoutActionInput = {
    create?: XOR<TelegramActionCreateWithoutActionInput, TelegramActionUncheckedCreateWithoutActionInput>
    connectOrCreate?: TelegramActionCreateOrConnectWithoutActionInput
    connect?: TelegramActionWhereUniqueInput
  }

  export type WebhookActionUncheckedCreateNestedOneWithoutActionInput = {
    create?: XOR<WebhookActionCreateWithoutActionInput, WebhookActionUncheckedCreateWithoutActionInput>
    connectOrCreate?: WebhookActionCreateOrConnectWithoutActionInput
    connect?: WebhookActionWhereUniqueInput
  }

  export type EnumActionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActionType
  }

  export type RuleUpdateOneWithoutActionsNestedInput = {
    create?: XOR<RuleCreateWithoutActionsInput, RuleUncheckedCreateWithoutActionsInput>
    connectOrCreate?: RuleCreateOrConnectWithoutActionsInput
    upsert?: RuleUpsertWithoutActionsInput
    disconnect?: RuleWhereInput | boolean
    delete?: RuleWhereInput | boolean
    connect?: RuleWhereUniqueInput
    update?: XOR<XOR<RuleUpdateToOneWithWhereWithoutActionsInput, RuleUpdateWithoutActionsInput>, RuleUncheckedUpdateWithoutActionsInput>
  }

  export type EmailActionUpdateOneWithoutActionNestedInput = {
    create?: XOR<EmailActionCreateWithoutActionInput, EmailActionUncheckedCreateWithoutActionInput>
    connectOrCreate?: EmailActionCreateOrConnectWithoutActionInput
    upsert?: EmailActionUpsertWithoutActionInput
    disconnect?: EmailActionWhereInput | boolean
    delete?: EmailActionWhereInput | boolean
    connect?: EmailActionWhereUniqueInput
    update?: XOR<XOR<EmailActionUpdateToOneWithWhereWithoutActionInput, EmailActionUpdateWithoutActionInput>, EmailActionUncheckedUpdateWithoutActionInput>
  }

  export type TelegramActionUpdateOneWithoutActionNestedInput = {
    create?: XOR<TelegramActionCreateWithoutActionInput, TelegramActionUncheckedCreateWithoutActionInput>
    connectOrCreate?: TelegramActionCreateOrConnectWithoutActionInput
    upsert?: TelegramActionUpsertWithoutActionInput
    disconnect?: TelegramActionWhereInput | boolean
    delete?: TelegramActionWhereInput | boolean
    connect?: TelegramActionWhereUniqueInput
    update?: XOR<XOR<TelegramActionUpdateToOneWithWhereWithoutActionInput, TelegramActionUpdateWithoutActionInput>, TelegramActionUncheckedUpdateWithoutActionInput>
  }

  export type WebhookActionUpdateOneWithoutActionNestedInput = {
    create?: XOR<WebhookActionCreateWithoutActionInput, WebhookActionUncheckedCreateWithoutActionInput>
    connectOrCreate?: WebhookActionCreateOrConnectWithoutActionInput
    upsert?: WebhookActionUpsertWithoutActionInput
    disconnect?: WebhookActionWhereInput | boolean
    delete?: WebhookActionWhereInput | boolean
    connect?: WebhookActionWhereUniqueInput
    update?: XOR<XOR<WebhookActionUpdateToOneWithWhereWithoutActionInput, WebhookActionUpdateWithoutActionInput>, WebhookActionUncheckedUpdateWithoutActionInput>
  }

  export type UserUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<UserCreateWithoutActionsInput, UserUncheckedCreateWithoutActionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActionsInput
    upsert?: UserUpsertWithoutActionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActionsInput, UserUpdateWithoutActionsInput>, UserUncheckedUpdateWithoutActionsInput>
  }

  export type EmailActionUncheckedUpdateOneWithoutActionNestedInput = {
    create?: XOR<EmailActionCreateWithoutActionInput, EmailActionUncheckedCreateWithoutActionInput>
    connectOrCreate?: EmailActionCreateOrConnectWithoutActionInput
    upsert?: EmailActionUpsertWithoutActionInput
    disconnect?: EmailActionWhereInput | boolean
    delete?: EmailActionWhereInput | boolean
    connect?: EmailActionWhereUniqueInput
    update?: XOR<XOR<EmailActionUpdateToOneWithWhereWithoutActionInput, EmailActionUpdateWithoutActionInput>, EmailActionUncheckedUpdateWithoutActionInput>
  }

  export type TelegramActionUncheckedUpdateOneWithoutActionNestedInput = {
    create?: XOR<TelegramActionCreateWithoutActionInput, TelegramActionUncheckedCreateWithoutActionInput>
    connectOrCreate?: TelegramActionCreateOrConnectWithoutActionInput
    upsert?: TelegramActionUpsertWithoutActionInput
    disconnect?: TelegramActionWhereInput | boolean
    delete?: TelegramActionWhereInput | boolean
    connect?: TelegramActionWhereUniqueInput
    update?: XOR<XOR<TelegramActionUpdateToOneWithWhereWithoutActionInput, TelegramActionUpdateWithoutActionInput>, TelegramActionUncheckedUpdateWithoutActionInput>
  }

  export type WebhookActionUncheckedUpdateOneWithoutActionNestedInput = {
    create?: XOR<WebhookActionCreateWithoutActionInput, WebhookActionUncheckedCreateWithoutActionInput>
    connectOrCreate?: WebhookActionCreateOrConnectWithoutActionInput
    upsert?: WebhookActionUpsertWithoutActionInput
    disconnect?: WebhookActionWhereInput | boolean
    delete?: WebhookActionWhereInput | boolean
    connect?: WebhookActionWhereUniqueInput
    update?: XOR<XOR<WebhookActionUpdateToOneWithWhereWithoutActionInput, WebhookActionUpdateWithoutActionInput>, WebhookActionUncheckedUpdateWithoutActionInput>
  }

  export type ActionCreateNestedOneWithoutEmailActionInput = {
    create?: XOR<ActionCreateWithoutEmailActionInput, ActionUncheckedCreateWithoutEmailActionInput>
    connectOrCreate?: ActionCreateOrConnectWithoutEmailActionInput
    connect?: ActionWhereUniqueInput
  }

  export type ActionUpdateOneRequiredWithoutEmailActionNestedInput = {
    create?: XOR<ActionCreateWithoutEmailActionInput, ActionUncheckedCreateWithoutEmailActionInput>
    connectOrCreate?: ActionCreateOrConnectWithoutEmailActionInput
    upsert?: ActionUpsertWithoutEmailActionInput
    connect?: ActionWhereUniqueInput
    update?: XOR<XOR<ActionUpdateToOneWithWhereWithoutEmailActionInput, ActionUpdateWithoutEmailActionInput>, ActionUncheckedUpdateWithoutEmailActionInput>
  }

  export type ActionCreateNestedOneWithoutTelegramActionInput = {
    create?: XOR<ActionCreateWithoutTelegramActionInput, ActionUncheckedCreateWithoutTelegramActionInput>
    connectOrCreate?: ActionCreateOrConnectWithoutTelegramActionInput
    connect?: ActionWhereUniqueInput
  }

  export type ActionUpdateOneRequiredWithoutTelegramActionNestedInput = {
    create?: XOR<ActionCreateWithoutTelegramActionInput, ActionUncheckedCreateWithoutTelegramActionInput>
    connectOrCreate?: ActionCreateOrConnectWithoutTelegramActionInput
    upsert?: ActionUpsertWithoutTelegramActionInput
    connect?: ActionWhereUniqueInput
    update?: XOR<XOR<ActionUpdateToOneWithWhereWithoutTelegramActionInput, ActionUpdateWithoutTelegramActionInput>, ActionUncheckedUpdateWithoutTelegramActionInput>
  }

  export type ActionCreateNestedOneWithoutWebhookActionInput = {
    create?: XOR<ActionCreateWithoutWebhookActionInput, ActionUncheckedCreateWithoutWebhookActionInput>
    connectOrCreate?: ActionCreateOrConnectWithoutWebhookActionInput
    connect?: ActionWhereUniqueInput
  }

  export type ActionUpdateOneRequiredWithoutWebhookActionNestedInput = {
    create?: XOR<ActionCreateWithoutWebhookActionInput, ActionUncheckedCreateWithoutWebhookActionInput>
    connectOrCreate?: ActionCreateOrConnectWithoutWebhookActionInput
    upsert?: ActionUpsertWithoutWebhookActionInput
    connect?: ActionWhereUniqueInput
    update?: XOR<XOR<ActionUpdateToOneWithWhereWithoutWebhookActionInput, ActionUpdateWithoutWebhookActionInput>, ActionUncheckedUpdateWithoutWebhookActionInput>
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

  export type NestedEnumApiKeyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyType | EnumApiKeyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyType[] | ListEnumApiKeyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyType[] | ListEnumApiKeyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyTypeFilter<$PrismaModel> | $Enums.ApiKeyType
  }

  export type NestedEnumApiKeyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyType | EnumApiKeyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyType[] | ListEnumApiKeyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyType[] | ListEnumApiKeyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyTypeWithAggregatesFilter<$PrismaModel> | $Enums.ApiKeyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApiKeyTypeFilter<$PrismaModel>
    _max?: NestedEnumApiKeyTypeFilter<$PrismaModel>
  }

  export type NestedEnumDeviceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeFilter<$PrismaModel> | $Enums.DeviceType
  }

  export type NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeviceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceTypeFilter<$PrismaModel>
    _max?: NestedEnumDeviceTypeFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActionTypeFilter<$PrismaModel> | $Enums.ActionType
  }

  export type NestedEnumActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionTypeFilter<$PrismaModel>
    _max?: NestedEnumActionTypeFilter<$PrismaModel>
  }

  export type ApiKeyCreateWithoutUserInput = {
    id?: string
    key: string
    initial: string
    type: $Enums.ApiKeyType
    name?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUncheckedCreateWithoutUserInput = {
    id?: string
    key: string
    initial: string
    type: $Enums.ApiKeyType
    name?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyCreateOrConnectWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyCreateManyUserInputEnvelope = {
    data: ApiKeyCreateManyUserInput | ApiKeyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    title?: string
    description?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string
    description?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RuleCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    active: boolean
    attempts: number
    actions?: ActionCreateNestedManyWithoutRuleInput
  }

  export type RuleUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    active: boolean
    attempts: number
    actions?: ActionUncheckedCreateNestedManyWithoutRuleInput
  }

  export type RuleCreateOrConnectWithoutUserInput = {
    where: RuleWhereUniqueInput
    create: XOR<RuleCreateWithoutUserInput, RuleUncheckedCreateWithoutUserInput>
  }

  export type RuleCreateManyUserInputEnvelope = {
    data: RuleCreateManyUserInput | RuleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ActionCreateWithoutUserInput = {
    id?: string
    name: string
    type: $Enums.ActionType
    active: boolean
    retries: number
    triggerLimit: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Rule?: RuleCreateNestedOneWithoutActionsInput
    emailAction?: EmailActionCreateNestedOneWithoutActionInput
    telegramAction?: TelegramActionCreateNestedOneWithoutActionInput
    webhookAction?: WebhookActionCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    type: $Enums.ActionType
    active: boolean
    retries: number
    triggerLimit: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ruleId?: string | null
    emailAction?: EmailActionUncheckedCreateNestedOneWithoutActionInput
    telegramAction?: TelegramActionUncheckedCreateNestedOneWithoutActionInput
    webhookAction?: WebhookActionUncheckedCreateNestedOneWithoutActionInput
  }

  export type ActionCreateOrConnectWithoutUserInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutUserInput, ActionUncheckedCreateWithoutUserInput>
  }

  export type ActionCreateManyUserInputEnvelope = {
    data: ActionCreateManyUserInput | ActionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutUserInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    OR?: ApiKeyScalarWhereInput[]
    NOT?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    key?: StringFilter<"ApiKey"> | string
    initial?: StringFilter<"ApiKey"> | string
    userId?: StringFilter<"ApiKey"> | string
    type?: EnumApiKeyTypeFilter<"ApiKey"> | $Enums.ApiKeyType
    name?: StringFilter<"ApiKey"> | string
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type RuleUpsertWithWhereUniqueWithoutUserInput = {
    where: RuleWhereUniqueInput
    update: XOR<RuleUpdateWithoutUserInput, RuleUncheckedUpdateWithoutUserInput>
    create: XOR<RuleCreateWithoutUserInput, RuleUncheckedCreateWithoutUserInput>
  }

  export type RuleUpdateWithWhereUniqueWithoutUserInput = {
    where: RuleWhereUniqueInput
    data: XOR<RuleUpdateWithoutUserInput, RuleUncheckedUpdateWithoutUserInput>
  }

  export type RuleUpdateManyWithWhereWithoutUserInput = {
    where: RuleScalarWhereInput
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyWithoutUserInput>
  }

  export type RuleScalarWhereInput = {
    AND?: RuleScalarWhereInput | RuleScalarWhereInput[]
    OR?: RuleScalarWhereInput[]
    NOT?: RuleScalarWhereInput | RuleScalarWhereInput[]
    id?: StringFilter<"Rule"> | string
    name?: StringFilter<"Rule"> | string
    description?: StringNullableFilter<"Rule"> | string | null
    createdAt?: DateTimeFilter<"Rule"> | Date | string
    updatedAt?: DateTimeFilter<"Rule"> | Date | string
    active?: BoolFilter<"Rule"> | boolean
    attempts?: IntFilter<"Rule"> | number
    userId?: StringNullableFilter<"Rule"> | string | null
  }

  export type ActionUpsertWithWhereUniqueWithoutUserInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutUserInput, ActionUncheckedUpdateWithoutUserInput>
    create: XOR<ActionCreateWithoutUserInput, ActionUncheckedCreateWithoutUserInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutUserInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutUserInput, ActionUncheckedUpdateWithoutUserInput>
  }

  export type ActionUpdateManyWithWhereWithoutUserInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutUserInput>
  }

  export type ActionScalarWhereInput = {
    AND?: ActionScalarWhereInput | ActionScalarWhereInput[]
    OR?: ActionScalarWhereInput[]
    NOT?: ActionScalarWhereInput | ActionScalarWhereInput[]
    id?: StringFilter<"Action"> | string
    name?: StringFilter<"Action"> | string
    type?: EnumActionTypeFilter<"Action"> | $Enums.ActionType
    active?: BoolFilter<"Action"> | boolean
    retries?: IntFilter<"Action"> | number
    triggerLimit?: IntFilter<"Action"> | number
    createdAt?: DateTimeFilter<"Action"> | Date | string
    updatedAt?: DateTimeFilter<"Action"> | Date | string
    ruleId?: StringNullableFilter<"Action"> | string | null
    userId?: StringFilter<"Action"> | string
  }

  export type UserCreateWithoutApi_keysInput = {
    id: string
    username: string
    email: string
    profile: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    rules?: RuleCreateNestedManyWithoutUserInput
    actions?: ActionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApi_keysInput = {
    id: string
    username: string
    email: string
    profile: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    rules?: RuleUncheckedCreateNestedManyWithoutUserInput
    actions?: ActionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApi_keysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApi_keysInput, UserUncheckedCreateWithoutApi_keysInput>
  }

  export type UserUpsertWithoutApi_keysInput = {
    update: XOR<UserUpdateWithoutApi_keysInput, UserUncheckedUpdateWithoutApi_keysInput>
    create: XOR<UserCreateWithoutApi_keysInput, UserUncheckedCreateWithoutApi_keysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApi_keysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApi_keysInput, UserUncheckedUpdateWithoutApi_keysInput>
  }

  export type UserUpdateWithoutApi_keysInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    rules?: RuleUpdateManyWithoutUserNestedInput
    actions?: ActionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApi_keysInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    rules?: RuleUncheckedUpdateManyWithoutUserNestedInput
    actions?: ActionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProjectsInput = {
    id: string
    username: string
    email: string
    profile: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    api_keys?: ApiKeyCreateNestedManyWithoutUserInput
    rules?: RuleCreateNestedManyWithoutUserInput
    actions?: ActionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id: string
    username: string
    email: string
    profile: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    api_keys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    rules?: RuleUncheckedCreateNestedManyWithoutUserInput
    actions?: ActionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type DeviceCreateWithoutProjectInput = {
    id?: string
    name: string
    description: string
    deviceType: $Enums.DeviceType
    deviceAuthToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dataStreams?: DataStreamCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    description: string
    deviceType: $Enums.DeviceType
    deviceAuthToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dataStreams?: DataStreamUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutProjectInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutProjectInput, DeviceUncheckedCreateWithoutProjectInput>
  }

  export type DeviceCreateManyProjectInputEnvelope = {
    data: DeviceCreateManyProjectInput | DeviceCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    api_keys?: ApiKeyUpdateManyWithoutUserNestedInput
    rules?: RuleUpdateManyWithoutUserNestedInput
    actions?: ActionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    api_keys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    rules?: RuleUncheckedUpdateManyWithoutUserNestedInput
    actions?: ActionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DeviceUpsertWithWhereUniqueWithoutProjectInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutProjectInput, DeviceUncheckedUpdateWithoutProjectInput>
    create: XOR<DeviceCreateWithoutProjectInput, DeviceUncheckedCreateWithoutProjectInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutProjectInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutProjectInput, DeviceUncheckedUpdateWithoutProjectInput>
  }

  export type DeviceUpdateManyWithWhereWithoutProjectInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutProjectInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    description?: StringFilter<"Device"> | string
    deviceType?: EnumDeviceTypeFilter<"Device"> | $Enums.DeviceType
    deviceAuthToken?: StringFilter<"Device"> | string
    projectId?: StringFilter<"Device"> | string
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
  }

  export type ProjectCreateWithoutDevicesInput = {
    id?: string
    title?: string
    description?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutDevicesInput = {
    id?: string
    userId: string
    title?: string
    description?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutDevicesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutDevicesInput, ProjectUncheckedCreateWithoutDevicesInput>
  }

  export type DataStreamCreateWithoutDeviceInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dataPoints?: DataPointCreateNestedManyWithoutDataStreamInput
  }

  export type DataStreamUncheckedCreateWithoutDeviceInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dataPoints?: DataPointUncheckedCreateNestedManyWithoutDataStreamInput
  }

  export type DataStreamCreateOrConnectWithoutDeviceInput = {
    where: DataStreamWhereUniqueInput
    create: XOR<DataStreamCreateWithoutDeviceInput, DataStreamUncheckedCreateWithoutDeviceInput>
  }

  export type DataStreamCreateManyDeviceInputEnvelope = {
    data: DataStreamCreateManyDeviceInput | DataStreamCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutDevicesInput = {
    update: XOR<ProjectUpdateWithoutDevicesInput, ProjectUncheckedUpdateWithoutDevicesInput>
    create: XOR<ProjectCreateWithoutDevicesInput, ProjectUncheckedCreateWithoutDevicesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutDevicesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutDevicesInput, ProjectUncheckedUpdateWithoutDevicesInput>
  }

  export type ProjectUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataStreamUpsertWithWhereUniqueWithoutDeviceInput = {
    where: DataStreamWhereUniqueInput
    update: XOR<DataStreamUpdateWithoutDeviceInput, DataStreamUncheckedUpdateWithoutDeviceInput>
    create: XOR<DataStreamCreateWithoutDeviceInput, DataStreamUncheckedCreateWithoutDeviceInput>
  }

  export type DataStreamUpdateWithWhereUniqueWithoutDeviceInput = {
    where: DataStreamWhereUniqueInput
    data: XOR<DataStreamUpdateWithoutDeviceInput, DataStreamUncheckedUpdateWithoutDeviceInput>
  }

  export type DataStreamUpdateManyWithWhereWithoutDeviceInput = {
    where: DataStreamScalarWhereInput
    data: XOR<DataStreamUpdateManyMutationInput, DataStreamUncheckedUpdateManyWithoutDeviceInput>
  }

  export type DataStreamScalarWhereInput = {
    AND?: DataStreamScalarWhereInput | DataStreamScalarWhereInput[]
    OR?: DataStreamScalarWhereInput[]
    NOT?: DataStreamScalarWhereInput | DataStreamScalarWhereInput[]
    id?: StringFilter<"DataStream"> | string
    deviceId?: StringFilter<"DataStream"> | string
    title?: StringFilter<"DataStream"> | string
    description?: StringFilter<"DataStream"> | string
    createdAt?: DateTimeFilter<"DataStream"> | Date | string
    updatedAt?: DateTimeFilter<"DataStream"> | Date | string
  }

  export type DeviceCreateWithoutDataStreamsInput = {
    id?: string
    name: string
    description: string
    deviceType: $Enums.DeviceType
    deviceAuthToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Project: ProjectCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateWithoutDataStreamsInput = {
    id?: string
    name: string
    description: string
    deviceType: $Enums.DeviceType
    deviceAuthToken: string
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceCreateOrConnectWithoutDataStreamsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutDataStreamsInput, DeviceUncheckedCreateWithoutDataStreamsInput>
  }

  export type DataPointCreateWithoutDataStreamInput = {
    id?: string
    value: string
    type: string
    createdAt?: Date | string
  }

  export type DataPointUncheckedCreateWithoutDataStreamInput = {
    id?: string
    value: string
    type: string
    createdAt?: Date | string
  }

  export type DataPointCreateOrConnectWithoutDataStreamInput = {
    where: DataPointWhereUniqueInput
    create: XOR<DataPointCreateWithoutDataStreamInput, DataPointUncheckedCreateWithoutDataStreamInput>
  }

  export type DataPointCreateManyDataStreamInputEnvelope = {
    data: DataPointCreateManyDataStreamInput | DataPointCreateManyDataStreamInput[]
    skipDuplicates?: boolean
  }

  export type DeviceUpsertWithoutDataStreamsInput = {
    update: XOR<DeviceUpdateWithoutDataStreamsInput, DeviceUncheckedUpdateWithoutDataStreamsInput>
    create: XOR<DeviceCreateWithoutDataStreamsInput, DeviceUncheckedCreateWithoutDataStreamsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutDataStreamsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutDataStreamsInput, DeviceUncheckedUpdateWithoutDataStreamsInput>
  }

  export type DeviceUpdateWithoutDataStreamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    deviceAuthToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Project?: ProjectUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateWithoutDataStreamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    deviceAuthToken?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataPointUpsertWithWhereUniqueWithoutDataStreamInput = {
    where: DataPointWhereUniqueInput
    update: XOR<DataPointUpdateWithoutDataStreamInput, DataPointUncheckedUpdateWithoutDataStreamInput>
    create: XOR<DataPointCreateWithoutDataStreamInput, DataPointUncheckedCreateWithoutDataStreamInput>
  }

  export type DataPointUpdateWithWhereUniqueWithoutDataStreamInput = {
    where: DataPointWhereUniqueInput
    data: XOR<DataPointUpdateWithoutDataStreamInput, DataPointUncheckedUpdateWithoutDataStreamInput>
  }

  export type DataPointUpdateManyWithWhereWithoutDataStreamInput = {
    where: DataPointScalarWhereInput
    data: XOR<DataPointUpdateManyMutationInput, DataPointUncheckedUpdateManyWithoutDataStreamInput>
  }

  export type DataPointScalarWhereInput = {
    AND?: DataPointScalarWhereInput | DataPointScalarWhereInput[]
    OR?: DataPointScalarWhereInput[]
    NOT?: DataPointScalarWhereInput | DataPointScalarWhereInput[]
    id?: StringFilter<"DataPoint"> | string
    dataStreamId?: StringFilter<"DataPoint"> | string
    value?: StringFilter<"DataPoint"> | string
    type?: StringFilter<"DataPoint"> | string
    createdAt?: DateTimeFilter<"DataPoint"> | Date | string
  }

  export type DataStreamCreateWithoutDataPointsInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Device: DeviceCreateNestedOneWithoutDataStreamsInput
  }

  export type DataStreamUncheckedCreateWithoutDataPointsInput = {
    id?: string
    deviceId: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataStreamCreateOrConnectWithoutDataPointsInput = {
    where: DataStreamWhereUniqueInput
    create: XOR<DataStreamCreateWithoutDataPointsInput, DataStreamUncheckedCreateWithoutDataPointsInput>
  }

  export type DataStreamUpsertWithoutDataPointsInput = {
    update: XOR<DataStreamUpdateWithoutDataPointsInput, DataStreamUncheckedUpdateWithoutDataPointsInput>
    create: XOR<DataStreamCreateWithoutDataPointsInput, DataStreamUncheckedCreateWithoutDataPointsInput>
    where?: DataStreamWhereInput
  }

  export type DataStreamUpdateToOneWithWhereWithoutDataPointsInput = {
    where?: DataStreamWhereInput
    data: XOR<DataStreamUpdateWithoutDataPointsInput, DataStreamUncheckedUpdateWithoutDataPointsInput>
  }

  export type DataStreamUpdateWithoutDataPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Device?: DeviceUpdateOneRequiredWithoutDataStreamsNestedInput
  }

  export type DataStreamUncheckedUpdateWithoutDataPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionCreateWithoutRuleInput = {
    id?: string
    name: string
    type: $Enums.ActionType
    active: boolean
    retries: number
    triggerLimit: number
    createdAt?: Date | string
    updatedAt?: Date | string
    emailAction?: EmailActionCreateNestedOneWithoutActionInput
    telegramAction?: TelegramActionCreateNestedOneWithoutActionInput
    webhookAction?: WebhookActionCreateNestedOneWithoutActionInput
    User: UserCreateNestedOneWithoutActionsInput
  }

  export type ActionUncheckedCreateWithoutRuleInput = {
    id?: string
    name: string
    type: $Enums.ActionType
    active: boolean
    retries: number
    triggerLimit: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    emailAction?: EmailActionUncheckedCreateNestedOneWithoutActionInput
    telegramAction?: TelegramActionUncheckedCreateNestedOneWithoutActionInput
    webhookAction?: WebhookActionUncheckedCreateNestedOneWithoutActionInput
  }

  export type ActionCreateOrConnectWithoutRuleInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutRuleInput, ActionUncheckedCreateWithoutRuleInput>
  }

  export type ActionCreateManyRuleInputEnvelope = {
    data: ActionCreateManyRuleInput | ActionCreateManyRuleInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutRulesInput = {
    id: string
    username: string
    email: string
    profile: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    api_keys?: ApiKeyCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    actions?: ActionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRulesInput = {
    id: string
    username: string
    email: string
    profile: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    api_keys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    actions?: ActionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRulesInput, UserUncheckedCreateWithoutRulesInput>
  }

  export type ActionUpsertWithWhereUniqueWithoutRuleInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutRuleInput, ActionUncheckedUpdateWithoutRuleInput>
    create: XOR<ActionCreateWithoutRuleInput, ActionUncheckedCreateWithoutRuleInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutRuleInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutRuleInput, ActionUncheckedUpdateWithoutRuleInput>
  }

  export type ActionUpdateManyWithWhereWithoutRuleInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutRuleInput>
  }

  export type UserUpsertWithoutRulesInput = {
    update: XOR<UserUpdateWithoutRulesInput, UserUncheckedUpdateWithoutRulesInput>
    create: XOR<UserCreateWithoutRulesInput, UserUncheckedCreateWithoutRulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRulesInput, UserUncheckedUpdateWithoutRulesInput>
  }

  export type UserUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    api_keys?: ApiKeyUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    actions?: ActionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    api_keys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    actions?: ActionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RuleCreateWithoutActionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    active: boolean
    attempts: number
    User?: UserCreateNestedOneWithoutRulesInput
  }

  export type RuleUncheckedCreateWithoutActionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    active: boolean
    attempts: number
    userId?: string | null
  }

  export type RuleCreateOrConnectWithoutActionsInput = {
    where: RuleWhereUniqueInput
    create: XOR<RuleCreateWithoutActionsInput, RuleUncheckedCreateWithoutActionsInput>
  }

  export type EmailActionCreateWithoutActionInput = {
    id?: string
    receiverEmail: string
    content: string
  }

  export type EmailActionUncheckedCreateWithoutActionInput = {
    id?: string
    receiverEmail: string
    content: string
  }

  export type EmailActionCreateOrConnectWithoutActionInput = {
    where: EmailActionWhereUniqueInput
    create: XOR<EmailActionCreateWithoutActionInput, EmailActionUncheckedCreateWithoutActionInput>
  }

  export type TelegramActionCreateWithoutActionInput = {
    id?: string
    chatId: string
  }

  export type TelegramActionUncheckedCreateWithoutActionInput = {
    id?: string
    chatId: string
  }

  export type TelegramActionCreateOrConnectWithoutActionInput = {
    where: TelegramActionWhereUniqueInput
    create: XOR<TelegramActionCreateWithoutActionInput, TelegramActionUncheckedCreateWithoutActionInput>
  }

  export type WebhookActionCreateWithoutActionInput = {
    id?: string
    url: string
    payload: string
  }

  export type WebhookActionUncheckedCreateWithoutActionInput = {
    id?: string
    url: string
    payload: string
  }

  export type WebhookActionCreateOrConnectWithoutActionInput = {
    where: WebhookActionWhereUniqueInput
    create: XOR<WebhookActionCreateWithoutActionInput, WebhookActionUncheckedCreateWithoutActionInput>
  }

  export type UserCreateWithoutActionsInput = {
    id: string
    username: string
    email: string
    profile: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    api_keys?: ApiKeyCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    rules?: RuleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActionsInput = {
    id: string
    username: string
    email: string
    profile: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    api_keys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    rules?: RuleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActionsInput, UserUncheckedCreateWithoutActionsInput>
  }

  export type RuleUpsertWithoutActionsInput = {
    update: XOR<RuleUpdateWithoutActionsInput, RuleUncheckedUpdateWithoutActionsInput>
    create: XOR<RuleCreateWithoutActionsInput, RuleUncheckedCreateWithoutActionsInput>
    where?: RuleWhereInput
  }

  export type RuleUpdateToOneWithWhereWithoutActionsInput = {
    where?: RuleWhereInput
    data: XOR<RuleUpdateWithoutActionsInput, RuleUncheckedUpdateWithoutActionsInput>
  }

  export type RuleUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneWithoutRulesNestedInput
  }

  export type RuleUncheckedUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailActionUpsertWithoutActionInput = {
    update: XOR<EmailActionUpdateWithoutActionInput, EmailActionUncheckedUpdateWithoutActionInput>
    create: XOR<EmailActionCreateWithoutActionInput, EmailActionUncheckedCreateWithoutActionInput>
    where?: EmailActionWhereInput
  }

  export type EmailActionUpdateToOneWithWhereWithoutActionInput = {
    where?: EmailActionWhereInput
    data: XOR<EmailActionUpdateWithoutActionInput, EmailActionUncheckedUpdateWithoutActionInput>
  }

  export type EmailActionUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverEmail?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type EmailActionUncheckedUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverEmail?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TelegramActionUpsertWithoutActionInput = {
    update: XOR<TelegramActionUpdateWithoutActionInput, TelegramActionUncheckedUpdateWithoutActionInput>
    create: XOR<TelegramActionCreateWithoutActionInput, TelegramActionUncheckedCreateWithoutActionInput>
    where?: TelegramActionWhereInput
  }

  export type TelegramActionUpdateToOneWithWhereWithoutActionInput = {
    where?: TelegramActionWhereInput
    data: XOR<TelegramActionUpdateWithoutActionInput, TelegramActionUncheckedUpdateWithoutActionInput>
  }

  export type TelegramActionUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type TelegramActionUncheckedUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type WebhookActionUpsertWithoutActionInput = {
    update: XOR<WebhookActionUpdateWithoutActionInput, WebhookActionUncheckedUpdateWithoutActionInput>
    create: XOR<WebhookActionCreateWithoutActionInput, WebhookActionUncheckedCreateWithoutActionInput>
    where?: WebhookActionWhereInput
  }

  export type WebhookActionUpdateToOneWithWhereWithoutActionInput = {
    where?: WebhookActionWhereInput
    data: XOR<WebhookActionUpdateWithoutActionInput, WebhookActionUncheckedUpdateWithoutActionInput>
  }

  export type WebhookActionUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
  }

  export type WebhookActionUncheckedUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutActionsInput = {
    update: XOR<UserUpdateWithoutActionsInput, UserUncheckedUpdateWithoutActionsInput>
    create: XOR<UserCreateWithoutActionsInput, UserUncheckedCreateWithoutActionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActionsInput, UserUncheckedUpdateWithoutActionsInput>
  }

  export type UserUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    api_keys?: ApiKeyUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    rules?: RuleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    api_keys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    rules?: RuleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ActionCreateWithoutEmailActionInput = {
    id?: string
    name: string
    type: $Enums.ActionType
    active: boolean
    retries: number
    triggerLimit: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Rule?: RuleCreateNestedOneWithoutActionsInput
    telegramAction?: TelegramActionCreateNestedOneWithoutActionInput
    webhookAction?: WebhookActionCreateNestedOneWithoutActionInput
    User: UserCreateNestedOneWithoutActionsInput
  }

  export type ActionUncheckedCreateWithoutEmailActionInput = {
    id?: string
    name: string
    type: $Enums.ActionType
    active: boolean
    retries: number
    triggerLimit: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ruleId?: string | null
    userId: string
    telegramAction?: TelegramActionUncheckedCreateNestedOneWithoutActionInput
    webhookAction?: WebhookActionUncheckedCreateNestedOneWithoutActionInput
  }

  export type ActionCreateOrConnectWithoutEmailActionInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutEmailActionInput, ActionUncheckedCreateWithoutEmailActionInput>
  }

  export type ActionUpsertWithoutEmailActionInput = {
    update: XOR<ActionUpdateWithoutEmailActionInput, ActionUncheckedUpdateWithoutEmailActionInput>
    create: XOR<ActionCreateWithoutEmailActionInput, ActionUncheckedCreateWithoutEmailActionInput>
    where?: ActionWhereInput
  }

  export type ActionUpdateToOneWithWhereWithoutEmailActionInput = {
    where?: ActionWhereInput
    data: XOR<ActionUpdateWithoutEmailActionInput, ActionUncheckedUpdateWithoutEmailActionInput>
  }

  export type ActionUpdateWithoutEmailActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    active?: BoolFieldUpdateOperationsInput | boolean
    retries?: IntFieldUpdateOperationsInput | number
    triggerLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Rule?: RuleUpdateOneWithoutActionsNestedInput
    telegramAction?: TelegramActionUpdateOneWithoutActionNestedInput
    webhookAction?: WebhookActionUpdateOneWithoutActionNestedInput
    User?: UserUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionUncheckedUpdateWithoutEmailActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    active?: BoolFieldUpdateOperationsInput | boolean
    retries?: IntFieldUpdateOperationsInput | number
    triggerLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ruleId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    telegramAction?: TelegramActionUncheckedUpdateOneWithoutActionNestedInput
    webhookAction?: WebhookActionUncheckedUpdateOneWithoutActionNestedInput
  }

  export type ActionCreateWithoutTelegramActionInput = {
    id?: string
    name: string
    type: $Enums.ActionType
    active: boolean
    retries: number
    triggerLimit: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Rule?: RuleCreateNestedOneWithoutActionsInput
    emailAction?: EmailActionCreateNestedOneWithoutActionInput
    webhookAction?: WebhookActionCreateNestedOneWithoutActionInput
    User: UserCreateNestedOneWithoutActionsInput
  }

  export type ActionUncheckedCreateWithoutTelegramActionInput = {
    id?: string
    name: string
    type: $Enums.ActionType
    active: boolean
    retries: number
    triggerLimit: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ruleId?: string | null
    userId: string
    emailAction?: EmailActionUncheckedCreateNestedOneWithoutActionInput
    webhookAction?: WebhookActionUncheckedCreateNestedOneWithoutActionInput
  }

  export type ActionCreateOrConnectWithoutTelegramActionInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutTelegramActionInput, ActionUncheckedCreateWithoutTelegramActionInput>
  }

  export type ActionUpsertWithoutTelegramActionInput = {
    update: XOR<ActionUpdateWithoutTelegramActionInput, ActionUncheckedUpdateWithoutTelegramActionInput>
    create: XOR<ActionCreateWithoutTelegramActionInput, ActionUncheckedCreateWithoutTelegramActionInput>
    where?: ActionWhereInput
  }

  export type ActionUpdateToOneWithWhereWithoutTelegramActionInput = {
    where?: ActionWhereInput
    data: XOR<ActionUpdateWithoutTelegramActionInput, ActionUncheckedUpdateWithoutTelegramActionInput>
  }

  export type ActionUpdateWithoutTelegramActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    active?: BoolFieldUpdateOperationsInput | boolean
    retries?: IntFieldUpdateOperationsInput | number
    triggerLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Rule?: RuleUpdateOneWithoutActionsNestedInput
    emailAction?: EmailActionUpdateOneWithoutActionNestedInput
    webhookAction?: WebhookActionUpdateOneWithoutActionNestedInput
    User?: UserUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionUncheckedUpdateWithoutTelegramActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    active?: BoolFieldUpdateOperationsInput | boolean
    retries?: IntFieldUpdateOperationsInput | number
    triggerLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ruleId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    emailAction?: EmailActionUncheckedUpdateOneWithoutActionNestedInput
    webhookAction?: WebhookActionUncheckedUpdateOneWithoutActionNestedInput
  }

  export type ActionCreateWithoutWebhookActionInput = {
    id?: string
    name: string
    type: $Enums.ActionType
    active: boolean
    retries: number
    triggerLimit: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Rule?: RuleCreateNestedOneWithoutActionsInput
    emailAction?: EmailActionCreateNestedOneWithoutActionInput
    telegramAction?: TelegramActionCreateNestedOneWithoutActionInput
    User: UserCreateNestedOneWithoutActionsInput
  }

  export type ActionUncheckedCreateWithoutWebhookActionInput = {
    id?: string
    name: string
    type: $Enums.ActionType
    active: boolean
    retries: number
    triggerLimit: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ruleId?: string | null
    userId: string
    emailAction?: EmailActionUncheckedCreateNestedOneWithoutActionInput
    telegramAction?: TelegramActionUncheckedCreateNestedOneWithoutActionInput
  }

  export type ActionCreateOrConnectWithoutWebhookActionInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutWebhookActionInput, ActionUncheckedCreateWithoutWebhookActionInput>
  }

  export type ActionUpsertWithoutWebhookActionInput = {
    update: XOR<ActionUpdateWithoutWebhookActionInput, ActionUncheckedUpdateWithoutWebhookActionInput>
    create: XOR<ActionCreateWithoutWebhookActionInput, ActionUncheckedCreateWithoutWebhookActionInput>
    where?: ActionWhereInput
  }

  export type ActionUpdateToOneWithWhereWithoutWebhookActionInput = {
    where?: ActionWhereInput
    data: XOR<ActionUpdateWithoutWebhookActionInput, ActionUncheckedUpdateWithoutWebhookActionInput>
  }

  export type ActionUpdateWithoutWebhookActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    active?: BoolFieldUpdateOperationsInput | boolean
    retries?: IntFieldUpdateOperationsInput | number
    triggerLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Rule?: RuleUpdateOneWithoutActionsNestedInput
    emailAction?: EmailActionUpdateOneWithoutActionNestedInput
    telegramAction?: TelegramActionUpdateOneWithoutActionNestedInput
    User?: UserUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionUncheckedUpdateWithoutWebhookActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    active?: BoolFieldUpdateOperationsInput | boolean
    retries?: IntFieldUpdateOperationsInput | number
    triggerLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ruleId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    emailAction?: EmailActionUncheckedUpdateOneWithoutActionNestedInput
    telegramAction?: TelegramActionUncheckedUpdateOneWithoutActionNestedInput
  }

  export type ApiKeyCreateManyUserInput = {
    id?: string
    key: string
    initial: string
    type: $Enums.ApiKeyType
    name?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    title?: string
    description?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RuleCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    active: boolean
    attempts: number
  }

  export type ActionCreateManyUserInput = {
    id?: string
    name: string
    type: $Enums.ActionType
    active: boolean
    retries: number
    triggerLimit: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ruleId?: string | null
  }

  export type ApiKeyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    initial?: StringFieldUpdateOperationsInput | string
    type?: EnumApiKeyTypeFieldUpdateOperationsInput | $Enums.ApiKeyType
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    initial?: StringFieldUpdateOperationsInput | string
    type?: EnumApiKeyTypeFieldUpdateOperationsInput | $Enums.ApiKeyType
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    initial?: StringFieldUpdateOperationsInput | string
    type?: EnumApiKeyTypeFieldUpdateOperationsInput | $Enums.ApiKeyType
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RuleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    actions?: ActionUpdateManyWithoutRuleNestedInput
  }

  export type RuleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    actions?: ActionUncheckedUpdateManyWithoutRuleNestedInput
  }

  export type RuleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
  }

  export type ActionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    active?: BoolFieldUpdateOperationsInput | boolean
    retries?: IntFieldUpdateOperationsInput | number
    triggerLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Rule?: RuleUpdateOneWithoutActionsNestedInput
    emailAction?: EmailActionUpdateOneWithoutActionNestedInput
    telegramAction?: TelegramActionUpdateOneWithoutActionNestedInput
    webhookAction?: WebhookActionUpdateOneWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    active?: BoolFieldUpdateOperationsInput | boolean
    retries?: IntFieldUpdateOperationsInput | number
    triggerLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ruleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailAction?: EmailActionUncheckedUpdateOneWithoutActionNestedInput
    telegramAction?: TelegramActionUncheckedUpdateOneWithoutActionNestedInput
    webhookAction?: WebhookActionUncheckedUpdateOneWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    active?: BoolFieldUpdateOperationsInput | boolean
    retries?: IntFieldUpdateOperationsInput | number
    triggerLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ruleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeviceCreateManyProjectInput = {
    id?: string
    name: string
    description: string
    deviceType: $Enums.DeviceType
    deviceAuthToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    deviceAuthToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataStreams?: DataStreamUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    deviceAuthToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataStreams?: DataStreamUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    deviceAuthToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataStreamCreateManyDeviceInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataStreamUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPoints?: DataPointUpdateManyWithoutDataStreamNestedInput
  }

  export type DataStreamUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPoints?: DataPointUncheckedUpdateManyWithoutDataStreamNestedInput
  }

  export type DataStreamUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataPointCreateManyDataStreamInput = {
    id?: string
    value: string
    type: string
    createdAt?: Date | string
  }

  export type DataPointUpdateWithoutDataStreamInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataPointUncheckedUpdateWithoutDataStreamInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataPointUncheckedUpdateManyWithoutDataStreamInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionCreateManyRuleInput = {
    id?: string
    name: string
    type: $Enums.ActionType
    active: boolean
    retries: number
    triggerLimit: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ActionUpdateWithoutRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    active?: BoolFieldUpdateOperationsInput | boolean
    retries?: IntFieldUpdateOperationsInput | number
    triggerLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailAction?: EmailActionUpdateOneWithoutActionNestedInput
    telegramAction?: TelegramActionUpdateOneWithoutActionNestedInput
    webhookAction?: WebhookActionUpdateOneWithoutActionNestedInput
    User?: UserUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionUncheckedUpdateWithoutRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    active?: BoolFieldUpdateOperationsInput | boolean
    retries?: IntFieldUpdateOperationsInput | number
    triggerLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    emailAction?: EmailActionUncheckedUpdateOneWithoutActionNestedInput
    telegramAction?: TelegramActionUncheckedUpdateOneWithoutActionNestedInput
    webhookAction?: WebhookActionUncheckedUpdateOneWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateManyWithoutRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    active?: BoolFieldUpdateOperationsInput | boolean
    retries?: IntFieldUpdateOperationsInput | number
    triggerLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }



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