export interface Itasks {
    id: string,
    title: string,
    task: string,
    status: boolean
}

export type ParamPayloadAddTask = Omit<Itasks, 'id'|'status'>

export type ParamPayloadIdTask = Pick<Itasks, 'id'>