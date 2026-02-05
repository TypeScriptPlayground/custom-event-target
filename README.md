# Custom Event Target

[![Run Linter](https://github.com/TypeScriptPlayground/custom-event-target/actions/workflows/lint.yml/badge.svg)](https://github.com/TypeScriptPlayground/custom-event-target/actions/workflows/lint.yml)
[![Run Unit Tests](https://github.com/TypeScriptPlayground/custom-event-target/actions/workflows/unit_tests.yml/badge.svg)](https://github.com/TypeScriptPlayground/custom-event-target/actions/workflows/unit_tests.yml)

This package contains a class and types for a `CustomEventTarget`.

## Example

```ts
import { CustomEventTarget, type CustomEventListenerOrCustomEventListenerObject } from '@typescriptplayground/custom-event-target'

class MyClass<MyEvents extends 'foo' | 'bar' | 'baz'> extends CustomEventTarget {
  override addEventListener(
    type : MyEvents,
    listener : CustomEventListenerOrCustomEventListenerObject<MyEvents> | null,
    options? : boolean | AddEventListenerOptions
  ) : void {

  }

  override removeEventListener(
    type : MyEvents,
    listener : CustomEventListenerOrCustomEventListenerObject<MyEvents> | null,
    options? : boolean | EventListenerOptions
  ) : void {
    
  }
}
```
