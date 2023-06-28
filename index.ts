type PropsAsUnion<T, U = unknown> = T extends object ? {
    [K in keyof T]: T[K] extends object ? PropsAsUnion<T[K], U> :
                    T[K] extends U ? K : never;
}[keyof T] : never;

/**
 * Example
 */

type Settings = {
    color: string;
    font: string;
    fontSize: number;
    deepObject: {
        prop1: string;
        prop2: boolean;
    }
};

type SettingsUnionExample1 = PropsAsUnion<Settings>; // 'color' | 'font' | 'fontSize' | 'prop1' | 'prop2'

type SettingsUnionExample2 = PropsAsUnion<Settings, string>; // 'color' | 'font'

type SettingsUnionExample3 = PropsAsUnion<Settings, number>; // 'fontSize'

type SettingsUnionExample4 = PropsAsUnion<Settings, boolean>; // 'prop2'

type SettingsUnionExample5 = PropsAsUnion<Settings, object | Function>; // never

