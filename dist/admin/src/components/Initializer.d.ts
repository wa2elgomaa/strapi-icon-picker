type InitializerProps = {
    setPlugin: (id: string) => void;
};
/**
 * Initializes the icon picker plugin by registering it with the parent
 * application.
 *
 * @param {{ setPlugin: (id: string) => void }} props
 * @prop {function} setPlugin - A callback function that registers the plugin
 *     with the parent application.
 *
 * @returns {null}
 */
declare const Initializer: ({ setPlugin }: InitializerProps) => null;
export { Initializer };
