---
title: 105 C++ STL Algorithms Cheatsheet
description: This post is like a transcript or "Ctrl+F-able" version of [CppCon 2018 Jonathan Boccara "105 STL Algorithms in Less Than an Hour"](https://www.youtube.com/watch?v=2olsGf6JIkU). Feel free to use this as a cheatsheet or reference to prepare for your C++ technical interview.
---

![World Map of STL Algorithms](https://cdn.discordapp.com/attachments/972715461898829824/992489525509095564/world_map_of_cpp_STL_algorithms.png)
[Source](https://www.fluentcpp.com/)

## Lands of Permutation

### Province of Heaps

**make_heap**: creates a max heap out of a range of elements

**push_heap**: push the last element into its correct place in the heap

**pop_heap**: exchange the first element of the range with the last element

```cpp - C++
vector<float> numbers = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; // 0 1 2 3 4 5 6 7 8 9

// make heap
std::make_heap(begin(numbers), end(numbers)); // 9 8 6 7 4 5 2 0 3 1

// add element to heap
numbers.push_back(8.88); // 9 8 6 7 4 5 2 0 3 1 8.88
std::push_heap(begin(numbers), end(numbers)); // 9 8.88 6 7 8 5 2 0 3 1 4

// reset
vector<float> numbers = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
std::make_heap(begin(numbers), end(numbers)); // 9 8 6 7 4 5 2 0 3 1

// remove largest element (the root) from heap
std::pop_heap(begin(numbers), end(numbers)); // 8 7 6 3 4 5 2 0 1 9
numbers.pop_back(); // 8 7 6 3 4 5 2 0 1

```

### Shore of Sorting

**sort**: sorts a range into ascending order

`std::sort(s.begin(), s.end());`

**partial_sort**: sorts the first N elements of a range

`std::partial_sort(s.begin(), s.begin() + 5, s.end());`

**nth_element**: partially sorts the given range making sure that it is partitioned by the given element

```cpp - C++
// Finding the median
auto m = v.begin() + v.size()/2;
std::nth_element(v.begin(), m, v.end());
auto median = v[v.size()/2];
```

**sort_heap**: turns a max heap into a range of elements sorted in ascending order

**inplace_merge**: merges two ordered ranges in-place

### Region of Partitioning

**partition**: divides a range of elements into two groups

```cpp - C++
// partition even and odd numbers in the collection
auto it = std::partition(v.begin(), v.end(), [](int i) {return i % 2 == 0;});
```

**partition_point**: locates the partition point of a partitioned range

### Other Permutations

**rotate**: rotates the order of elements in a range

```cpp - C++
// simple rotation to the left
std::rotate(v.begin(), v.begin() + 1, v.end());

// simple rotation to the right
std::rotate(v.rbegin(), v.rbegin() + 1, v.rend())
```

**shuffle**: randomly re-orders elements in a range

**next_permutation**: generates the next greater lexicographic permutation of a range of elements

**is_permutation**: generates the next smaller lexicographic permutation of a range of elements

**reverse**: reverses the order of elements in a range

## Secret Runes

**stable\_\***: keeps the relative order

```cpp - C++
stable_sort
stable_partition
```

**is\_\***: returns a boolean to indicate the predicate

```cpp - C++
is_sorted
is_partitioned
is_heap
```

**is\_\*\_until**: returns the first iterator where the predicate is no longer true

```cpp - C++
is_sorted_until
is_partitioned_until
is_heap_until
```

**\*\_copy**: do the function in a new collection

**\*\_if**: takes in a predicate instead of a value

```cpp - C++
// count elements divisible by 4
std::count_if(v.begin(), v.end(), [](int i){return i % 4 == 0;})
```

**\*\_n**: takes in the size instead of the end

## Lands of Queries

### Numeric Algorithms

**count**: returns the number of elements satisfying specific criteria

`std::count(v.cbegin(), v.cend(), target)`

**accumulate / reduce**: sums up a range of elements (use reduce for parallelization)

**partial_sum**: computes the partial sum of a range of elements

**inner_product**: computes the inner product (sum of products) of two ranges of elements

`std::inner_product(a.begin(), a.end(), b.begin(), 0);`

**adjacent_difference**: computes the differences between adjacent elements in a range

`std::adjacent_difference(v.begin(), v.end(), v.begin())`

**sample**(C++17): selects n random elements from a sequence

### Querying a property

**all_of / any_of / none_of**: checks if a predicate is true for all, any or none of the elements in a range
`std::all_of(v.cbegin(), v.cend(), [](int i){ return i % 2 == 0; })`

### Querying a property on 2 ranges

**equal**: determines if two sets of elements are the same

**lexicographical_compare**: returns true if one range is lexicographically less than another

**mismatch**: finds the first position where two ranges differ

### Searching a value

#### Not Sorted

**find**: finds the first element satisfying specific criteria

**adjacent_find**: finds the first two adjacent items that are equal (or satisfy a given predicate)

#### Sorted

**equal_range**: returns range of elements matching a specific key

**lower_bound**: returns an iterator to the first element not less than the given value

**upper_bound**: returns an iterator to the first element greater than a certain value

**binary_search**: determines if an element exists in a certain range

### Searching a Range

**search**: searches for a range of elements

**find_end**: finds the last sequence of elements in a certain range

### Searching a Relative Value

**max_element**: returns the largest element in a range

**min_element**: returns the smallest element in a range

**minmax_element**: returns the smallest and the largest elements in a range

## Glorious County of Algos on Sets

_Sets are sorted ranges._

**set_difference**: computes the difference between two sets

**set_intersection**: computes the intersection of two sets

**set_union**: computes the union of two sets

**set_symmetric_difference**: computes the symmetric difference between two sets

**includes**: returns true if one sequence is a subsequence of another

**merge**: merges two sorted ranges

## Territory of Movers

**copy**: copies a range of elements to a new location

**swap_ranges**: swaps two ranges of elements

**copy_backward**: copies a range of elements in backwards order

**move_backward**: moves a range of elements to a new location in backwards order

## Land of Value Modifiers

**fill**: copy-assigns the given value to every element in a range

**generate**: assigns the results of successive function calls to every element in a range

**iota**: fills a range with successive increments of the starting value

**replace**: replaces all values satisfying specific criteria with another value

## Island of Structures Changers

**remove**: removes elements satisfying specific criteria

**unique**: removes consecutive duplicate elements in a range

## Lonely Islands

**transform**: applies a function to a range of elements, storing results in a destination range

**for_each**: applies a function to a range of elements

## Raw Memory

**uninitialized\_\***: calls the constructor and do operation on uninitialized memory

**destroy**: calls the destructor
