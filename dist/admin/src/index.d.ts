declare const _default: {
    register(app: any): void;
    registerTrads({ locales }: {
        locales: string[];
    }): Promise<({
        data: any;
        locale: any;
    } | {
        data: {};
        locale: any;
    })[]>;
};
export default _default;
