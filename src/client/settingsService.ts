'use strict';

import * as vscode from 'vscode';

export class SettingsService {

    public static getPackageDefaultDependenciesDirectories(): string[] {
        const packageDefaultDependenciesDirectory = vscode.workspace.getConfiguration('solidity').get<string|string[]>('packageDefaultDependenciesDirectory');
        if (typeof packageDefaultDependenciesDirectory === 'string') {return [<string>packageDefaultDependenciesDirectory];}
        return <string[]>packageDefaultDependenciesDirectory;
    }

    public static getPackageDefaultDependenciesContractsDirectory(): string {
        return vscode.workspace.getConfiguration('solidity').get<string>('packageDefaultDependenciesContractsDirectory');
    }

    public static getCompilerOptimisation(): number {
        return vscode.workspace.getConfiguration('solidity').get<number>('compilerOptimization');
    }


    public static getRemappings(): string[] {
        return vscode.workspace.getConfiguration('solidity').get<string[]>('remappings');
    }

    public static getRemappingsWindows(): string[] {
        return vscode.workspace.getConfiguration('solidity').get<string[]>('remappingsWindows');
    }

    public static getRemappingsUnix(): string[] {
        return vscode.workspace.getConfiguration('solidity').get<string[]>('remappingsUnix');
    }

    public static getMonoRepoSupport(): boolean {
        return vscode.workspace.getConfiguration('solidity').get<boolean>('monoRepoSupport');
    }

}
