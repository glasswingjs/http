import {Response} from './_types'
import {Request} from './request'

/**
 * Request Handler Type
 */
export declare type RequestHandler = (req: Request, res: Response, params: any) => void
