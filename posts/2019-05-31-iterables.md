---
heading: Iterating and For Loops
subheading: An introduction to different types of iteration
---

The most familiar form of iterating to those accustomed to C-like languages is

```C
for (int i = 0; i < n; i += 1) {
    // do something
}
```

The three parts of the for statement, the declaration, the comparison, and the
comparision, are what people are accustomed to.

Some of the programming languages I know have the concept of an _iterable_,
which is a nifty way to make all sorts of iterating more intuitive. However,
for people who are more familiar with languages that emphasize the type
of iteration used above, the concept can take time to get used to.

The above loop in Python would be

```python
for i in range(0, n, 1):
    # do something
```
