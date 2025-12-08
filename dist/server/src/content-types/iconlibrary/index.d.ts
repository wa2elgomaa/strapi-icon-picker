declare const _default: {
    schema: {
        kind: string;
        collectionName: string;
        info: {
            singularName: string;
            pluralName: string;
            displayName: string;
        };
        options: {
            draftAndPublish: boolean;
            comment: string;
        };
        pluginOptions: {
            "content-manager": {
                visible: boolean;
            };
            "content-type-builder": {
                visible: boolean;
            };
        };
        attributes: {
            name: {
                type: string;
                required: boolean;
            };
            abbreviation: {
                type: string;
                required: boolean;
                unique: boolean;
                maxLength: number;
            };
            isEnabled: {
                type: string;
                default: boolean;
            };
        };
    };
};
export default _default;
