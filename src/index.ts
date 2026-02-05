/**
 * This module contains a class and types for a `CustomEventTarget`.
 * 
 * @example
 * ```ts
 * import { CustomEventTarget, type CustomEventListenerOrCustomEventListenerObject } from '@typescriptplayground/custom-event-target'
 * 
 * class MyClass<MyEvents extends 'foo' | 'bar' | 'baz'> extends CustomEventTarget {
 *   override addEventListener(
 *     type : MyEvents,
 *     listener : CustomEventListenerOrCustomEventListenerObject<MyEvents> | null,
 *     options? : boolean | AddEventListenerOptions
 *   ) : void {
 * 
 *   }
 * 
 *   override removeEventListener(
 *     type : MyEvents,
 *     listener : CustomEventListenerOrCustomEventListenerObject<MyEvents> | null,
 *     options? : boolean | EventListenerOptions
 *   ) : void {
 *     
 *   }
 * }
 * ```
 * @module
 */

export * from './custom_event_target.ts'
