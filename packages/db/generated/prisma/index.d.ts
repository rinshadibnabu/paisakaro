
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
 * Model OnRampTransaction
 * 
 */
export type OnRampTransaction = $Result.DefaultSelection<Prisma.$OnRampTransactionPayload>
/**
 * Model Balance
 * 
 */
export type Balance = $Result.DefaultSelection<Prisma.$BalancePayload>
/**
 * Model p2pTransfer
 * 
 */
export type p2pTransfer = $Result.DefaultSelection<Prisma.$p2pTransferPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OnRampStatus: {
  Success: 'Success',
  Failure: 'Failure',
  Processing: 'Processing'
};

export type OnRampStatus = (typeof OnRampStatus)[keyof typeof OnRampStatus]

}

export type OnRampStatus = $Enums.OnRampStatus

export const OnRampStatus: typeof $Enums.OnRampStatus

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
   * `prisma.onRampTransaction`: Exposes CRUD operations for the **OnRampTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OnRampTransactions
    * const onRampTransactions = await prisma.onRampTransaction.findMany()
    * ```
    */
  get onRampTransaction(): Prisma.OnRampTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.balance`: Exposes CRUD operations for the **Balance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Balances
    * const balances = await prisma.balance.findMany()
    * ```
    */
  get balance(): Prisma.BalanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.p2pTransfer`: Exposes CRUD operations for the **p2pTransfer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more P2pTransfers
    * const p2pTransfers = await prisma.p2pTransfer.findMany()
    * ```
    */
  get p2pTransfer(): Prisma.p2pTransferDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    OnRampTransaction: 'OnRampTransaction',
    Balance: 'Balance',
    p2pTransfer: 'p2pTransfer'
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
      modelProps: "user" | "onRampTransaction" | "balance" | "p2pTransfer"
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
      OnRampTransaction: {
        payload: Prisma.$OnRampTransactionPayload<ExtArgs>
        fields: Prisma.OnRampTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OnRampTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OnRampTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>
          }
          findFirst: {
            args: Prisma.OnRampTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OnRampTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>
          }
          findMany: {
            args: Prisma.OnRampTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>[]
          }
          create: {
            args: Prisma.OnRampTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>
          }
          createMany: {
            args: Prisma.OnRampTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OnRampTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>[]
          }
          delete: {
            args: Prisma.OnRampTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>
          }
          update: {
            args: Prisma.OnRampTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>
          }
          deleteMany: {
            args: Prisma.OnRampTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OnRampTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OnRampTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>[]
          }
          upsert: {
            args: Prisma.OnRampTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>
          }
          aggregate: {
            args: Prisma.OnRampTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOnRampTransaction>
          }
          groupBy: {
            args: Prisma.OnRampTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OnRampTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OnRampTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<OnRampTransactionCountAggregateOutputType> | number
          }
        }
      }
      Balance: {
        payload: Prisma.$BalancePayload<ExtArgs>
        fields: Prisma.BalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          findFirst: {
            args: Prisma.BalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          findMany: {
            args: Prisma.BalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          create: {
            args: Prisma.BalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          createMany: {
            args: Prisma.BalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          delete: {
            args: Prisma.BalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          update: {
            args: Prisma.BalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          deleteMany: {
            args: Prisma.BalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BalanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          upsert: {
            args: Prisma.BalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          aggregate: {
            args: Prisma.BalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBalance>
          }
          groupBy: {
            args: Prisma.BalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BalanceCountArgs<ExtArgs>
            result: $Utils.Optional<BalanceCountAggregateOutputType> | number
          }
        }
      }
      p2pTransfer: {
        payload: Prisma.$p2pTransferPayload<ExtArgs>
        fields: Prisma.p2pTransferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.p2pTransferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.p2pTransferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload>
          }
          findFirst: {
            args: Prisma.p2pTransferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.p2pTransferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload>
          }
          findMany: {
            args: Prisma.p2pTransferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload>[]
          }
          create: {
            args: Prisma.p2pTransferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload>
          }
          createMany: {
            args: Prisma.p2pTransferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.p2pTransferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload>[]
          }
          delete: {
            args: Prisma.p2pTransferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload>
          }
          update: {
            args: Prisma.p2pTransferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload>
          }
          deleteMany: {
            args: Prisma.p2pTransferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.p2pTransferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.p2pTransferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload>[]
          }
          upsert: {
            args: Prisma.p2pTransferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload>
          }
          aggregate: {
            args: Prisma.P2pTransferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateP2pTransfer>
          }
          groupBy: {
            args: Prisma.p2pTransferGroupByArgs<ExtArgs>
            result: $Utils.Optional<P2pTransferGroupByOutputType>[]
          }
          count: {
            args: Prisma.p2pTransferCountArgs<ExtArgs>
            result: $Utils.Optional<P2pTransferCountAggregateOutputType> | number
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
    onRampTransaction?: OnRampTransactionOmit
    balance?: BalanceOmit
    p2pTransfer?: p2pTransferOmit
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
    OnRampTransaction: number
    ReceivedTransactions: number
    SentTransactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OnRampTransaction?: boolean | UserCountOutputTypeCountOnRampTransactionArgs
    ReceivedTransactions?: boolean | UserCountOutputTypeCountReceivedTransactionsArgs
    SentTransactions?: boolean | UserCountOutputTypeCountSentTransactionsArgs
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
  export type UserCountOutputTypeCountOnRampTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OnRampTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: p2pTransferWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: p2pTransferWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    number: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    number: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    number: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    number?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    number?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    number?: true
    password?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string | null
    name: string | null
    number: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    number?: boolean
    password?: boolean
    Balance?: boolean | User$BalanceArgs<ExtArgs>
    OnRampTransaction?: boolean | User$OnRampTransactionArgs<ExtArgs>
    ReceivedTransactions?: boolean | User$ReceivedTransactionsArgs<ExtArgs>
    SentTransactions?: boolean | User$SentTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "number" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Balance?: boolean | User$BalanceArgs<ExtArgs>
    OnRampTransaction?: boolean | User$OnRampTransactionArgs<ExtArgs>
    ReceivedTransactions?: boolean | User$ReceivedTransactionsArgs<ExtArgs>
    SentTransactions?: boolean | User$SentTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Balance: Prisma.$BalancePayload<ExtArgs> | null
      OnRampTransaction: Prisma.$OnRampTransactionPayload<ExtArgs>[]
      ReceivedTransactions: Prisma.$p2pTransferPayload<ExtArgs>[]
      SentTransactions: Prisma.$p2pTransferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string | null
      name: string | null
      number: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
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
    Balance<T extends User$BalanceArgs<ExtArgs> = {}>(args?: Subset<T, User$BalanceArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    OnRampTransaction<T extends User$OnRampTransactionArgs<ExtArgs> = {}>(args?: Subset<T, User$OnRampTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ReceivedTransactions<T extends User$ReceivedTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$ReceivedTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SentTransactions<T extends User$SentTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$SentTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly number: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
    relationLoadStrategy?: RelationLoadStrategy
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
    relationLoadStrategy?: RelationLoadStrategy
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
    relationLoadStrategy?: RelationLoadStrategy
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
    relationLoadStrategy?: RelationLoadStrategy
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
    relationLoadStrategy?: RelationLoadStrategy
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
    relationLoadStrategy?: RelationLoadStrategy
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
    relationLoadStrategy?: RelationLoadStrategy
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
    relationLoadStrategy?: RelationLoadStrategy
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
    relationLoadStrategy?: RelationLoadStrategy
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
   * User.Balance
   */
  export type User$BalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    where?: BalanceWhereInput
  }

  /**
   * User.OnRampTransaction
   */
  export type User$OnRampTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    where?: OnRampTransactionWhereInput
    orderBy?: OnRampTransactionOrderByWithRelationInput | OnRampTransactionOrderByWithRelationInput[]
    cursor?: OnRampTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OnRampTransactionScalarFieldEnum | OnRampTransactionScalarFieldEnum[]
  }

  /**
   * User.ReceivedTransactions
   */
  export type User$ReceivedTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    where?: p2pTransferWhereInput
    orderBy?: p2pTransferOrderByWithRelationInput | p2pTransferOrderByWithRelationInput[]
    cursor?: p2pTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: P2pTransferScalarFieldEnum | P2pTransferScalarFieldEnum[]
  }

  /**
   * User.SentTransactions
   */
  export type User$SentTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    where?: p2pTransferWhereInput
    orderBy?: p2pTransferOrderByWithRelationInput | p2pTransferOrderByWithRelationInput[]
    cursor?: p2pTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: P2pTransferScalarFieldEnum | P2pTransferScalarFieldEnum[]
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
   * Model OnRampTransaction
   */

  export type AggregateOnRampTransaction = {
    _count: OnRampTransactionCountAggregateOutputType | null
    _avg: OnRampTransactionAvgAggregateOutputType | null
    _sum: OnRampTransactionSumAggregateOutputType | null
    _min: OnRampTransactionMinAggregateOutputType | null
    _max: OnRampTransactionMaxAggregateOutputType | null
  }

  export type OnRampTransactionAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type OnRampTransactionSumAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type OnRampTransactionMinAggregateOutputType = {
    id: number | null
    status: $Enums.OnRampStatus | null
    token: string | null
    provider: string | null
    amount: number | null
    startTime: Date | null
    userId: number | null
  }

  export type OnRampTransactionMaxAggregateOutputType = {
    id: number | null
    status: $Enums.OnRampStatus | null
    token: string | null
    provider: string | null
    amount: number | null
    startTime: Date | null
    userId: number | null
  }

  export type OnRampTransactionCountAggregateOutputType = {
    id: number
    status: number
    token: number
    provider: number
    amount: number
    startTime: number
    userId: number
    _all: number
  }


  export type OnRampTransactionAvgAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type OnRampTransactionSumAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type OnRampTransactionMinAggregateInputType = {
    id?: true
    status?: true
    token?: true
    provider?: true
    amount?: true
    startTime?: true
    userId?: true
  }

  export type OnRampTransactionMaxAggregateInputType = {
    id?: true
    status?: true
    token?: true
    provider?: true
    amount?: true
    startTime?: true
    userId?: true
  }

  export type OnRampTransactionCountAggregateInputType = {
    id?: true
    status?: true
    token?: true
    provider?: true
    amount?: true
    startTime?: true
    userId?: true
    _all?: true
  }

  export type OnRampTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OnRampTransaction to aggregate.
     */
    where?: OnRampTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnRampTransactions to fetch.
     */
    orderBy?: OnRampTransactionOrderByWithRelationInput | OnRampTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OnRampTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnRampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnRampTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OnRampTransactions
    **/
    _count?: true | OnRampTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OnRampTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OnRampTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OnRampTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OnRampTransactionMaxAggregateInputType
  }

  export type GetOnRampTransactionAggregateType<T extends OnRampTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateOnRampTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOnRampTransaction[P]>
      : GetScalarType<T[P], AggregateOnRampTransaction[P]>
  }




  export type OnRampTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OnRampTransactionWhereInput
    orderBy?: OnRampTransactionOrderByWithAggregationInput | OnRampTransactionOrderByWithAggregationInput[]
    by: OnRampTransactionScalarFieldEnum[] | OnRampTransactionScalarFieldEnum
    having?: OnRampTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OnRampTransactionCountAggregateInputType | true
    _avg?: OnRampTransactionAvgAggregateInputType
    _sum?: OnRampTransactionSumAggregateInputType
    _min?: OnRampTransactionMinAggregateInputType
    _max?: OnRampTransactionMaxAggregateInputType
  }

  export type OnRampTransactionGroupByOutputType = {
    id: number
    status: $Enums.OnRampStatus
    token: string
    provider: string
    amount: number
    startTime: Date
    userId: number
    _count: OnRampTransactionCountAggregateOutputType | null
    _avg: OnRampTransactionAvgAggregateOutputType | null
    _sum: OnRampTransactionSumAggregateOutputType | null
    _min: OnRampTransactionMinAggregateOutputType | null
    _max: OnRampTransactionMaxAggregateOutputType | null
  }

  type GetOnRampTransactionGroupByPayload<T extends OnRampTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OnRampTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OnRampTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OnRampTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], OnRampTransactionGroupByOutputType[P]>
        }
      >
    >


  export type OnRampTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    token?: boolean
    provider?: boolean
    amount?: boolean
    startTime?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onRampTransaction"]>

  export type OnRampTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    token?: boolean
    provider?: boolean
    amount?: boolean
    startTime?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onRampTransaction"]>

  export type OnRampTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    token?: boolean
    provider?: boolean
    amount?: boolean
    startTime?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onRampTransaction"]>

  export type OnRampTransactionSelectScalar = {
    id?: boolean
    status?: boolean
    token?: boolean
    provider?: boolean
    amount?: boolean
    startTime?: boolean
    userId?: boolean
  }

  export type OnRampTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "token" | "provider" | "amount" | "startTime" | "userId", ExtArgs["result"]["onRampTransaction"]>
  export type OnRampTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OnRampTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OnRampTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OnRampTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OnRampTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.OnRampStatus
      token: string
      provider: string
      amount: number
      startTime: Date
      userId: number
    }, ExtArgs["result"]["onRampTransaction"]>
    composites: {}
  }

  type OnRampTransactionGetPayload<S extends boolean | null | undefined | OnRampTransactionDefaultArgs> = $Result.GetResult<Prisma.$OnRampTransactionPayload, S>

  type OnRampTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OnRampTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: OnRampTransactionCountAggregateInputType | true
    }

  export interface OnRampTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OnRampTransaction'], meta: { name: 'OnRampTransaction' } }
    /**
     * Find zero or one OnRampTransaction that matches the filter.
     * @param {OnRampTransactionFindUniqueArgs} args - Arguments to find a OnRampTransaction
     * @example
     * // Get one OnRampTransaction
     * const onRampTransaction = await prisma.onRampTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OnRampTransactionFindUniqueArgs>(args: SelectSubset<T, OnRampTransactionFindUniqueArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OnRampTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OnRampTransactionFindUniqueOrThrowArgs} args - Arguments to find a OnRampTransaction
     * @example
     * // Get one OnRampTransaction
     * const onRampTransaction = await prisma.onRampTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OnRampTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, OnRampTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OnRampTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionFindFirstArgs} args - Arguments to find a OnRampTransaction
     * @example
     * // Get one OnRampTransaction
     * const onRampTransaction = await prisma.onRampTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OnRampTransactionFindFirstArgs>(args?: SelectSubset<T, OnRampTransactionFindFirstArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OnRampTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionFindFirstOrThrowArgs} args - Arguments to find a OnRampTransaction
     * @example
     * // Get one OnRampTransaction
     * const onRampTransaction = await prisma.onRampTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OnRampTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, OnRampTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OnRampTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OnRampTransactions
     * const onRampTransactions = await prisma.onRampTransaction.findMany()
     * 
     * // Get first 10 OnRampTransactions
     * const onRampTransactions = await prisma.onRampTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const onRampTransactionWithIdOnly = await prisma.onRampTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OnRampTransactionFindManyArgs>(args?: SelectSubset<T, OnRampTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OnRampTransaction.
     * @param {OnRampTransactionCreateArgs} args - Arguments to create a OnRampTransaction.
     * @example
     * // Create one OnRampTransaction
     * const OnRampTransaction = await prisma.onRampTransaction.create({
     *   data: {
     *     // ... data to create a OnRampTransaction
     *   }
     * })
     * 
     */
    create<T extends OnRampTransactionCreateArgs>(args: SelectSubset<T, OnRampTransactionCreateArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OnRampTransactions.
     * @param {OnRampTransactionCreateManyArgs} args - Arguments to create many OnRampTransactions.
     * @example
     * // Create many OnRampTransactions
     * const onRampTransaction = await prisma.onRampTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OnRampTransactionCreateManyArgs>(args?: SelectSubset<T, OnRampTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OnRampTransactions and returns the data saved in the database.
     * @param {OnRampTransactionCreateManyAndReturnArgs} args - Arguments to create many OnRampTransactions.
     * @example
     * // Create many OnRampTransactions
     * const onRampTransaction = await prisma.onRampTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OnRampTransactions and only return the `id`
     * const onRampTransactionWithIdOnly = await prisma.onRampTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OnRampTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, OnRampTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OnRampTransaction.
     * @param {OnRampTransactionDeleteArgs} args - Arguments to delete one OnRampTransaction.
     * @example
     * // Delete one OnRampTransaction
     * const OnRampTransaction = await prisma.onRampTransaction.delete({
     *   where: {
     *     // ... filter to delete one OnRampTransaction
     *   }
     * })
     * 
     */
    delete<T extends OnRampTransactionDeleteArgs>(args: SelectSubset<T, OnRampTransactionDeleteArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OnRampTransaction.
     * @param {OnRampTransactionUpdateArgs} args - Arguments to update one OnRampTransaction.
     * @example
     * // Update one OnRampTransaction
     * const onRampTransaction = await prisma.onRampTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OnRampTransactionUpdateArgs>(args: SelectSubset<T, OnRampTransactionUpdateArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OnRampTransactions.
     * @param {OnRampTransactionDeleteManyArgs} args - Arguments to filter OnRampTransactions to delete.
     * @example
     * // Delete a few OnRampTransactions
     * const { count } = await prisma.onRampTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OnRampTransactionDeleteManyArgs>(args?: SelectSubset<T, OnRampTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OnRampTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OnRampTransactions
     * const onRampTransaction = await prisma.onRampTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OnRampTransactionUpdateManyArgs>(args: SelectSubset<T, OnRampTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OnRampTransactions and returns the data updated in the database.
     * @param {OnRampTransactionUpdateManyAndReturnArgs} args - Arguments to update many OnRampTransactions.
     * @example
     * // Update many OnRampTransactions
     * const onRampTransaction = await prisma.onRampTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OnRampTransactions and only return the `id`
     * const onRampTransactionWithIdOnly = await prisma.onRampTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends OnRampTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, OnRampTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OnRampTransaction.
     * @param {OnRampTransactionUpsertArgs} args - Arguments to update or create a OnRampTransaction.
     * @example
     * // Update or create a OnRampTransaction
     * const onRampTransaction = await prisma.onRampTransaction.upsert({
     *   create: {
     *     // ... data to create a OnRampTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OnRampTransaction we want to update
     *   }
     * })
     */
    upsert<T extends OnRampTransactionUpsertArgs>(args: SelectSubset<T, OnRampTransactionUpsertArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OnRampTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionCountArgs} args - Arguments to filter OnRampTransactions to count.
     * @example
     * // Count the number of OnRampTransactions
     * const count = await prisma.onRampTransaction.count({
     *   where: {
     *     // ... the filter for the OnRampTransactions we want to count
     *   }
     * })
    **/
    count<T extends OnRampTransactionCountArgs>(
      args?: Subset<T, OnRampTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OnRampTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OnRampTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OnRampTransactionAggregateArgs>(args: Subset<T, OnRampTransactionAggregateArgs>): Prisma.PrismaPromise<GetOnRampTransactionAggregateType<T>>

    /**
     * Group by OnRampTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionGroupByArgs} args - Group by arguments.
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
      T extends OnRampTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OnRampTransactionGroupByArgs['orderBy'] }
        : { orderBy?: OnRampTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OnRampTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOnRampTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OnRampTransaction model
   */
  readonly fields: OnRampTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OnRampTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OnRampTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OnRampTransaction model
   */
  interface OnRampTransactionFieldRefs {
    readonly id: FieldRef<"OnRampTransaction", 'Int'>
    readonly status: FieldRef<"OnRampTransaction", 'OnRampStatus'>
    readonly token: FieldRef<"OnRampTransaction", 'String'>
    readonly provider: FieldRef<"OnRampTransaction", 'String'>
    readonly amount: FieldRef<"OnRampTransaction", 'Int'>
    readonly startTime: FieldRef<"OnRampTransaction", 'DateTime'>
    readonly userId: FieldRef<"OnRampTransaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OnRampTransaction findUnique
   */
  export type OnRampTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTransaction to fetch.
     */
    where: OnRampTransactionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * OnRampTransaction findUniqueOrThrow
   */
  export type OnRampTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTransaction to fetch.
     */
    where: OnRampTransactionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * OnRampTransaction findFirst
   */
  export type OnRampTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTransaction to fetch.
     */
    where?: OnRampTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnRampTransactions to fetch.
     */
    orderBy?: OnRampTransactionOrderByWithRelationInput | OnRampTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OnRampTransactions.
     */
    cursor?: OnRampTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnRampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnRampTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OnRampTransactions.
     */
    distinct?: OnRampTransactionScalarFieldEnum | OnRampTransactionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * OnRampTransaction findFirstOrThrow
   */
  export type OnRampTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTransaction to fetch.
     */
    where?: OnRampTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnRampTransactions to fetch.
     */
    orderBy?: OnRampTransactionOrderByWithRelationInput | OnRampTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OnRampTransactions.
     */
    cursor?: OnRampTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnRampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnRampTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OnRampTransactions.
     */
    distinct?: OnRampTransactionScalarFieldEnum | OnRampTransactionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * OnRampTransaction findMany
   */
  export type OnRampTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTransactions to fetch.
     */
    where?: OnRampTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnRampTransactions to fetch.
     */
    orderBy?: OnRampTransactionOrderByWithRelationInput | OnRampTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OnRampTransactions.
     */
    cursor?: OnRampTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnRampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnRampTransactions.
     */
    skip?: number
    distinct?: OnRampTransactionScalarFieldEnum | OnRampTransactionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * OnRampTransaction create
   */
  export type OnRampTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a OnRampTransaction.
     */
    data: XOR<OnRampTransactionCreateInput, OnRampTransactionUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * OnRampTransaction createMany
   */
  export type OnRampTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OnRampTransactions.
     */
    data: OnRampTransactionCreateManyInput | OnRampTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OnRampTransaction createManyAndReturn
   */
  export type OnRampTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many OnRampTransactions.
     */
    data: OnRampTransactionCreateManyInput | OnRampTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OnRampTransaction update
   */
  export type OnRampTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a OnRampTransaction.
     */
    data: XOR<OnRampTransactionUpdateInput, OnRampTransactionUncheckedUpdateInput>
    /**
     * Choose, which OnRampTransaction to update.
     */
    where: OnRampTransactionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * OnRampTransaction updateMany
   */
  export type OnRampTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OnRampTransactions.
     */
    data: XOR<OnRampTransactionUpdateManyMutationInput, OnRampTransactionUncheckedUpdateManyInput>
    /**
     * Filter which OnRampTransactions to update
     */
    where?: OnRampTransactionWhereInput
    /**
     * Limit how many OnRampTransactions to update.
     */
    limit?: number
  }

  /**
   * OnRampTransaction updateManyAndReturn
   */
  export type OnRampTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * The data used to update OnRampTransactions.
     */
    data: XOR<OnRampTransactionUpdateManyMutationInput, OnRampTransactionUncheckedUpdateManyInput>
    /**
     * Filter which OnRampTransactions to update
     */
    where?: OnRampTransactionWhereInput
    /**
     * Limit how many OnRampTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OnRampTransaction upsert
   */
  export type OnRampTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the OnRampTransaction to update in case it exists.
     */
    where: OnRampTransactionWhereUniqueInput
    /**
     * In case the OnRampTransaction found by the `where` argument doesn't exist, create a new OnRampTransaction with this data.
     */
    create: XOR<OnRampTransactionCreateInput, OnRampTransactionUncheckedCreateInput>
    /**
     * In case the OnRampTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OnRampTransactionUpdateInput, OnRampTransactionUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * OnRampTransaction delete
   */
  export type OnRampTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * Filter which OnRampTransaction to delete.
     */
    where: OnRampTransactionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * OnRampTransaction deleteMany
   */
  export type OnRampTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OnRampTransactions to delete
     */
    where?: OnRampTransactionWhereInput
    /**
     * Limit how many OnRampTransactions to delete.
     */
    limit?: number
  }

  /**
   * OnRampTransaction without action
   */
  export type OnRampTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Balance
   */

  export type AggregateBalance = {
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  export type BalanceAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    locked: number | null
  }

  export type BalanceSumAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    locked: number | null
  }

  export type BalanceMinAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    locked: number | null
  }

  export type BalanceMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    locked: number | null
  }

  export type BalanceCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    locked: number
    _all: number
  }


  export type BalanceAvgAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
  }

  export type BalanceSumAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
  }

  export type BalanceMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
  }

  export type BalanceMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
  }

  export type BalanceCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
    _all?: true
  }

  export type BalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balance to aggregate.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Balances
    **/
    _count?: true | BalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BalanceMaxAggregateInputType
  }

  export type GetBalanceAggregateType<T extends BalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalance[P]>
      : GetScalarType<T[P], AggregateBalance[P]>
  }




  export type BalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalanceWhereInput
    orderBy?: BalanceOrderByWithAggregationInput | BalanceOrderByWithAggregationInput[]
    by: BalanceScalarFieldEnum[] | BalanceScalarFieldEnum
    having?: BalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BalanceCountAggregateInputType | true
    _avg?: BalanceAvgAggregateInputType
    _sum?: BalanceSumAggregateInputType
    _min?: BalanceMinAggregateInputType
    _max?: BalanceMaxAggregateInputType
  }

  export type BalanceGroupByOutputType = {
    id: number
    userId: number
    amount: number
    locked: number
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  type GetBalanceGroupByPayload<T extends BalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BalanceGroupByOutputType[P]>
            : GetScalarType<T[P], BalanceGroupByOutputType[P]>
        }
      >
    >


  export type BalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    locked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    locked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    locked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    locked?: boolean
  }

  export type BalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "locked", ExtArgs["result"]["balance"]>
  export type BalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BalanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Balance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      amount: number
      locked: number
    }, ExtArgs["result"]["balance"]>
    composites: {}
  }

  type BalanceGetPayload<S extends boolean | null | undefined | BalanceDefaultArgs> = $Result.GetResult<Prisma.$BalancePayload, S>

  type BalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: BalanceCountAggregateInputType | true
    }

  export interface BalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Balance'], meta: { name: 'Balance' } }
    /**
     * Find zero or one Balance that matches the filter.
     * @param {BalanceFindUniqueArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BalanceFindUniqueArgs>(args: SelectSubset<T, BalanceFindUniqueArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Balance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BalanceFindUniqueOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, BalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindFirstArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BalanceFindFirstArgs>(args?: SelectSubset<T, BalanceFindFirstArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindFirstOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, BalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Balances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Balances
     * const balances = await prisma.balance.findMany()
     * 
     * // Get first 10 Balances
     * const balances = await prisma.balance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const balanceWithIdOnly = await prisma.balance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BalanceFindManyArgs>(args?: SelectSubset<T, BalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Balance.
     * @param {BalanceCreateArgs} args - Arguments to create a Balance.
     * @example
     * // Create one Balance
     * const Balance = await prisma.balance.create({
     *   data: {
     *     // ... data to create a Balance
     *   }
     * })
     * 
     */
    create<T extends BalanceCreateArgs>(args: SelectSubset<T, BalanceCreateArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Balances.
     * @param {BalanceCreateManyArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BalanceCreateManyArgs>(args?: SelectSubset<T, BalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Balances and returns the data saved in the database.
     * @param {BalanceCreateManyAndReturnArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Balances and only return the `id`
     * const balanceWithIdOnly = await prisma.balance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, BalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Balance.
     * @param {BalanceDeleteArgs} args - Arguments to delete one Balance.
     * @example
     * // Delete one Balance
     * const Balance = await prisma.balance.delete({
     *   where: {
     *     // ... filter to delete one Balance
     *   }
     * })
     * 
     */
    delete<T extends BalanceDeleteArgs>(args: SelectSubset<T, BalanceDeleteArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Balance.
     * @param {BalanceUpdateArgs} args - Arguments to update one Balance.
     * @example
     * // Update one Balance
     * const balance = await prisma.balance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BalanceUpdateArgs>(args: SelectSubset<T, BalanceUpdateArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Balances.
     * @param {BalanceDeleteManyArgs} args - Arguments to filter Balances to delete.
     * @example
     * // Delete a few Balances
     * const { count } = await prisma.balance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BalanceDeleteManyArgs>(args?: SelectSubset<T, BalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BalanceUpdateManyArgs>(args: SelectSubset<T, BalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances and returns the data updated in the database.
     * @param {BalanceUpdateManyAndReturnArgs} args - Arguments to update many Balances.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Balances and only return the `id`
     * const balanceWithIdOnly = await prisma.balance.updateManyAndReturn({
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
    updateManyAndReturn<T extends BalanceUpdateManyAndReturnArgs>(args: SelectSubset<T, BalanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Balance.
     * @param {BalanceUpsertArgs} args - Arguments to update or create a Balance.
     * @example
     * // Update or create a Balance
     * const balance = await prisma.balance.upsert({
     *   create: {
     *     // ... data to create a Balance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Balance we want to update
     *   }
     * })
     */
    upsert<T extends BalanceUpsertArgs>(args: SelectSubset<T, BalanceUpsertArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceCountArgs} args - Arguments to filter Balances to count.
     * @example
     * // Count the number of Balances
     * const count = await prisma.balance.count({
     *   where: {
     *     // ... the filter for the Balances we want to count
     *   }
     * })
    **/
    count<T extends BalanceCountArgs>(
      args?: Subset<T, BalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BalanceAggregateArgs>(args: Subset<T, BalanceAggregateArgs>): Prisma.PrismaPromise<GetBalanceAggregateType<T>>

    /**
     * Group by Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceGroupByArgs} args - Group by arguments.
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
      T extends BalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BalanceGroupByArgs['orderBy'] }
        : { orderBy?: BalanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Balance model
   */
  readonly fields: BalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Balance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Balance model
   */
  interface BalanceFieldRefs {
    readonly id: FieldRef<"Balance", 'Int'>
    readonly userId: FieldRef<"Balance", 'Int'>
    readonly amount: FieldRef<"Balance", 'Int'>
    readonly locked: FieldRef<"Balance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Balance findUnique
   */
  export type BalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where: BalanceWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Balance findUniqueOrThrow
   */
  export type BalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where: BalanceWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Balance findFirst
   */
  export type BalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Balance findFirstOrThrow
   */
  export type BalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Balance findMany
   */
  export type BalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balances to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Balance create
   */
  export type BalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Balance.
     */
    data: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Balance createMany
   */
  export type BalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Balances.
     */
    data: BalanceCreateManyInput | BalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Balance createManyAndReturn
   */
  export type BalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * The data used to create many Balances.
     */
    data: BalanceCreateManyInput | BalanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Balance update
   */
  export type BalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Balance.
     */
    data: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>
    /**
     * Choose, which Balance to update.
     */
    where: BalanceWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Balance updateMany
   */
  export type BalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Balances.
     */
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyInput>
    /**
     * Filter which Balances to update
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to update.
     */
    limit?: number
  }

  /**
   * Balance updateManyAndReturn
   */
  export type BalanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * The data used to update Balances.
     */
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyInput>
    /**
     * Filter which Balances to update
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Balance upsert
   */
  export type BalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Balance to update in case it exists.
     */
    where: BalanceWhereUniqueInput
    /**
     * In case the Balance found by the `where` argument doesn't exist, create a new Balance with this data.
     */
    create: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>
    /**
     * In case the Balance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Balance delete
   */
  export type BalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter which Balance to delete.
     */
    where: BalanceWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Balance deleteMany
   */
  export type BalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balances to delete
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to delete.
     */
    limit?: number
  }

  /**
   * Balance without action
   */
  export type BalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
  }


  /**
   * Model p2pTransfer
   */

  export type AggregateP2pTransfer = {
    _count: P2pTransferCountAggregateOutputType | null
    _avg: P2pTransferAvgAggregateOutputType | null
    _sum: P2pTransferSumAggregateOutputType | null
    _min: P2pTransferMinAggregateOutputType | null
    _max: P2pTransferMaxAggregateOutputType | null
  }

  export type P2pTransferAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    senderUserId: number | null
    receiverUserId: number | null
  }

  export type P2pTransferSumAggregateOutputType = {
    id: number | null
    amount: number | null
    senderUserId: number | null
    receiverUserId: number | null
  }

  export type P2pTransferMinAggregateOutputType = {
    id: number | null
    amount: number | null
    timeStamp: Date | null
    senderUserId: number | null
    receiverUserId: number | null
  }

  export type P2pTransferMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    timeStamp: Date | null
    senderUserId: number | null
    receiverUserId: number | null
  }

  export type P2pTransferCountAggregateOutputType = {
    id: number
    amount: number
    timeStamp: number
    senderUserId: number
    receiverUserId: number
    _all: number
  }


  export type P2pTransferAvgAggregateInputType = {
    id?: true
    amount?: true
    senderUserId?: true
    receiverUserId?: true
  }

  export type P2pTransferSumAggregateInputType = {
    id?: true
    amount?: true
    senderUserId?: true
    receiverUserId?: true
  }

  export type P2pTransferMinAggregateInputType = {
    id?: true
    amount?: true
    timeStamp?: true
    senderUserId?: true
    receiverUserId?: true
  }

  export type P2pTransferMaxAggregateInputType = {
    id?: true
    amount?: true
    timeStamp?: true
    senderUserId?: true
    receiverUserId?: true
  }

  export type P2pTransferCountAggregateInputType = {
    id?: true
    amount?: true
    timeStamp?: true
    senderUserId?: true
    receiverUserId?: true
    _all?: true
  }

  export type P2pTransferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which p2pTransfer to aggregate.
     */
    where?: p2pTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of p2pTransfers to fetch.
     */
    orderBy?: p2pTransferOrderByWithRelationInput | p2pTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: p2pTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` p2pTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` p2pTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned p2pTransfers
    **/
    _count?: true | P2pTransferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: P2pTransferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: P2pTransferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: P2pTransferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: P2pTransferMaxAggregateInputType
  }

  export type GetP2pTransferAggregateType<T extends P2pTransferAggregateArgs> = {
        [P in keyof T & keyof AggregateP2pTransfer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateP2pTransfer[P]>
      : GetScalarType<T[P], AggregateP2pTransfer[P]>
  }




  export type p2pTransferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: p2pTransferWhereInput
    orderBy?: p2pTransferOrderByWithAggregationInput | p2pTransferOrderByWithAggregationInput[]
    by: P2pTransferScalarFieldEnum[] | P2pTransferScalarFieldEnum
    having?: p2pTransferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: P2pTransferCountAggregateInputType | true
    _avg?: P2pTransferAvgAggregateInputType
    _sum?: P2pTransferSumAggregateInputType
    _min?: P2pTransferMinAggregateInputType
    _max?: P2pTransferMaxAggregateInputType
  }

  export type P2pTransferGroupByOutputType = {
    id: number
    amount: number
    timeStamp: Date
    senderUserId: number
    receiverUserId: number
    _count: P2pTransferCountAggregateOutputType | null
    _avg: P2pTransferAvgAggregateOutputType | null
    _sum: P2pTransferSumAggregateOutputType | null
    _min: P2pTransferMinAggregateOutputType | null
    _max: P2pTransferMaxAggregateOutputType | null
  }

  type GetP2pTransferGroupByPayload<T extends p2pTransferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<P2pTransferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof P2pTransferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], P2pTransferGroupByOutputType[P]>
            : GetScalarType<T[P], P2pTransferGroupByOutputType[P]>
        }
      >
    >


  export type p2pTransferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    timeStamp?: boolean
    senderUserId?: boolean
    receiverUserId?: boolean
    receivedUser?: boolean | UserDefaultArgs<ExtArgs>
    sentUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["p2pTransfer"]>

  export type p2pTransferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    timeStamp?: boolean
    senderUserId?: boolean
    receiverUserId?: boolean
    receivedUser?: boolean | UserDefaultArgs<ExtArgs>
    sentUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["p2pTransfer"]>

  export type p2pTransferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    timeStamp?: boolean
    senderUserId?: boolean
    receiverUserId?: boolean
    receivedUser?: boolean | UserDefaultArgs<ExtArgs>
    sentUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["p2pTransfer"]>

  export type p2pTransferSelectScalar = {
    id?: boolean
    amount?: boolean
    timeStamp?: boolean
    senderUserId?: boolean
    receiverUserId?: boolean
  }

  export type p2pTransferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "timeStamp" | "senderUserId" | "receiverUserId", ExtArgs["result"]["p2pTransfer"]>
  export type p2pTransferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receivedUser?: boolean | UserDefaultArgs<ExtArgs>
    sentUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type p2pTransferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receivedUser?: boolean | UserDefaultArgs<ExtArgs>
    sentUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type p2pTransferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receivedUser?: boolean | UserDefaultArgs<ExtArgs>
    sentUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $p2pTransferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "p2pTransfer"
    objects: {
      receivedUser: Prisma.$UserPayload<ExtArgs>
      sentUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      timeStamp: Date
      senderUserId: number
      receiverUserId: number
    }, ExtArgs["result"]["p2pTransfer"]>
    composites: {}
  }

  type p2pTransferGetPayload<S extends boolean | null | undefined | p2pTransferDefaultArgs> = $Result.GetResult<Prisma.$p2pTransferPayload, S>

  type p2pTransferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<p2pTransferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: P2pTransferCountAggregateInputType | true
    }

  export interface p2pTransferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['p2pTransfer'], meta: { name: 'p2pTransfer' } }
    /**
     * Find zero or one P2pTransfer that matches the filter.
     * @param {p2pTransferFindUniqueArgs} args - Arguments to find a P2pTransfer
     * @example
     * // Get one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends p2pTransferFindUniqueArgs>(args: SelectSubset<T, p2pTransferFindUniqueArgs<ExtArgs>>): Prisma__p2pTransferClient<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one P2pTransfer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {p2pTransferFindUniqueOrThrowArgs} args - Arguments to find a P2pTransfer
     * @example
     * // Get one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends p2pTransferFindUniqueOrThrowArgs>(args: SelectSubset<T, p2pTransferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__p2pTransferClient<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first P2pTransfer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {p2pTransferFindFirstArgs} args - Arguments to find a P2pTransfer
     * @example
     * // Get one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends p2pTransferFindFirstArgs>(args?: SelectSubset<T, p2pTransferFindFirstArgs<ExtArgs>>): Prisma__p2pTransferClient<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first P2pTransfer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {p2pTransferFindFirstOrThrowArgs} args - Arguments to find a P2pTransfer
     * @example
     * // Get one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends p2pTransferFindFirstOrThrowArgs>(args?: SelectSubset<T, p2pTransferFindFirstOrThrowArgs<ExtArgs>>): Prisma__p2pTransferClient<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more P2pTransfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {p2pTransferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all P2pTransfers
     * const p2pTransfers = await prisma.p2pTransfer.findMany()
     * 
     * // Get first 10 P2pTransfers
     * const p2pTransfers = await prisma.p2pTransfer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const p2pTransferWithIdOnly = await prisma.p2pTransfer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends p2pTransferFindManyArgs>(args?: SelectSubset<T, p2pTransferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a P2pTransfer.
     * @param {p2pTransferCreateArgs} args - Arguments to create a P2pTransfer.
     * @example
     * // Create one P2pTransfer
     * const P2pTransfer = await prisma.p2pTransfer.create({
     *   data: {
     *     // ... data to create a P2pTransfer
     *   }
     * })
     * 
     */
    create<T extends p2pTransferCreateArgs>(args: SelectSubset<T, p2pTransferCreateArgs<ExtArgs>>): Prisma__p2pTransferClient<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many P2pTransfers.
     * @param {p2pTransferCreateManyArgs} args - Arguments to create many P2pTransfers.
     * @example
     * // Create many P2pTransfers
     * const p2pTransfer = await prisma.p2pTransfer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends p2pTransferCreateManyArgs>(args?: SelectSubset<T, p2pTransferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many P2pTransfers and returns the data saved in the database.
     * @param {p2pTransferCreateManyAndReturnArgs} args - Arguments to create many P2pTransfers.
     * @example
     * // Create many P2pTransfers
     * const p2pTransfer = await prisma.p2pTransfer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many P2pTransfers and only return the `id`
     * const p2pTransferWithIdOnly = await prisma.p2pTransfer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends p2pTransferCreateManyAndReturnArgs>(args?: SelectSubset<T, p2pTransferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a P2pTransfer.
     * @param {p2pTransferDeleteArgs} args - Arguments to delete one P2pTransfer.
     * @example
     * // Delete one P2pTransfer
     * const P2pTransfer = await prisma.p2pTransfer.delete({
     *   where: {
     *     // ... filter to delete one P2pTransfer
     *   }
     * })
     * 
     */
    delete<T extends p2pTransferDeleteArgs>(args: SelectSubset<T, p2pTransferDeleteArgs<ExtArgs>>): Prisma__p2pTransferClient<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one P2pTransfer.
     * @param {p2pTransferUpdateArgs} args - Arguments to update one P2pTransfer.
     * @example
     * // Update one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends p2pTransferUpdateArgs>(args: SelectSubset<T, p2pTransferUpdateArgs<ExtArgs>>): Prisma__p2pTransferClient<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more P2pTransfers.
     * @param {p2pTransferDeleteManyArgs} args - Arguments to filter P2pTransfers to delete.
     * @example
     * // Delete a few P2pTransfers
     * const { count } = await prisma.p2pTransfer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends p2pTransferDeleteManyArgs>(args?: SelectSubset<T, p2pTransferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more P2pTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {p2pTransferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many P2pTransfers
     * const p2pTransfer = await prisma.p2pTransfer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends p2pTransferUpdateManyArgs>(args: SelectSubset<T, p2pTransferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more P2pTransfers and returns the data updated in the database.
     * @param {p2pTransferUpdateManyAndReturnArgs} args - Arguments to update many P2pTransfers.
     * @example
     * // Update many P2pTransfers
     * const p2pTransfer = await prisma.p2pTransfer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more P2pTransfers and only return the `id`
     * const p2pTransferWithIdOnly = await prisma.p2pTransfer.updateManyAndReturn({
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
    updateManyAndReturn<T extends p2pTransferUpdateManyAndReturnArgs>(args: SelectSubset<T, p2pTransferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one P2pTransfer.
     * @param {p2pTransferUpsertArgs} args - Arguments to update or create a P2pTransfer.
     * @example
     * // Update or create a P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.upsert({
     *   create: {
     *     // ... data to create a P2pTransfer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the P2pTransfer we want to update
     *   }
     * })
     */
    upsert<T extends p2pTransferUpsertArgs>(args: SelectSubset<T, p2pTransferUpsertArgs<ExtArgs>>): Prisma__p2pTransferClient<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of P2pTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {p2pTransferCountArgs} args - Arguments to filter P2pTransfers to count.
     * @example
     * // Count the number of P2pTransfers
     * const count = await prisma.p2pTransfer.count({
     *   where: {
     *     // ... the filter for the P2pTransfers we want to count
     *   }
     * })
    **/
    count<T extends p2pTransferCountArgs>(
      args?: Subset<T, p2pTransferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], P2pTransferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a P2pTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2pTransferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends P2pTransferAggregateArgs>(args: Subset<T, P2pTransferAggregateArgs>): Prisma.PrismaPromise<GetP2pTransferAggregateType<T>>

    /**
     * Group by P2pTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {p2pTransferGroupByArgs} args - Group by arguments.
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
      T extends p2pTransferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: p2pTransferGroupByArgs['orderBy'] }
        : { orderBy?: p2pTransferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, p2pTransferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetP2pTransferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the p2pTransfer model
   */
  readonly fields: p2pTransferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for p2pTransfer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__p2pTransferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receivedUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sentUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the p2pTransfer model
   */
  interface p2pTransferFieldRefs {
    readonly id: FieldRef<"p2pTransfer", 'Int'>
    readonly amount: FieldRef<"p2pTransfer", 'Int'>
    readonly timeStamp: FieldRef<"p2pTransfer", 'DateTime'>
    readonly senderUserId: FieldRef<"p2pTransfer", 'Int'>
    readonly receiverUserId: FieldRef<"p2pTransfer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * p2pTransfer findUnique
   */
  export type p2pTransferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    /**
     * Filter, which p2pTransfer to fetch.
     */
    where: p2pTransferWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * p2pTransfer findUniqueOrThrow
   */
  export type p2pTransferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    /**
     * Filter, which p2pTransfer to fetch.
     */
    where: p2pTransferWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * p2pTransfer findFirst
   */
  export type p2pTransferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    /**
     * Filter, which p2pTransfer to fetch.
     */
    where?: p2pTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of p2pTransfers to fetch.
     */
    orderBy?: p2pTransferOrderByWithRelationInput | p2pTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for p2pTransfers.
     */
    cursor?: p2pTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` p2pTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` p2pTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of p2pTransfers.
     */
    distinct?: P2pTransferScalarFieldEnum | P2pTransferScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * p2pTransfer findFirstOrThrow
   */
  export type p2pTransferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    /**
     * Filter, which p2pTransfer to fetch.
     */
    where?: p2pTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of p2pTransfers to fetch.
     */
    orderBy?: p2pTransferOrderByWithRelationInput | p2pTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for p2pTransfers.
     */
    cursor?: p2pTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` p2pTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` p2pTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of p2pTransfers.
     */
    distinct?: P2pTransferScalarFieldEnum | P2pTransferScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * p2pTransfer findMany
   */
  export type p2pTransferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    /**
     * Filter, which p2pTransfers to fetch.
     */
    where?: p2pTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of p2pTransfers to fetch.
     */
    orderBy?: p2pTransferOrderByWithRelationInput | p2pTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing p2pTransfers.
     */
    cursor?: p2pTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` p2pTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` p2pTransfers.
     */
    skip?: number
    distinct?: P2pTransferScalarFieldEnum | P2pTransferScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * p2pTransfer create
   */
  export type p2pTransferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    /**
     * The data needed to create a p2pTransfer.
     */
    data: XOR<p2pTransferCreateInput, p2pTransferUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * p2pTransfer createMany
   */
  export type p2pTransferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many p2pTransfers.
     */
    data: p2pTransferCreateManyInput | p2pTransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * p2pTransfer createManyAndReturn
   */
  export type p2pTransferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * The data used to create many p2pTransfers.
     */
    data: p2pTransferCreateManyInput | p2pTransferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * p2pTransfer update
   */
  export type p2pTransferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    /**
     * The data needed to update a p2pTransfer.
     */
    data: XOR<p2pTransferUpdateInput, p2pTransferUncheckedUpdateInput>
    /**
     * Choose, which p2pTransfer to update.
     */
    where: p2pTransferWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * p2pTransfer updateMany
   */
  export type p2pTransferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update p2pTransfers.
     */
    data: XOR<p2pTransferUpdateManyMutationInput, p2pTransferUncheckedUpdateManyInput>
    /**
     * Filter which p2pTransfers to update
     */
    where?: p2pTransferWhereInput
    /**
     * Limit how many p2pTransfers to update.
     */
    limit?: number
  }

  /**
   * p2pTransfer updateManyAndReturn
   */
  export type p2pTransferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * The data used to update p2pTransfers.
     */
    data: XOR<p2pTransferUpdateManyMutationInput, p2pTransferUncheckedUpdateManyInput>
    /**
     * Filter which p2pTransfers to update
     */
    where?: p2pTransferWhereInput
    /**
     * Limit how many p2pTransfers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * p2pTransfer upsert
   */
  export type p2pTransferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    /**
     * The filter to search for the p2pTransfer to update in case it exists.
     */
    where: p2pTransferWhereUniqueInput
    /**
     * In case the p2pTransfer found by the `where` argument doesn't exist, create a new p2pTransfer with this data.
     */
    create: XOR<p2pTransferCreateInput, p2pTransferUncheckedCreateInput>
    /**
     * In case the p2pTransfer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<p2pTransferUpdateInput, p2pTransferUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * p2pTransfer delete
   */
  export type p2pTransferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    /**
     * Filter which p2pTransfer to delete.
     */
    where: p2pTransferWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * p2pTransfer deleteMany
   */
  export type p2pTransferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which p2pTransfers to delete
     */
    where?: p2pTransferWhereInput
    /**
     * Limit how many p2pTransfers to delete.
     */
    limit?: number
  }

  /**
   * p2pTransfer without action
   */
  export type p2pTransferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
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
    name: 'name',
    number: 'number',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const OnRampTransactionScalarFieldEnum: {
    id: 'id',
    status: 'status',
    token: 'token',
    provider: 'provider',
    amount: 'amount',
    startTime: 'startTime',
    userId: 'userId'
  };

  export type OnRampTransactionScalarFieldEnum = (typeof OnRampTransactionScalarFieldEnum)[keyof typeof OnRampTransactionScalarFieldEnum]


  export const BalanceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    locked: 'locked'
  };

  export type BalanceScalarFieldEnum = (typeof BalanceScalarFieldEnum)[keyof typeof BalanceScalarFieldEnum]


  export const P2pTransferScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    timeStamp: 'timeStamp',
    senderUserId: 'senderUserId',
    receiverUserId: 'receiverUserId'
  };

  export type P2pTransferScalarFieldEnum = (typeof P2pTransferScalarFieldEnum)[keyof typeof P2pTransferScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'OnRampStatus'
   */
  export type EnumOnRampStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OnRampStatus'>
    


  /**
   * Reference to a field of type 'OnRampStatus[]'
   */
  export type ListEnumOnRampStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OnRampStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
    id?: IntFilter<"User"> | number
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    number?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    Balance?: XOR<BalanceNullableScalarRelationFilter, BalanceWhereInput> | null
    OnRampTransaction?: OnRampTransactionListRelationFilter
    ReceivedTransactions?: P2pTransferListRelationFilter
    SentTransactions?: P2pTransferListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    number?: SortOrder
    password?: SortOrder
    Balance?: BalanceOrderByWithRelationInput
    OnRampTransaction?: OnRampTransactionOrderByRelationAggregateInput
    ReceivedTransactions?: p2pTransferOrderByRelationAggregateInput
    SentTransactions?: p2pTransferOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    number?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    Balance?: XOR<BalanceNullableScalarRelationFilter, BalanceWhereInput> | null
    OnRampTransaction?: OnRampTransactionListRelationFilter
    ReceivedTransactions?: P2pTransferListRelationFilter
    SentTransactions?: P2pTransferListRelationFilter
  }, "id" | "email" | "number">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    number?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    number?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type OnRampTransactionWhereInput = {
    AND?: OnRampTransactionWhereInput | OnRampTransactionWhereInput[]
    OR?: OnRampTransactionWhereInput[]
    NOT?: OnRampTransactionWhereInput | OnRampTransactionWhereInput[]
    id?: IntFilter<"OnRampTransaction"> | number
    status?: EnumOnRampStatusFilter<"OnRampTransaction"> | $Enums.OnRampStatus
    token?: StringFilter<"OnRampTransaction"> | string
    provider?: StringFilter<"OnRampTransaction"> | string
    amount?: IntFilter<"OnRampTransaction"> | number
    startTime?: DateTimeFilter<"OnRampTransaction"> | Date | string
    userId?: IntFilter<"OnRampTransaction"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OnRampTransactionOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    startTime?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OnRampTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: OnRampTransactionWhereInput | OnRampTransactionWhereInput[]
    OR?: OnRampTransactionWhereInput[]
    NOT?: OnRampTransactionWhereInput | OnRampTransactionWhereInput[]
    status?: EnumOnRampStatusFilter<"OnRampTransaction"> | $Enums.OnRampStatus
    provider?: StringFilter<"OnRampTransaction"> | string
    amount?: IntFilter<"OnRampTransaction"> | number
    startTime?: DateTimeFilter<"OnRampTransaction"> | Date | string
    userId?: IntFilter<"OnRampTransaction"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type OnRampTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    startTime?: SortOrder
    userId?: SortOrder
    _count?: OnRampTransactionCountOrderByAggregateInput
    _avg?: OnRampTransactionAvgOrderByAggregateInput
    _max?: OnRampTransactionMaxOrderByAggregateInput
    _min?: OnRampTransactionMinOrderByAggregateInput
    _sum?: OnRampTransactionSumOrderByAggregateInput
  }

  export type OnRampTransactionScalarWhereWithAggregatesInput = {
    AND?: OnRampTransactionScalarWhereWithAggregatesInput | OnRampTransactionScalarWhereWithAggregatesInput[]
    OR?: OnRampTransactionScalarWhereWithAggregatesInput[]
    NOT?: OnRampTransactionScalarWhereWithAggregatesInput | OnRampTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OnRampTransaction"> | number
    status?: EnumOnRampStatusWithAggregatesFilter<"OnRampTransaction"> | $Enums.OnRampStatus
    token?: StringWithAggregatesFilter<"OnRampTransaction"> | string
    provider?: StringWithAggregatesFilter<"OnRampTransaction"> | string
    amount?: IntWithAggregatesFilter<"OnRampTransaction"> | number
    startTime?: DateTimeWithAggregatesFilter<"OnRampTransaction"> | Date | string
    userId?: IntWithAggregatesFilter<"OnRampTransaction"> | number
  }

  export type BalanceWhereInput = {
    AND?: BalanceWhereInput | BalanceWhereInput[]
    OR?: BalanceWhereInput[]
    NOT?: BalanceWhereInput | BalanceWhereInput[]
    id?: IntFilter<"Balance"> | number
    userId?: IntFilter<"Balance"> | number
    amount?: IntFilter<"Balance"> | number
    locked?: IntFilter<"Balance"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BalanceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: BalanceWhereInput | BalanceWhereInput[]
    OR?: BalanceWhereInput[]
    NOT?: BalanceWhereInput | BalanceWhereInput[]
    amount?: IntFilter<"Balance"> | number
    locked?: IntFilter<"Balance"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type BalanceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
    _count?: BalanceCountOrderByAggregateInput
    _avg?: BalanceAvgOrderByAggregateInput
    _max?: BalanceMaxOrderByAggregateInput
    _min?: BalanceMinOrderByAggregateInput
    _sum?: BalanceSumOrderByAggregateInput
  }

  export type BalanceScalarWhereWithAggregatesInput = {
    AND?: BalanceScalarWhereWithAggregatesInput | BalanceScalarWhereWithAggregatesInput[]
    OR?: BalanceScalarWhereWithAggregatesInput[]
    NOT?: BalanceScalarWhereWithAggregatesInput | BalanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Balance"> | number
    userId?: IntWithAggregatesFilter<"Balance"> | number
    amount?: IntWithAggregatesFilter<"Balance"> | number
    locked?: IntWithAggregatesFilter<"Balance"> | number
  }

  export type p2pTransferWhereInput = {
    AND?: p2pTransferWhereInput | p2pTransferWhereInput[]
    OR?: p2pTransferWhereInput[]
    NOT?: p2pTransferWhereInput | p2pTransferWhereInput[]
    id?: IntFilter<"p2pTransfer"> | number
    amount?: IntFilter<"p2pTransfer"> | number
    timeStamp?: DateTimeFilter<"p2pTransfer"> | Date | string
    senderUserId?: IntFilter<"p2pTransfer"> | number
    receiverUserId?: IntFilter<"p2pTransfer"> | number
    receivedUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    sentUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type p2pTransferOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    timeStamp?: SortOrder
    senderUserId?: SortOrder
    receiverUserId?: SortOrder
    receivedUser?: UserOrderByWithRelationInput
    sentUser?: UserOrderByWithRelationInput
  }

  export type p2pTransferWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: p2pTransferWhereInput | p2pTransferWhereInput[]
    OR?: p2pTransferWhereInput[]
    NOT?: p2pTransferWhereInput | p2pTransferWhereInput[]
    amount?: IntFilter<"p2pTransfer"> | number
    timeStamp?: DateTimeFilter<"p2pTransfer"> | Date | string
    senderUserId?: IntFilter<"p2pTransfer"> | number
    receiverUserId?: IntFilter<"p2pTransfer"> | number
    receivedUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    sentUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type p2pTransferOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    timeStamp?: SortOrder
    senderUserId?: SortOrder
    receiverUserId?: SortOrder
    _count?: p2pTransferCountOrderByAggregateInput
    _avg?: p2pTransferAvgOrderByAggregateInput
    _max?: p2pTransferMaxOrderByAggregateInput
    _min?: p2pTransferMinOrderByAggregateInput
    _sum?: p2pTransferSumOrderByAggregateInput
  }

  export type p2pTransferScalarWhereWithAggregatesInput = {
    AND?: p2pTransferScalarWhereWithAggregatesInput | p2pTransferScalarWhereWithAggregatesInput[]
    OR?: p2pTransferScalarWhereWithAggregatesInput[]
    NOT?: p2pTransferScalarWhereWithAggregatesInput | p2pTransferScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"p2pTransfer"> | number
    amount?: IntWithAggregatesFilter<"p2pTransfer"> | number
    timeStamp?: DateTimeWithAggregatesFilter<"p2pTransfer"> | Date | string
    senderUserId?: IntWithAggregatesFilter<"p2pTransfer"> | number
    receiverUserId?: IntWithAggregatesFilter<"p2pTransfer"> | number
  }

  export type UserCreateInput = {
    email?: string | null
    name?: string | null
    number: string
    password: string
    Balance?: BalanceCreateNestedOneWithoutUserInput
    OnRampTransaction?: OnRampTransactionCreateNestedManyWithoutUserInput
    ReceivedTransactions?: p2pTransferCreateNestedManyWithoutReceivedUserInput
    SentTransactions?: p2pTransferCreateNestedManyWithoutSentUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email?: string | null
    name?: string | null
    number: string
    password: string
    Balance?: BalanceUncheckedCreateNestedOneWithoutUserInput
    OnRampTransaction?: OnRampTransactionUncheckedCreateNestedManyWithoutUserInput
    ReceivedTransactions?: p2pTransferUncheckedCreateNestedManyWithoutReceivedUserInput
    SentTransactions?: p2pTransferUncheckedCreateNestedManyWithoutSentUserInput
  }

  export type UserUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Balance?: BalanceUpdateOneWithoutUserNestedInput
    OnRampTransaction?: OnRampTransactionUpdateManyWithoutUserNestedInput
    ReceivedTransactions?: p2pTransferUpdateManyWithoutReceivedUserNestedInput
    SentTransactions?: p2pTransferUpdateManyWithoutSentUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Balance?: BalanceUncheckedUpdateOneWithoutUserNestedInput
    OnRampTransaction?: OnRampTransactionUncheckedUpdateManyWithoutUserNestedInput
    ReceivedTransactions?: p2pTransferUncheckedUpdateManyWithoutReceivedUserNestedInput
    SentTransactions?: p2pTransferUncheckedUpdateManyWithoutSentUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email?: string | null
    name?: string | null
    number: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type OnRampTransactionCreateInput = {
    status: $Enums.OnRampStatus
    token: string
    provider: string
    amount: number
    startTime: Date | string
    user: UserCreateNestedOneWithoutOnRampTransactionInput
  }

  export type OnRampTransactionUncheckedCreateInput = {
    id?: number
    status: $Enums.OnRampStatus
    token: string
    provider: string
    amount: number
    startTime: Date | string
    userId: number
  }

  export type OnRampTransactionUpdateInput = {
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOnRampTransactionNestedInput
  }

  export type OnRampTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OnRampTransactionCreateManyInput = {
    id?: number
    status: $Enums.OnRampStatus
    token: string
    provider: string
    amount: number
    startTime: Date | string
    userId: number
  }

  export type OnRampTransactionUpdateManyMutationInput = {
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnRampTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceCreateInput = {
    amount: number
    locked: number
    user: UserCreateNestedOneWithoutBalanceInput
  }

  export type BalanceUncheckedCreateInput = {
    id?: number
    userId: number
    amount: number
    locked: number
  }

  export type BalanceUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBalanceNestedInput
  }

  export type BalanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceCreateManyInput = {
    id?: number
    userId: number
    amount: number
    locked: number
  }

  export type BalanceUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type p2pTransferCreateInput = {
    amount: number
    timeStamp: Date | string
    receivedUser: UserCreateNestedOneWithoutReceivedTransactionsInput
    sentUser: UserCreateNestedOneWithoutSentTransactionsInput
  }

  export type p2pTransferUncheckedCreateInput = {
    id?: number
    amount: number
    timeStamp: Date | string
    senderUserId: number
    receiverUserId: number
  }

  export type p2pTransferUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedUser?: UserUpdateOneRequiredWithoutReceivedTransactionsNestedInput
    sentUser?: UserUpdateOneRequiredWithoutSentTransactionsNestedInput
  }

  export type p2pTransferUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    senderUserId?: IntFieldUpdateOperationsInput | number
    receiverUserId?: IntFieldUpdateOperationsInput | number
  }

  export type p2pTransferCreateManyInput = {
    id?: number
    amount: number
    timeStamp: Date | string
    senderUserId: number
    receiverUserId: number
  }

  export type p2pTransferUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type p2pTransferUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    senderUserId?: IntFieldUpdateOperationsInput | number
    receiverUserId?: IntFieldUpdateOperationsInput | number
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

  export type BalanceNullableScalarRelationFilter = {
    is?: BalanceWhereInput | null
    isNot?: BalanceWhereInput | null
  }

  export type OnRampTransactionListRelationFilter = {
    every?: OnRampTransactionWhereInput
    some?: OnRampTransactionWhereInput
    none?: OnRampTransactionWhereInput
  }

  export type P2pTransferListRelationFilter = {
    every?: p2pTransferWhereInput
    some?: p2pTransferWhereInput
    none?: p2pTransferWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OnRampTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type p2pTransferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumOnRampStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OnRampStatus | EnumOnRampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOnRampStatusFilter<$PrismaModel> | $Enums.OnRampStatus
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OnRampTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    startTime?: SortOrder
    userId?: SortOrder
  }

  export type OnRampTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type OnRampTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    startTime?: SortOrder
    userId?: SortOrder
  }

  export type OnRampTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    startTime?: SortOrder
    userId?: SortOrder
  }

  export type OnRampTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type EnumOnRampStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OnRampStatus | EnumOnRampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOnRampStatusWithAggregatesFilter<$PrismaModel> | $Enums.OnRampStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOnRampStatusFilter<$PrismaModel>
    _max?: NestedEnumOnRampStatusFilter<$PrismaModel>
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

  export type BalanceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type BalanceAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type BalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type BalanceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type BalanceSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type p2pTransferCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    timeStamp?: SortOrder
    senderUserId?: SortOrder
    receiverUserId?: SortOrder
  }

  export type p2pTransferAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    senderUserId?: SortOrder
    receiverUserId?: SortOrder
  }

  export type p2pTransferMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    timeStamp?: SortOrder
    senderUserId?: SortOrder
    receiverUserId?: SortOrder
  }

  export type p2pTransferMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    timeStamp?: SortOrder
    senderUserId?: SortOrder
    receiverUserId?: SortOrder
  }

  export type p2pTransferSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    senderUserId?: SortOrder
    receiverUserId?: SortOrder
  }

  export type BalanceCreateNestedOneWithoutUserInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput
    connect?: BalanceWhereUniqueInput
  }

  export type OnRampTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<OnRampTransactionCreateWithoutUserInput, OnRampTransactionUncheckedCreateWithoutUserInput> | OnRampTransactionCreateWithoutUserInput[] | OnRampTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OnRampTransactionCreateOrConnectWithoutUserInput | OnRampTransactionCreateOrConnectWithoutUserInput[]
    createMany?: OnRampTransactionCreateManyUserInputEnvelope
    connect?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
  }

  export type p2pTransferCreateNestedManyWithoutReceivedUserInput = {
    create?: XOR<p2pTransferCreateWithoutReceivedUserInput, p2pTransferUncheckedCreateWithoutReceivedUserInput> | p2pTransferCreateWithoutReceivedUserInput[] | p2pTransferUncheckedCreateWithoutReceivedUserInput[]
    connectOrCreate?: p2pTransferCreateOrConnectWithoutReceivedUserInput | p2pTransferCreateOrConnectWithoutReceivedUserInput[]
    createMany?: p2pTransferCreateManyReceivedUserInputEnvelope
    connect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
  }

  export type p2pTransferCreateNestedManyWithoutSentUserInput = {
    create?: XOR<p2pTransferCreateWithoutSentUserInput, p2pTransferUncheckedCreateWithoutSentUserInput> | p2pTransferCreateWithoutSentUserInput[] | p2pTransferUncheckedCreateWithoutSentUserInput[]
    connectOrCreate?: p2pTransferCreateOrConnectWithoutSentUserInput | p2pTransferCreateOrConnectWithoutSentUserInput[]
    createMany?: p2pTransferCreateManySentUserInputEnvelope
    connect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
  }

  export type BalanceUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput
    connect?: BalanceWhereUniqueInput
  }

  export type OnRampTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OnRampTransactionCreateWithoutUserInput, OnRampTransactionUncheckedCreateWithoutUserInput> | OnRampTransactionCreateWithoutUserInput[] | OnRampTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OnRampTransactionCreateOrConnectWithoutUserInput | OnRampTransactionCreateOrConnectWithoutUserInput[]
    createMany?: OnRampTransactionCreateManyUserInputEnvelope
    connect?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
  }

  export type p2pTransferUncheckedCreateNestedManyWithoutReceivedUserInput = {
    create?: XOR<p2pTransferCreateWithoutReceivedUserInput, p2pTransferUncheckedCreateWithoutReceivedUserInput> | p2pTransferCreateWithoutReceivedUserInput[] | p2pTransferUncheckedCreateWithoutReceivedUserInput[]
    connectOrCreate?: p2pTransferCreateOrConnectWithoutReceivedUserInput | p2pTransferCreateOrConnectWithoutReceivedUserInput[]
    createMany?: p2pTransferCreateManyReceivedUserInputEnvelope
    connect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
  }

  export type p2pTransferUncheckedCreateNestedManyWithoutSentUserInput = {
    create?: XOR<p2pTransferCreateWithoutSentUserInput, p2pTransferUncheckedCreateWithoutSentUserInput> | p2pTransferCreateWithoutSentUserInput[] | p2pTransferUncheckedCreateWithoutSentUserInput[]
    connectOrCreate?: p2pTransferCreateOrConnectWithoutSentUserInput | p2pTransferCreateOrConnectWithoutSentUserInput[]
    createMany?: p2pTransferCreateManySentUserInputEnvelope
    connect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BalanceUpdateOneWithoutUserNestedInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput
    upsert?: BalanceUpsertWithoutUserInput
    disconnect?: BalanceWhereInput | boolean
    delete?: BalanceWhereInput | boolean
    connect?: BalanceWhereUniqueInput
    update?: XOR<XOR<BalanceUpdateToOneWithWhereWithoutUserInput, BalanceUpdateWithoutUserInput>, BalanceUncheckedUpdateWithoutUserInput>
  }

  export type OnRampTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<OnRampTransactionCreateWithoutUserInput, OnRampTransactionUncheckedCreateWithoutUserInput> | OnRampTransactionCreateWithoutUserInput[] | OnRampTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OnRampTransactionCreateOrConnectWithoutUserInput | OnRampTransactionCreateOrConnectWithoutUserInput[]
    upsert?: OnRampTransactionUpsertWithWhereUniqueWithoutUserInput | OnRampTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OnRampTransactionCreateManyUserInputEnvelope
    set?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    disconnect?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    delete?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    connect?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    update?: OnRampTransactionUpdateWithWhereUniqueWithoutUserInput | OnRampTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OnRampTransactionUpdateManyWithWhereWithoutUserInput | OnRampTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OnRampTransactionScalarWhereInput | OnRampTransactionScalarWhereInput[]
  }

  export type p2pTransferUpdateManyWithoutReceivedUserNestedInput = {
    create?: XOR<p2pTransferCreateWithoutReceivedUserInput, p2pTransferUncheckedCreateWithoutReceivedUserInput> | p2pTransferCreateWithoutReceivedUserInput[] | p2pTransferUncheckedCreateWithoutReceivedUserInput[]
    connectOrCreate?: p2pTransferCreateOrConnectWithoutReceivedUserInput | p2pTransferCreateOrConnectWithoutReceivedUserInput[]
    upsert?: p2pTransferUpsertWithWhereUniqueWithoutReceivedUserInput | p2pTransferUpsertWithWhereUniqueWithoutReceivedUserInput[]
    createMany?: p2pTransferCreateManyReceivedUserInputEnvelope
    set?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    disconnect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    delete?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    connect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    update?: p2pTransferUpdateWithWhereUniqueWithoutReceivedUserInput | p2pTransferUpdateWithWhereUniqueWithoutReceivedUserInput[]
    updateMany?: p2pTransferUpdateManyWithWhereWithoutReceivedUserInput | p2pTransferUpdateManyWithWhereWithoutReceivedUserInput[]
    deleteMany?: p2pTransferScalarWhereInput | p2pTransferScalarWhereInput[]
  }

  export type p2pTransferUpdateManyWithoutSentUserNestedInput = {
    create?: XOR<p2pTransferCreateWithoutSentUserInput, p2pTransferUncheckedCreateWithoutSentUserInput> | p2pTransferCreateWithoutSentUserInput[] | p2pTransferUncheckedCreateWithoutSentUserInput[]
    connectOrCreate?: p2pTransferCreateOrConnectWithoutSentUserInput | p2pTransferCreateOrConnectWithoutSentUserInput[]
    upsert?: p2pTransferUpsertWithWhereUniqueWithoutSentUserInput | p2pTransferUpsertWithWhereUniqueWithoutSentUserInput[]
    createMany?: p2pTransferCreateManySentUserInputEnvelope
    set?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    disconnect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    delete?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    connect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    update?: p2pTransferUpdateWithWhereUniqueWithoutSentUserInput | p2pTransferUpdateWithWhereUniqueWithoutSentUserInput[]
    updateMany?: p2pTransferUpdateManyWithWhereWithoutSentUserInput | p2pTransferUpdateManyWithWhereWithoutSentUserInput[]
    deleteMany?: p2pTransferScalarWhereInput | p2pTransferScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BalanceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput
    upsert?: BalanceUpsertWithoutUserInput
    disconnect?: BalanceWhereInput | boolean
    delete?: BalanceWhereInput | boolean
    connect?: BalanceWhereUniqueInput
    update?: XOR<XOR<BalanceUpdateToOneWithWhereWithoutUserInput, BalanceUpdateWithoutUserInput>, BalanceUncheckedUpdateWithoutUserInput>
  }

  export type OnRampTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OnRampTransactionCreateWithoutUserInput, OnRampTransactionUncheckedCreateWithoutUserInput> | OnRampTransactionCreateWithoutUserInput[] | OnRampTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OnRampTransactionCreateOrConnectWithoutUserInput | OnRampTransactionCreateOrConnectWithoutUserInput[]
    upsert?: OnRampTransactionUpsertWithWhereUniqueWithoutUserInput | OnRampTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OnRampTransactionCreateManyUserInputEnvelope
    set?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    disconnect?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    delete?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    connect?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    update?: OnRampTransactionUpdateWithWhereUniqueWithoutUserInput | OnRampTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OnRampTransactionUpdateManyWithWhereWithoutUserInput | OnRampTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OnRampTransactionScalarWhereInput | OnRampTransactionScalarWhereInput[]
  }

  export type p2pTransferUncheckedUpdateManyWithoutReceivedUserNestedInput = {
    create?: XOR<p2pTransferCreateWithoutReceivedUserInput, p2pTransferUncheckedCreateWithoutReceivedUserInput> | p2pTransferCreateWithoutReceivedUserInput[] | p2pTransferUncheckedCreateWithoutReceivedUserInput[]
    connectOrCreate?: p2pTransferCreateOrConnectWithoutReceivedUserInput | p2pTransferCreateOrConnectWithoutReceivedUserInput[]
    upsert?: p2pTransferUpsertWithWhereUniqueWithoutReceivedUserInput | p2pTransferUpsertWithWhereUniqueWithoutReceivedUserInput[]
    createMany?: p2pTransferCreateManyReceivedUserInputEnvelope
    set?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    disconnect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    delete?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    connect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    update?: p2pTransferUpdateWithWhereUniqueWithoutReceivedUserInput | p2pTransferUpdateWithWhereUniqueWithoutReceivedUserInput[]
    updateMany?: p2pTransferUpdateManyWithWhereWithoutReceivedUserInput | p2pTransferUpdateManyWithWhereWithoutReceivedUserInput[]
    deleteMany?: p2pTransferScalarWhereInput | p2pTransferScalarWhereInput[]
  }

  export type p2pTransferUncheckedUpdateManyWithoutSentUserNestedInput = {
    create?: XOR<p2pTransferCreateWithoutSentUserInput, p2pTransferUncheckedCreateWithoutSentUserInput> | p2pTransferCreateWithoutSentUserInput[] | p2pTransferUncheckedCreateWithoutSentUserInput[]
    connectOrCreate?: p2pTransferCreateOrConnectWithoutSentUserInput | p2pTransferCreateOrConnectWithoutSentUserInput[]
    upsert?: p2pTransferUpsertWithWhereUniqueWithoutSentUserInput | p2pTransferUpsertWithWhereUniqueWithoutSentUserInput[]
    createMany?: p2pTransferCreateManySentUserInputEnvelope
    set?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    disconnect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    delete?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    connect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    update?: p2pTransferUpdateWithWhereUniqueWithoutSentUserInput | p2pTransferUpdateWithWhereUniqueWithoutSentUserInput[]
    updateMany?: p2pTransferUpdateManyWithWhereWithoutSentUserInput | p2pTransferUpdateManyWithWhereWithoutSentUserInput[]
    deleteMany?: p2pTransferScalarWhereInput | p2pTransferScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOnRampTransactionInput = {
    create?: XOR<UserCreateWithoutOnRampTransactionInput, UserUncheckedCreateWithoutOnRampTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutOnRampTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type EnumOnRampStatusFieldUpdateOperationsInput = {
    set?: $Enums.OnRampStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutOnRampTransactionNestedInput = {
    create?: XOR<UserCreateWithoutOnRampTransactionInput, UserUncheckedCreateWithoutOnRampTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutOnRampTransactionInput
    upsert?: UserUpsertWithoutOnRampTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOnRampTransactionInput, UserUpdateWithoutOnRampTransactionInput>, UserUncheckedUpdateWithoutOnRampTransactionInput>
  }

  export type UserCreateNestedOneWithoutBalanceInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBalanceNestedInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput
    upsert?: UserUpsertWithoutBalanceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBalanceInput, UserUpdateWithoutBalanceInput>, UserUncheckedUpdateWithoutBalanceInput>
  }

  export type UserCreateNestedOneWithoutReceivedTransactionsInput = {
    create?: XOR<UserCreateWithoutReceivedTransactionsInput, UserUncheckedCreateWithoutReceivedTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentTransactionsInput = {
    create?: XOR<UserCreateWithoutSentTransactionsInput, UserUncheckedCreateWithoutSentTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReceivedTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedTransactionsInput, UserUncheckedCreateWithoutReceivedTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedTransactionsInput
    upsert?: UserUpsertWithoutReceivedTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedTransactionsInput, UserUpdateWithoutReceivedTransactionsInput>, UserUncheckedUpdateWithoutReceivedTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutSentTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutSentTransactionsInput, UserUncheckedCreateWithoutSentTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentTransactionsInput
    upsert?: UserUpsertWithoutSentTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentTransactionsInput, UserUpdateWithoutSentTransactionsInput>, UserUncheckedUpdateWithoutSentTransactionsInput>
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

  export type NestedEnumOnRampStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OnRampStatus | EnumOnRampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOnRampStatusFilter<$PrismaModel> | $Enums.OnRampStatus
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

  export type NestedEnumOnRampStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OnRampStatus | EnumOnRampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOnRampStatusWithAggregatesFilter<$PrismaModel> | $Enums.OnRampStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOnRampStatusFilter<$PrismaModel>
    _max?: NestedEnumOnRampStatusFilter<$PrismaModel>
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

  export type BalanceCreateWithoutUserInput = {
    amount: number
    locked: number
  }

  export type BalanceUncheckedCreateWithoutUserInput = {
    id?: number
    amount: number
    locked: number
  }

  export type BalanceCreateOrConnectWithoutUserInput = {
    where: BalanceWhereUniqueInput
    create: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
  }

  export type OnRampTransactionCreateWithoutUserInput = {
    status: $Enums.OnRampStatus
    token: string
    provider: string
    amount: number
    startTime: Date | string
  }

  export type OnRampTransactionUncheckedCreateWithoutUserInput = {
    id?: number
    status: $Enums.OnRampStatus
    token: string
    provider: string
    amount: number
    startTime: Date | string
  }

  export type OnRampTransactionCreateOrConnectWithoutUserInput = {
    where: OnRampTransactionWhereUniqueInput
    create: XOR<OnRampTransactionCreateWithoutUserInput, OnRampTransactionUncheckedCreateWithoutUserInput>
  }

  export type OnRampTransactionCreateManyUserInputEnvelope = {
    data: OnRampTransactionCreateManyUserInput | OnRampTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type p2pTransferCreateWithoutReceivedUserInput = {
    amount: number
    timeStamp: Date | string
    sentUser: UserCreateNestedOneWithoutSentTransactionsInput
  }

  export type p2pTransferUncheckedCreateWithoutReceivedUserInput = {
    id?: number
    amount: number
    timeStamp: Date | string
    senderUserId: number
  }

  export type p2pTransferCreateOrConnectWithoutReceivedUserInput = {
    where: p2pTransferWhereUniqueInput
    create: XOR<p2pTransferCreateWithoutReceivedUserInput, p2pTransferUncheckedCreateWithoutReceivedUserInput>
  }

  export type p2pTransferCreateManyReceivedUserInputEnvelope = {
    data: p2pTransferCreateManyReceivedUserInput | p2pTransferCreateManyReceivedUserInput[]
    skipDuplicates?: boolean
  }

  export type p2pTransferCreateWithoutSentUserInput = {
    amount: number
    timeStamp: Date | string
    receivedUser: UserCreateNestedOneWithoutReceivedTransactionsInput
  }

  export type p2pTransferUncheckedCreateWithoutSentUserInput = {
    id?: number
    amount: number
    timeStamp: Date | string
    receiverUserId: number
  }

  export type p2pTransferCreateOrConnectWithoutSentUserInput = {
    where: p2pTransferWhereUniqueInput
    create: XOR<p2pTransferCreateWithoutSentUserInput, p2pTransferUncheckedCreateWithoutSentUserInput>
  }

  export type p2pTransferCreateManySentUserInputEnvelope = {
    data: p2pTransferCreateManySentUserInput | p2pTransferCreateManySentUserInput[]
    skipDuplicates?: boolean
  }

  export type BalanceUpsertWithoutUserInput = {
    update: XOR<BalanceUpdateWithoutUserInput, BalanceUncheckedUpdateWithoutUserInput>
    create: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
    where?: BalanceWhereInput
  }

  export type BalanceUpdateToOneWithWhereWithoutUserInput = {
    where?: BalanceWhereInput
    data: XOR<BalanceUpdateWithoutUserInput, BalanceUncheckedUpdateWithoutUserInput>
  }

  export type BalanceUpdateWithoutUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type OnRampTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: OnRampTransactionWhereUniqueInput
    update: XOR<OnRampTransactionUpdateWithoutUserInput, OnRampTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<OnRampTransactionCreateWithoutUserInput, OnRampTransactionUncheckedCreateWithoutUserInput>
  }

  export type OnRampTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: OnRampTransactionWhereUniqueInput
    data: XOR<OnRampTransactionUpdateWithoutUserInput, OnRampTransactionUncheckedUpdateWithoutUserInput>
  }

  export type OnRampTransactionUpdateManyWithWhereWithoutUserInput = {
    where: OnRampTransactionScalarWhereInput
    data: XOR<OnRampTransactionUpdateManyMutationInput, OnRampTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type OnRampTransactionScalarWhereInput = {
    AND?: OnRampTransactionScalarWhereInput | OnRampTransactionScalarWhereInput[]
    OR?: OnRampTransactionScalarWhereInput[]
    NOT?: OnRampTransactionScalarWhereInput | OnRampTransactionScalarWhereInput[]
    id?: IntFilter<"OnRampTransaction"> | number
    status?: EnumOnRampStatusFilter<"OnRampTransaction"> | $Enums.OnRampStatus
    token?: StringFilter<"OnRampTransaction"> | string
    provider?: StringFilter<"OnRampTransaction"> | string
    amount?: IntFilter<"OnRampTransaction"> | number
    startTime?: DateTimeFilter<"OnRampTransaction"> | Date | string
    userId?: IntFilter<"OnRampTransaction"> | number
  }

  export type p2pTransferUpsertWithWhereUniqueWithoutReceivedUserInput = {
    where: p2pTransferWhereUniqueInput
    update: XOR<p2pTransferUpdateWithoutReceivedUserInput, p2pTransferUncheckedUpdateWithoutReceivedUserInput>
    create: XOR<p2pTransferCreateWithoutReceivedUserInput, p2pTransferUncheckedCreateWithoutReceivedUserInput>
  }

  export type p2pTransferUpdateWithWhereUniqueWithoutReceivedUserInput = {
    where: p2pTransferWhereUniqueInput
    data: XOR<p2pTransferUpdateWithoutReceivedUserInput, p2pTransferUncheckedUpdateWithoutReceivedUserInput>
  }

  export type p2pTransferUpdateManyWithWhereWithoutReceivedUserInput = {
    where: p2pTransferScalarWhereInput
    data: XOR<p2pTransferUpdateManyMutationInput, p2pTransferUncheckedUpdateManyWithoutReceivedUserInput>
  }

  export type p2pTransferScalarWhereInput = {
    AND?: p2pTransferScalarWhereInput | p2pTransferScalarWhereInput[]
    OR?: p2pTransferScalarWhereInput[]
    NOT?: p2pTransferScalarWhereInput | p2pTransferScalarWhereInput[]
    id?: IntFilter<"p2pTransfer"> | number
    amount?: IntFilter<"p2pTransfer"> | number
    timeStamp?: DateTimeFilter<"p2pTransfer"> | Date | string
    senderUserId?: IntFilter<"p2pTransfer"> | number
    receiverUserId?: IntFilter<"p2pTransfer"> | number
  }

  export type p2pTransferUpsertWithWhereUniqueWithoutSentUserInput = {
    where: p2pTransferWhereUniqueInput
    update: XOR<p2pTransferUpdateWithoutSentUserInput, p2pTransferUncheckedUpdateWithoutSentUserInput>
    create: XOR<p2pTransferCreateWithoutSentUserInput, p2pTransferUncheckedCreateWithoutSentUserInput>
  }

  export type p2pTransferUpdateWithWhereUniqueWithoutSentUserInput = {
    where: p2pTransferWhereUniqueInput
    data: XOR<p2pTransferUpdateWithoutSentUserInput, p2pTransferUncheckedUpdateWithoutSentUserInput>
  }

  export type p2pTransferUpdateManyWithWhereWithoutSentUserInput = {
    where: p2pTransferScalarWhereInput
    data: XOR<p2pTransferUpdateManyMutationInput, p2pTransferUncheckedUpdateManyWithoutSentUserInput>
  }

  export type UserCreateWithoutOnRampTransactionInput = {
    email?: string | null
    name?: string | null
    number: string
    password: string
    Balance?: BalanceCreateNestedOneWithoutUserInput
    ReceivedTransactions?: p2pTransferCreateNestedManyWithoutReceivedUserInput
    SentTransactions?: p2pTransferCreateNestedManyWithoutSentUserInput
  }

  export type UserUncheckedCreateWithoutOnRampTransactionInput = {
    id?: number
    email?: string | null
    name?: string | null
    number: string
    password: string
    Balance?: BalanceUncheckedCreateNestedOneWithoutUserInput
    ReceivedTransactions?: p2pTransferUncheckedCreateNestedManyWithoutReceivedUserInput
    SentTransactions?: p2pTransferUncheckedCreateNestedManyWithoutSentUserInput
  }

  export type UserCreateOrConnectWithoutOnRampTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOnRampTransactionInput, UserUncheckedCreateWithoutOnRampTransactionInput>
  }

  export type UserUpsertWithoutOnRampTransactionInput = {
    update: XOR<UserUpdateWithoutOnRampTransactionInput, UserUncheckedUpdateWithoutOnRampTransactionInput>
    create: XOR<UserCreateWithoutOnRampTransactionInput, UserUncheckedCreateWithoutOnRampTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOnRampTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOnRampTransactionInput, UserUncheckedUpdateWithoutOnRampTransactionInput>
  }

  export type UserUpdateWithoutOnRampTransactionInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Balance?: BalanceUpdateOneWithoutUserNestedInput
    ReceivedTransactions?: p2pTransferUpdateManyWithoutReceivedUserNestedInput
    SentTransactions?: p2pTransferUpdateManyWithoutSentUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOnRampTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Balance?: BalanceUncheckedUpdateOneWithoutUserNestedInput
    ReceivedTransactions?: p2pTransferUncheckedUpdateManyWithoutReceivedUserNestedInput
    SentTransactions?: p2pTransferUncheckedUpdateManyWithoutSentUserNestedInput
  }

  export type UserCreateWithoutBalanceInput = {
    email?: string | null
    name?: string | null
    number: string
    password: string
    OnRampTransaction?: OnRampTransactionCreateNestedManyWithoutUserInput
    ReceivedTransactions?: p2pTransferCreateNestedManyWithoutReceivedUserInput
    SentTransactions?: p2pTransferCreateNestedManyWithoutSentUserInput
  }

  export type UserUncheckedCreateWithoutBalanceInput = {
    id?: number
    email?: string | null
    name?: string | null
    number: string
    password: string
    OnRampTransaction?: OnRampTransactionUncheckedCreateNestedManyWithoutUserInput
    ReceivedTransactions?: p2pTransferUncheckedCreateNestedManyWithoutReceivedUserInput
    SentTransactions?: p2pTransferUncheckedCreateNestedManyWithoutSentUserInput
  }

  export type UserCreateOrConnectWithoutBalanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
  }

  export type UserUpsertWithoutBalanceInput = {
    update: XOR<UserUpdateWithoutBalanceInput, UserUncheckedUpdateWithoutBalanceInput>
    create: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBalanceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBalanceInput, UserUncheckedUpdateWithoutBalanceInput>
  }

  export type UserUpdateWithoutBalanceInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    OnRampTransaction?: OnRampTransactionUpdateManyWithoutUserNestedInput
    ReceivedTransactions?: p2pTransferUpdateManyWithoutReceivedUserNestedInput
    SentTransactions?: p2pTransferUpdateManyWithoutSentUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBalanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    OnRampTransaction?: OnRampTransactionUncheckedUpdateManyWithoutUserNestedInput
    ReceivedTransactions?: p2pTransferUncheckedUpdateManyWithoutReceivedUserNestedInput
    SentTransactions?: p2pTransferUncheckedUpdateManyWithoutSentUserNestedInput
  }

  export type UserCreateWithoutReceivedTransactionsInput = {
    email?: string | null
    name?: string | null
    number: string
    password: string
    Balance?: BalanceCreateNestedOneWithoutUserInput
    OnRampTransaction?: OnRampTransactionCreateNestedManyWithoutUserInput
    SentTransactions?: p2pTransferCreateNestedManyWithoutSentUserInput
  }

  export type UserUncheckedCreateWithoutReceivedTransactionsInput = {
    id?: number
    email?: string | null
    name?: string | null
    number: string
    password: string
    Balance?: BalanceUncheckedCreateNestedOneWithoutUserInput
    OnRampTransaction?: OnRampTransactionUncheckedCreateNestedManyWithoutUserInput
    SentTransactions?: p2pTransferUncheckedCreateNestedManyWithoutSentUserInput
  }

  export type UserCreateOrConnectWithoutReceivedTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedTransactionsInput, UserUncheckedCreateWithoutReceivedTransactionsInput>
  }

  export type UserCreateWithoutSentTransactionsInput = {
    email?: string | null
    name?: string | null
    number: string
    password: string
    Balance?: BalanceCreateNestedOneWithoutUserInput
    OnRampTransaction?: OnRampTransactionCreateNestedManyWithoutUserInput
    ReceivedTransactions?: p2pTransferCreateNestedManyWithoutReceivedUserInput
  }

  export type UserUncheckedCreateWithoutSentTransactionsInput = {
    id?: number
    email?: string | null
    name?: string | null
    number: string
    password: string
    Balance?: BalanceUncheckedCreateNestedOneWithoutUserInput
    OnRampTransaction?: OnRampTransactionUncheckedCreateNestedManyWithoutUserInput
    ReceivedTransactions?: p2pTransferUncheckedCreateNestedManyWithoutReceivedUserInput
  }

  export type UserCreateOrConnectWithoutSentTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentTransactionsInput, UserUncheckedCreateWithoutSentTransactionsInput>
  }

  export type UserUpsertWithoutReceivedTransactionsInput = {
    update: XOR<UserUpdateWithoutReceivedTransactionsInput, UserUncheckedUpdateWithoutReceivedTransactionsInput>
    create: XOR<UserCreateWithoutReceivedTransactionsInput, UserUncheckedCreateWithoutReceivedTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedTransactionsInput, UserUncheckedUpdateWithoutReceivedTransactionsInput>
  }

  export type UserUpdateWithoutReceivedTransactionsInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Balance?: BalanceUpdateOneWithoutUserNestedInput
    OnRampTransaction?: OnRampTransactionUpdateManyWithoutUserNestedInput
    SentTransactions?: p2pTransferUpdateManyWithoutSentUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Balance?: BalanceUncheckedUpdateOneWithoutUserNestedInput
    OnRampTransaction?: OnRampTransactionUncheckedUpdateManyWithoutUserNestedInput
    SentTransactions?: p2pTransferUncheckedUpdateManyWithoutSentUserNestedInput
  }

  export type UserUpsertWithoutSentTransactionsInput = {
    update: XOR<UserUpdateWithoutSentTransactionsInput, UserUncheckedUpdateWithoutSentTransactionsInput>
    create: XOR<UserCreateWithoutSentTransactionsInput, UserUncheckedCreateWithoutSentTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentTransactionsInput, UserUncheckedUpdateWithoutSentTransactionsInput>
  }

  export type UserUpdateWithoutSentTransactionsInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Balance?: BalanceUpdateOneWithoutUserNestedInput
    OnRampTransaction?: OnRampTransactionUpdateManyWithoutUserNestedInput
    ReceivedTransactions?: p2pTransferUpdateManyWithoutReceivedUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Balance?: BalanceUncheckedUpdateOneWithoutUserNestedInput
    OnRampTransaction?: OnRampTransactionUncheckedUpdateManyWithoutUserNestedInput
    ReceivedTransactions?: p2pTransferUncheckedUpdateManyWithoutReceivedUserNestedInput
  }

  export type OnRampTransactionCreateManyUserInput = {
    id?: number
    status: $Enums.OnRampStatus
    token: string
    provider: string
    amount: number
    startTime: Date | string
  }

  export type p2pTransferCreateManyReceivedUserInput = {
    id?: number
    amount: number
    timeStamp: Date | string
    senderUserId: number
  }

  export type p2pTransferCreateManySentUserInput = {
    id?: number
    amount: number
    timeStamp: Date | string
    receiverUserId: number
  }

  export type OnRampTransactionUpdateWithoutUserInput = {
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnRampTransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnRampTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type p2pTransferUpdateWithoutReceivedUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    sentUser?: UserUpdateOneRequiredWithoutSentTransactionsNestedInput
  }

  export type p2pTransferUncheckedUpdateWithoutReceivedUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    senderUserId?: IntFieldUpdateOperationsInput | number
  }

  export type p2pTransferUncheckedUpdateManyWithoutReceivedUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    senderUserId?: IntFieldUpdateOperationsInput | number
  }

  export type p2pTransferUpdateWithoutSentUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedUser?: UserUpdateOneRequiredWithoutReceivedTransactionsNestedInput
  }

  export type p2pTransferUncheckedUpdateWithoutSentUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverUserId?: IntFieldUpdateOperationsInput | number
  }

  export type p2pTransferUncheckedUpdateManyWithoutSentUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverUserId?: IntFieldUpdateOperationsInput | number
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