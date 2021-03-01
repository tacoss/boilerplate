/* node_modules/yrv/build/lib/Route.svelte generated by Svelte v3.34.0 */
import {
	SvelteComponent,
	assign,
	check_outros,
	component_subscribe,
	create_component,
	create_slot,
	destroy_component,
	detach,
	empty,
	exclude_internal_props,
	get_spread_object,
	get_spread_update,
	group_outros,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	set_data,
	text,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import {
	CTX_ROUTER,
	CTX_ROUTE,
	getProps,
	isPromise,
	isSvelteComponent
} from "./utils";

import { routeInfo } from "./router";
import { writable } from "svelte/store";
import { onDestroy, getContext, setContext } from "svelte";

const get_default_slot_changes = dirty => ({
	router: dirty & /*activeRouter*/ 4,
	props: dirty & /*activeProps*/ 8
});

const get_default_slot_context = ctx => ({
	router: /*activeRouter*/ ctx[2],
	props: /*activeProps*/ ctx[3]
});

// (88:0) {#if activeRouter}
function create_if_block(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block_1, create_if_block_4, create_else_block_1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (!/*hasLoaded*/ ctx[4]) return 0;
		if (/*component*/ ctx[0]) return 1;
		return 2;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (100:4) {:else}
function create_else_block_1(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[15].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[14], get_default_slot_context);

	return {
		c() {
			if (default_slot) default_slot.c();
		},
		m(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope, activeRouter, activeProps*/ 16396) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[14], dirty, get_default_slot_changes, get_default_slot_context);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};
}

// (98:4) {#if component}
function create_if_block_4(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;
	const switch_instance_spread_levels = [{ router: /*activeRouter*/ ctx[2] }, /*activeProps*/ ctx[3]];
	var switch_value = /*component*/ ctx[0];

	function switch_props(ctx) {
		let switch_instance_props = {};

		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
		}

		return { props: switch_instance_props };
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		m(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const switch_instance_changes = (dirty & /*activeRouter, activeProps*/ 12)
			? get_spread_update(switch_instance_spread_levels, [
					dirty & /*activeRouter*/ 4 && { router: /*activeRouter*/ ctx[2] },
					dirty & /*activeProps*/ 8 && get_spread_object(/*activeProps*/ ctx[3])
				])
			: {};

			if (switch_value !== (switch_value = /*component*/ ctx[0])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};
}

// (89:2) {#if !hasLoaded}
function create_if_block_1(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*pending*/ ctx[1] && create_if_block_2(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (/*pending*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*pending*/ 2) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (90:4) {#if pending}
function create_if_block_2(ctx) {
	let show_if;
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block_3, create_else_block];
	const if_blocks = [];

	function select_block_type_1(ctx, dirty) {
		if (dirty & /*pending*/ 2) show_if = !!isSvelteComponent(/*pending*/ ctx[1]);
		if (show_if) return 0;
		return 1;
	}

	current_block_type_index = select_block_type_1(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_1(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (93:6) {:else}
function create_else_block(ctx) {
	let t;

	return {
		c() {
			t = text(/*pending*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*pending*/ 2) set_data(t, /*pending*/ ctx[1]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (91:6) {#if isSvelteComponent(pending)}
function create_if_block_3(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;
	const switch_instance_spread_levels = [{ router: /*activeRouter*/ ctx[2] }, /*activeProps*/ ctx[3]];
	var switch_value = /*pending*/ ctx[1];

	function switch_props(ctx) {
		let switch_instance_props = {};

		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
		}

		return { props: switch_instance_props };
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		m(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const switch_instance_changes = (dirty & /*activeRouter, activeProps*/ 12)
			? get_spread_update(switch_instance_spread_levels, [
					dirty & /*activeRouter*/ 4 && { router: /*activeRouter*/ ctx[2] },
					dirty & /*activeProps*/ 8 && get_spread_object(/*activeProps*/ ctx[3])
				])
			: {};

			if (switch_value !== (switch_value = /*pending*/ ctx[1])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*activeRouter*/ ctx[2] && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*activeRouter*/ ctx[2]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*activeRouter*/ 4) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $routePath;
	let $routeInfo;
	component_subscribe($$self, routeInfo, $$value => $$invalidate(13, $routeInfo = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	let { key = null } = $$props;
	let { path = "/" } = $$props;
	let { exact = null } = $$props;
	let { pending = null } = $$props;
	let { disabled = false } = $$props;
	let { fallback = null } = $$props;
	let { component = null } = $$props;
	let { condition = null } = $$props;
	let { redirect = null } = $$props;

	// replacement for `Object.keys(arguments[0].$$.props)`
	const thisProps = [
		"key",
		"path",
		"exact",
		"pending",
		"disabled",
		"fallback",
		"component",
		"condition",
		"redirect"
	];

	const routeContext = getContext(CTX_ROUTE);
	const routerContext = getContext(CTX_ROUTER);
	const { assignRoute, unassignRoute } = routerContext || {};
	const routePath = routeContext ? routeContext.routePath : writable(path);
	component_subscribe($$self, routePath, value => $$invalidate(17, $routePath = value));
	let activeRouter = null;
	let activeProps = {};
	let fullpath;
	let hasLoaded;

	const fixedRoot = $routePath !== path && $routePath !== "/"
	? `${$routePath}${path !== "/" ? path : ""}`
	: path;

	function resolve() {
		const fixedRoute = path !== fixedRoot && fixedRoot.substr(-1) !== "/"
		? `${fixedRoot}/`
		: fixedRoot;

		$$invalidate(6, [key, fullpath] = assignRoute(key, fixedRoute, { condition, redirect, fallback, exact }), key);
	}

	resolve();

	onDestroy(() => {
		if (unassignRoute) {
			unassignRoute(fullpath);
		}
	});

	setContext(CTX_ROUTE, { routePath });

	$$self.$$set = $$new_props => {
		$$invalidate(25, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("key" in $$new_props) $$invalidate(6, key = $$new_props.key);
		if ("path" in $$new_props) $$invalidate(7, path = $$new_props.path);
		if ("exact" in $$new_props) $$invalidate(8, exact = $$new_props.exact);
		if ("pending" in $$new_props) $$invalidate(1, pending = $$new_props.pending);
		if ("disabled" in $$new_props) $$invalidate(9, disabled = $$new_props.disabled);
		if ("fallback" in $$new_props) $$invalidate(10, fallback = $$new_props.fallback);
		if ("component" in $$new_props) $$invalidate(0, component = $$new_props.component);
		if ("condition" in $$new_props) $$invalidate(11, condition = $$new_props.condition);
		if ("redirect" in $$new_props) $$invalidate(12, redirect = $$new_props.redirect);
		if ("$$scope" in $$new_props) $$invalidate(14, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$: if (key) {
			$$invalidate(2, activeRouter = !disabled && $routeInfo[key]);
			$$invalidate(3, activeProps = getProps($$props, thisProps));
		}

		if ($$self.$$.dirty & /*activeRouter, component*/ 5) {
			$: if (activeRouter) {
				if (!component) {
					// component passed as slot
					$$invalidate(4, hasLoaded = true);
				} else if (isSvelteComponent(component)) {
					// component passed as Svelte component
					$$invalidate(4, hasLoaded = true);
				} else if (isPromise(component)) {
					// component passed as import()
					component.then(module => {
						$$invalidate(0, component = module.default);
						$$invalidate(4, hasLoaded = true);
					});
				} else {
					// component passed as () => import()
					component().then(module => {
						$$invalidate(0, component = module.default);
						$$invalidate(4, hasLoaded = true);
					});
				}
			}
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		component,
		pending,
		activeRouter,
		activeProps,
		hasLoaded,
		routePath,
		key,
		path,
		exact,
		disabled,
		fallback,
		condition,
		redirect,
		$routeInfo,
		$$scope,
		slots
	];
}

class Route extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			key: 6,
			path: 7,
			exact: 8,
			pending: 1,
			disabled: 9,
			fallback: 10,
			component: 0,
			condition: 11,
			redirect: 12
		});
	}
}

export default Route;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvcnVubmVyL3dvcmsvcGxhdGUvcGxhdGUvbm9kZV9tb2R1bGVzL3lydi9idWlsZC9saWIvUm91dGUuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG4gIGltcG9ydCB7IHJvdXRlSW5mbyB9IGZyb20gJy4vcm91dGVyJztcbiAgaW1wb3J0IHtcbiAgICBDVFhfUk9VVEVSLCBDVFhfUk9VVEUsIGdldFByb3BzLCBpc1Byb21pc2UsIGlzU3ZlbHRlQ29tcG9uZW50LFxuICB9IGZyb20gJy4vdXRpbHMnO1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IG9uRGVzdHJveSwgZ2V0Q29udGV4dCwgc2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG5cbiAgZXhwb3J0IGxldCBrZXkgPSBudWxsO1xuICBleHBvcnQgbGV0IHBhdGggPSAnLyc7XG4gIGV4cG9ydCBsZXQgZXhhY3QgPSBudWxsO1xuICBleHBvcnQgbGV0IHBlbmRpbmcgPSBudWxsO1xuICBleHBvcnQgbGV0IGRpc2FibGVkID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgZmFsbGJhY2sgPSBudWxsO1xuICBleHBvcnQgbGV0IGNvbXBvbmVudCA9IG51bGw7XG4gIGV4cG9ydCBsZXQgY29uZGl0aW9uID0gbnVsbDtcbiAgZXhwb3J0IGxldCByZWRpcmVjdCA9IG51bGw7XG5cbiAgLy8gcmVwbGFjZW1lbnQgZm9yIGBPYmplY3Qua2V5cyhhcmd1bWVudHNbMF0uJCQucHJvcHMpYFxuICBjb25zdCB0aGlzUHJvcHMgPSBbJ2tleScsICdwYXRoJywgJ2V4YWN0JywgJ3BlbmRpbmcnLCAnZGlzYWJsZWQnLCAnZmFsbGJhY2snLCAnY29tcG9uZW50JywgJ2NvbmRpdGlvbicsICdyZWRpcmVjdCddO1xuXG4gIGNvbnN0IHJvdXRlQ29udGV4dCA9IGdldENvbnRleHQoQ1RYX1JPVVRFKTtcbiAgY29uc3Qgcm91dGVyQ29udGV4dCA9IGdldENvbnRleHQoQ1RYX1JPVVRFUik7XG5cbiAgY29uc3QgeyBhc3NpZ25Sb3V0ZSwgdW5hc3NpZ25Sb3V0ZSB9ID0gcm91dGVyQ29udGV4dCB8fCB7fTtcblxuICBjb25zdCByb3V0ZVBhdGggPSByb3V0ZUNvbnRleHQgPyByb3V0ZUNvbnRleHQucm91dGVQYXRoIDogd3JpdGFibGUocGF0aCk7XG5cbiAgbGV0IGFjdGl2ZVJvdXRlciA9IG51bGw7XG4gIGxldCBhY3RpdmVQcm9wcyA9IHt9O1xuICBsZXQgZnVsbHBhdGg7XG4gIGxldCBoYXNMb2FkZWQ7XG5cbiAgY29uc3QgZml4ZWRSb290ID0gJHJvdXRlUGF0aCAhPT0gcGF0aCAmJiAkcm91dGVQYXRoICE9PSAnLydcbiAgICA/IGAkeyRyb3V0ZVBhdGh9JHtwYXRoICE9PSAnLycgPyBwYXRoIDogJyd9YFxuICAgIDogcGF0aDtcblxuICBmdW5jdGlvbiByZXNvbHZlKCkge1xuICAgIGNvbnN0IGZpeGVkUm91dGUgPSBwYXRoICE9PSBmaXhlZFJvb3QgJiYgZml4ZWRSb290LnN1YnN0cigtMSkgIT09ICcvJ1xuICAgICAgPyBgJHtmaXhlZFJvb3R9L2BcbiAgICAgIDogZml4ZWRSb290O1xuXG4gICAgW2tleSwgZnVsbHBhdGhdID0gYXNzaWduUm91dGUoa2V5LCBmaXhlZFJvdXRlLCB7XG4gICAgICBjb25kaXRpb24sIHJlZGlyZWN0LCBmYWxsYmFjaywgZXhhY3QsXG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlKCk7XG5cbiAgJDogaWYgKGtleSkge1xuICAgIGFjdGl2ZVJvdXRlciA9ICFkaXNhYmxlZCAmJiAkcm91dGVJbmZvW2tleV07XG4gICAgYWN0aXZlUHJvcHMgPSBnZXRQcm9wcygkJHByb3BzLCB0aGlzUHJvcHMpO1xuICB9XG5cbiAgJDogaWYgKGFjdGl2ZVJvdXRlcikge1xuICAgIGlmICghY29tcG9uZW50KSB7IC8vIGNvbXBvbmVudCBwYXNzZWQgYXMgc2xvdFxuICAgICAgaGFzTG9hZGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGlzU3ZlbHRlQ29tcG9uZW50KGNvbXBvbmVudCkpIHsgLy8gY29tcG9uZW50IHBhc3NlZCBhcyBTdmVsdGUgY29tcG9uZW50XG4gICAgICBoYXNMb2FkZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoaXNQcm9taXNlKGNvbXBvbmVudCkpIHsgLy8gY29tcG9uZW50IHBhc3NlZCBhcyBpbXBvcnQoKVxuICAgICAgY29tcG9uZW50LnRoZW4obW9kdWxlID0+IHtcbiAgICAgICAgY29tcG9uZW50ID0gbW9kdWxlLmRlZmF1bHQ7XG4gICAgICAgIGhhc0xvYWRlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgeyAvLyBjb21wb25lbnQgcGFzc2VkIGFzICgpID0+IGltcG9ydCgpXG4gICAgICBjb21wb25lbnQoKS50aGVuKG1vZHVsZSA9PiB7XG4gICAgICAgIGNvbXBvbmVudCA9IG1vZHVsZS5kZWZhdWx0O1xuICAgICAgICBoYXNMb2FkZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25EZXN0cm95KCgpID0+IHtcbiAgICBpZiAodW5hc3NpZ25Sb3V0ZSkge1xuICAgICAgdW5hc3NpZ25Sb3V0ZShmdWxscGF0aCk7XG4gICAgfVxuICB9KTtcblxuICBzZXRDb250ZXh0KENUWF9ST1VURSwge1xuICAgIHJvdXRlUGF0aCxcbiAgfSk7XG48L3NjcmlwdD5cblxuXG57I2lmIGFjdGl2ZVJvdXRlcn1cbiAgeyNpZiAhaGFzTG9hZGVkfVxuICAgIHsjaWYgcGVuZGluZ31cbiAgICAgIHsjaWYgaXNTdmVsdGVDb21wb25lbnQocGVuZGluZyl9XG4gICAgICAgIDxzdmVsdGU6Y29tcG9uZW50IHRoaXM9e3BlbmRpbmd9IHJvdXRlcj17YWN0aXZlUm91dGVyfSB7Li4uYWN0aXZlUHJvcHN9IC8+XG4gICAgICB7OmVsc2V9XG4gICAgICAgIHtwZW5kaW5nfVxuICAgICAgey9pZn1cbiAgICB7L2lmfVxuICB7OmVsc2V9XG4gICAgeyNpZiBjb21wb25lbnR9XG4gICAgICA8c3ZlbHRlOmNvbXBvbmVudCB0aGlzPXtjb21wb25lbnR9IHJvdXRlcj17YWN0aXZlUm91dGVyfSB7Li4uYWN0aXZlUHJvcHN9IC8+XG4gICAgezplbHNlfVxuICAgICAgPHNsb3Qgcm91dGVyPXthY3RpdmVSb3V0ZXJ9IHByb3BzPXthY3RpdmVQcm9wc30gLz5cbiAgICB7L2lmfVxuICB7L2lmfVxuey9pZn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUlJLFVBQVU7Q0FBRSxTQUFTO0NBQUUsUUFBUTtDQUFFLFNBQVM7Q0FBRSxpQkFBaUI7T0FDeEQsU0FBUzs7U0FIUCxTQUFTLFFBQVEsVUFBVTtTQUQzQixRQUFRLFFBQVEsY0FBYztTQVE5QixTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsUUFBUSxRQUFROzs7Ozs7OzswQkEyRnhDLEdBQVk7d0JBQVMsR0FBVzs7Ozs7Ozs7Ozs7OztxQkFaNUMsR0FBUztvQkFTUixHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttRUFDK0IsR0FBWSx1QkFBTSxHQUFXO2tDQUFoRCxHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4REFBVSxHQUFZO29FQUFNLEdBQVc7Ozs7c0RBQWhELEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQVQ5QixHQUFPOzs7Ozs7Ozs7Ozs7O21CQUFQLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQUNMLGlCQUFpQixhQUFDLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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