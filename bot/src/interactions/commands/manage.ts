import { Subcommand } from '@sapphire/plugin-subcommands';
import { CommandRegister } from '../../lib/classes/commandRegister';

export class ManageSubCommandsRegistration {
    public static registerCommands(registry: Subcommand.Registry): void {
        registry.registerChatInputCommand((builder) => {
            const register = new CommandRegister({
                key: 'manage'
            })
            return register.build(builder)
        });
    }
}