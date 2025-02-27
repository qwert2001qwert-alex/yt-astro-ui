<script lang="ts" module>
	import type { WithElementRef } from "bits-ui";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
	import { type VariantProps, tv } from "tailwind-variants";

	export const buttonVariants = tv({
		base: "btn rounded-btn ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
		variants: {
			variant: {
				default: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
				primary: "bg-primary text-primary-foreground hover:bg-primary/90",
				accent: "bg-accent text-accent-foreground hover:bg-accent/80",
				destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline: "border border-input bg-transparent text-primary hover:bg-primary/10",
				ghost: "text-gray-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800",
				link: "!px-0 underline-offset-4 underline",
			},
			size: {
				default: "px-6 sm:px-8 h-10 sm:h-12",
				sm: "h-8 px-4 text-xs sm:h-10 sm:px-6 sm:text-sm",
				lg: "h-14 px-8 text-base sm:text-lg md:text-xl",
				icon: "size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	});

	export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
	export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			size?: ButtonSize;
      text?: string;
		};
</script>

<script lang="ts">
	import { cn } from "yt-astro-ui/utils";

	let {
		class: className = "",
		variant = "default",
		size = "default",
		ref = $bindable(null),
		href = undefined,
		text = undefined,
		type = "button",
		children,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a
		bind:this={ref}
		class={cn(buttonVariants({ size, variant }), className)}
		{href}
		{...restProps}
	>
    {text}
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		class={cn(buttonVariants({ size, variant }), className)}
		{type}
		{...restProps}
	>
    {text}
		{@render children?.()}
	</button>
{/if}
