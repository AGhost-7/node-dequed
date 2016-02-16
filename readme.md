## API
Not decided, probably going to change it to match the other implementations
for drop-in replacement.

## Performance Notes
Seems to be the fastest Deque implementation using Linked Lists.

```bash
> queues@1.0.0 bench /home/jonathan/workspaces/queues
> perf/run.sh

~~~ Running benchmark add-remove ~~~
my-deque 1155 ms
double-ended-queue 800 ms
dequeue 1355 ms
deque: 1412 ms
suite completed

~~~ Running benchmark prepend ~~~
my deque impl: 824 ms
double-ended-queue 693 ms
deque: 849 ms
dequeue 830 ms
suite completed

~~~ Running benchmark batch-add-remove ~~~
my-queue 2260 ms
double-ended-queue 1539 ms
dequeue 2179 ms
deque 2446 ms
suite completed
```

The `double-ended-queue` module seems to be using a circular buffer. I think
I can push the performance a bit further by using object pooling, but I want
to make that optional without affecting the performance too much.
