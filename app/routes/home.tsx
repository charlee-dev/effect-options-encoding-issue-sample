import type { Route } from "../routes/+types/home";
import { Option } from "effect";

export function loader() {
	return {
		/**
		 * The type of the option here is:
		 * myOption: Option.Option<string>;
		 */
		myOption: Option.some("Hello World"),
	};
}

/**
 * The type of the myOption in the loaderData is:
 * myOption: {
 *   readonly _tag: "None";
 *   readonly _op: "None";
 *   readonly [TypeId]: {
 *     readonly _A: undefined;
 *   };
 *   [Unify.typeSymbol]?: undefined;
 *   [Unify.unifySymbol]?: {
 *     Option?: undefined;
 *   } | undefined;
 *   ... 10 more ...;
 *   readonly [STMTypeId]: {
 *     ...;
 *   };
 * } | {
 *   ...;
 * }
 * @returns
 */
export function Home({ loaderData }: Route.ComponentProps) {
	const opt = loaderData.myOption as unknown as Option.Option<string>;

	return <p>{Option.getOrNull(opt)?.toString()}</p>;
}
