# Concurrency

process / thread

a process is a self-contained execution environment (i.e. an application), a thread is a single task of execution. You can have many threads in a process potentially. Threads can share process resources.

multi-threaded programming can improve performance. Threads can share the heap and execute in parallel, so more computation can happen in the same time.

## concepts:

synchronization:

  control synchronization: ensure 1 task can't start until another task has completed
  data access synchronization: ensure 2 tasks only get access to a piece of data one at a time

critical section: a section that can only be accessed by 1 task at a time (usually to protect a shared resource)

mutual exclusion: a mechanism to guarantee a critical section guarantee.


semaphore: a mechanism to control access to 1 or more units of a resource. It has a variable to show how many resources can be used and 2 atomic operations to manage the value.

a mutex is a special type of semaphore that takes 1 values: free or busy, and only the task that sets busy can set free. it can be used to protect a critical section.

monitor: A monitor is a mechanism to get mutual exclusion over a shared resource. It has a mutex, a condition variable, and two operations to wait for the condition and signal the condition. Once you signal the condition, only one of the tasks that are waiting for it continues with its execution.


## Potential concurrency problems:

race condition: depending on the order of task operation, the final value might be different. FIX: atomic operations to create thread-safety.

deadlock: 2 tasks are waiting for each other to complete. FIX: make a wait timeout. make synchronization more granular.

live lock: 2 tasks are cycling infinitely over the same state transitions.

resource starvation: a task due to poor scheduling never receives the resource it needs. FIX: implement Fairness in scehduling algorithms.


## Java threads:

user thread + daemon thread, a daemon thread runs in background, doesn't stop the process from terminating. A JVM process will shut down if there are no threads running.

Thread lifecycle: new, runnable, running, waiting, blocked, dead
new -> runnable when thread is started
runnable -> running when scheduler allocated CPU to threads in pool

start a thread with `Thread.start()`
pause a thread with `Thread.sleep()`

thread priority 1 - 10 - a signal to the OS on how to prioritise scheduling of threads - no guarantees.

thread communication/ thread safety:

main use: synchronized block - synchronize using any object:
this means there is a gurantee that only 1 thread can be executing inside the block at one time. wait(), notify() and notifyall() should always therefore be executed inside a synchronized block because they all operate by having the thread receive the object Monitor.

wait() - will wait indefinitely for a notify() or notifyall(), or can wait for a specified amount of time

notify() will notify 1 thread that is waiting() to wake up and continue execution, notifyall() will notify all threads that are waiting()



volatile means that threads don't cpu cached values - always from main memory.
(for guarantees, reading and writing must be inside a synchronized block to ensure atomicity)


ThreadLocal: all Threads share the variables of an instance object. Therefore to ensure thread safety, synchronized should be used. Another option is to not have a variable shared, and use a ThreadLocal variable.

Deadlock: when 2 or more threads are waiting on each other so never complete.

Threadpool: manages the pool of worker threads, lowers thread initialisation cost if the thread has already been created in the pool.
