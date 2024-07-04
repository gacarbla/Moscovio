type AllowedCommand = 
    'voice bitrate' |
    'voice claim' |
    'voice ghost' |
    'voice invite' |
    'voice limit' |
    'voice lock' |
    'voice name' |
    'voice permit' |
    'voice reject' |
    'voice reset' |
    'voice transfer' |
    'voice trust' |
    'voice unghost' |
    'voice unlock' |
    'voice untrust';

const allowedCommands: AllowedCommand[] = [
    'voice bitrate',
    'voice claim',
    'voice ghost',
    'voice invite',
    'voice limit',
    'voice lock',
    'voice name',
    'voice permit',
    'voice reject',
    'voice reset',
    'voice transfer',
    'voice trust',
    'voice unghost',
    'voice unlock',
    'voice untrust',
];

type MscvCommandObject = {
    key: string,
    subcommands?: MscvSubcommandObject[],
    subcommandgroups?: MscvSubcommandGroupObject[],
    options?: MscvCommandOptionObject[];
}

type MscvSubcommandGroupObject = {
    key: string,
    subcommands: MscvSubcommandObject[],
}

type MscvSubcommandObject = {
    key: string,
    options?: MscvCommandOptionObject[];
}

type MscvCommandOptionObject = {
    type: 'string' | 'integer' | 'user' | 'role' | 'mentionable' | 'boolean' | 'attachment' | 'channel',
    key:string,
    required:boolean,
    choices?:MscvStringChoiceObject[],
    min?:number,
    max?:number,
    autocomplete?:boolean,
    channel_types?:DiscordChannelArray[] | DiscordChannelArrayCode[]
}

type DiscordChannelArrayCode = [ 1,2,3,4,5,6,7,8,9,10,11,12 ]
type DiscordChannelArray = [
    "GUILD_TEXT",
    "DM",
    "GUILD_VOICE",
    "GROUP_DM",
    "GUILD_CATEGORY",
    "GUILD_ANNOUNCEMENT",
    "ANNOUNCEMENT_THREAD",
    "PUBLIC_THREAD",
    "PRIVATE_THREAD",
    "GUILD_DIRECTORY",
    "GUILD_FORUM",
    "GUILD_MEDIA"
]


type MscvStringChoiceObject = {
    key:string,
    value:string
}

export {AllowedCommand, allowedCommands, MscvCommandObject, MscvSubcommandGroupObject, MscvSubcommandObject, MscvCommandOptionObject, MscvStringChoiceObject}