/**
 * Automatically generated types for motia
 * Do NOT edit this file manually.
 * 
 * Consider adding this file to .prettierignore and eslint ignore.
 */
import { EventHandler, ApiRouteHandler, ApiResponse, IStateStream } from 'motia'

declare module 'motia' {
  interface FlowContextStateStreams {
    'conversation': IStateStream<{ message: string; from: string; status: string; timestamp: string }>
  }

  type Handlers = {
    'ChatApi': ApiRouteHandler<{ message: string; conversationId?: string }, ApiResponse<200, { conversationId: string; message: string; status?: string }>, { topic: 'chat-message'; data: { message: string; conversationId: string; assistantMessageId: string } }>
    'AiResponse': EventHandler<{ message: string; conversationId: string; assistantMessageId: string }, never>
  }
}