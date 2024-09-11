---
title: Variables
publishDate: 2024-08-17 00:00:00
img: /assets/CatProgrammer.jpg
img_alt: Cats in cyber programming spaces.
description: |
tags:
  - Let
  - Var
  - Const
---


# Using Variables


![Gift.jpeg](../../../assets/Gift.jpeg)

### What is a Variable?

A variable is a "place" to store data. We can use variables to store goods, visitors, and other types of data.

To create a variable in JavaScript, you need to use the keyword `let`.

The following statement creates (or declares) a variable named "label":

```js
let label;
```

Now we can store data in it using the assignment operator `=`:

```js
let label;
label = 'Surprise!'; // stores the string 'Surprise!' in the variable named label
```

The string is now stored in the memory associated with the variable. We can use it by referencing the variable's name:

```js
let label;
label = 'Surprise!';

alert(label); // shows the content of the variable
```

For clarity, we can combine the variable declaration and assignment in a single line:

```js
let label = 'Surprise!'; // defines a variable and assigns a value

alert(label); // Surprise!
```

We can also declare multiple variables in one line:

```js
let user = 'Mary', age = 25, message = 'Hello';
```

This might seem shorter, but it's not recommended. For better readability, use one line per variable.

The second method is slightly longer but easier to read:

```js
let user = 'Mary';
let age = 25;
let message = 'Hello';
```

In older scripts, you might encounter another keyword: `var` instead of `let`:

```js
var label = 'Surprise';
```

The `var` keyword works almost the same as `let`. It also declares variables but does so in a slightly different, "old" way.

There are subtle differences between `let` and `var`.

![MyMemAboutConst.png](../../../assets/MyMemAboutConst.png)

### Naming Variables

In JavaScript, there are two rules for creating variable names:

1. The name can consist only of letters, digits, and the characters `$` and `_`.
2. The name cannot start with a digit.

Examples of valid variable names:

```js
let userName;
let cat999;
```

If a variable name consists of several words, the camelCase convention is usually used. This means that the subsequent words after the first one start with a capital letter, for example, `myVeryLongName`.

Additionally, the symbols `$` and `_` are allowed in variable names and are treated as ordinary letters with no special meaning.

Examples of valid variable names:

```js
let $ = 9; // variable named "$"
let _ = 1; // variable named "_"

alert($ + _); // result: 10
```

Examples of invalid variable names:

```js
let 9a; // name cannot start with a digit
let my-cat; // the '-' character is not allowed in variable names
```

It's important to note that JavaScript is case-sensitive, so variables named `apple` and `APPLE` are two different variables.

### Everyday Analogy of a Variable

We can easily understand the concept of a "variable" by imagining it as a "gift" for data, with a unique label on it.

For example, a variable with a name label can be imagined as a gift marked with a "label" with the value "Surprise" inside:

We can place any value inside the gift.

We can also change it as many times as we want:

```js
let label;

label = 'Surprise';

label = 'doll'; // value changed

alert(label);
```

When the value is changed, the old data is removed from the variable.

We can also declare two variables and copy data from one to the other.

```js
let surprise = 'Surprise doll';
let doll;

// copy 'Surprise doll' from surprise to doll
doll = surprise;

// now both variables have the same data
alert(surprise); // Surprise doll!
alert(doll); // Surprise doll!
```

![BoxLabel.png](../../../assets/BoxLabel.png)


![CatInBox.png](../../../assets/CatInBox.png)


## Double Declaration Causes an Error!

![CatMem.jpg](../../../assets/CatMem.jpg)

A variable should only be declared once.

Declaring the same variable again causes an error:

```js
let label = "This";

// repeating 'let' causes an error
let label = "That"; // SyntaxError: 'label' has already been declared
```

So, we should declare a variable once and then refer to it without using `let`.

In some languages, once a value is stored in the “gift,” it stays there forever. If we need to store something else, the language forces us to create a new box (declare a new variable). We cannot reuse the old one.

## **Reserved Names**

There is a list of reserved words that cannot be used as variable names because they are used by the language itself.

For example: `let`, `class`, `return`, and `function` are reserved.

The code below triggers a syntax error:

```js
let let = 8; // cannot name a variable "let", error!
let return = 8; // cannot name it "return" either, error!
```

## **Const**

<video width="100%" height="500" controls>
  <source src="/assets/PartyITAwesome.mp4" type="video/mp4">
</video>

To declare a constant variable, we use `const` instead of `let`:

```js
const myAwesomeParty = '08/17/2024';
```

A variable declared with `const` is called a "constant" and cannot be reassigned. Attempting to change the value will result in an error:

```js
const myAwesomeParty = '08/17/2024';

myAwesomeParty = '06/07/2027'; // error, cannot reassign a new value to a constant!
```

When a developer is sure that a variable’s value will not change, they can declare it as a constant using `const` to ensure and communicate this to others.

## **Constants in Uppercase**

A common practice is to use constants as aliases for hard-to-remember values known before the program runs. Such constants are written in uppercase with underscores.

For example, we can define constants for different stages of party preparation:

```js
const STEP_INVITATIONS_SENT = "Invitations Sent";
const STEP_DECORATIONS_DONE = "Decorations Done";
const STEP_CATERING_ORDERED = "Catering Ordered";
const STEP_MUSIC_SETUP = "Music Setup Complete";

// ...when tracking the preparation progress
let currentStep = STEP_DECORATIONS_DONE;
console.log(currentStep); // Decorations Done
```

Benefits:

- `STEP_DECORATIONS_DONE` is more understandable than manually typing the description in the code.
- `STEP_DECORATIONS_DONE` reduces the risk of errors compared to using plain text.
- `STEP_DECORATIONS_DONE` is more meaningful, making the code easier to read and understand.

When it comes to naming constants, it's important to know when to use uppercase and when to give them regular names.

A constant means the variable’s value remains unchanged. Some constants are predefined, such as the stages of party preparation, while others may be determined during execution but remain unchanged after assignment.

For example:

```js
const guestsArrivedAt = new Date(); // time when guests arrived
```

The value of `guestsArrivedAt` is determined during the party, so its name uses lowercase letters. However, it is still a constant because once the time is set, it does not change.

Constants in uppercase are typically used for values known and fixed in advance, like the stages of party preparation.

## **Choosing Good Names**

Choosing appropriate variable names is crucial, especially when planning a party. A variable's name should clearly and accurately reflect the data it holds. The ability to create good variable names is one of the most important skills in programming.

Variable names should be:

- **Understandable to others**: For example, instead of using generic names like `a` or `b`, it’s better to use names that convey context, like `guestList` or `partyTheme`.
- **Without abbreviations**: Avoid shortening names like `gL` for `guestList`, unless absolutely necessary and understood by everyone on the team.
- **As descriptive and concise as possible**: Names like `drinks` or `decorations` are much better than vague names like `items` or `stuff`, as they more accurately describe what is stored in the variable.
- **Consistent**: If you name a guest list `guestList`, other guest-related variables should have similar names, like `confirmedGuests` or `vipGuests`, not `attendeesList` or `specialInvitees`. This consistency makes the code easier to understand.

Example of bad practice:

```js
let g = ["Alice", "Bob", "Charlie"]; // "g" doesn't clearly indicate it's a guest list
let theme = "Hawaiian"; // better than "t", but still too general
```

Example of good practice:

```js
let guestList = ["Alice", "Bob", "Charlie"]; // clear and understandable
let partyTheme = "Hawaiian"; // immediately indicates it’s the party theme
```

Using proper variable names makes the code more readable and understandable, both for you and for others who might review or edit it later.

## **Summary**

We can create variables to store data using the keywords `var`, `let`, or `const`.

- `let` – the modern way to create variables.
- `var` – the old method, found in older scripts.
- `const` – works like `let`, but the variable's value cannot be changed after it's set.

Now, variables should be clear and easy to understand, so it’s immediately obvious what they store.

## Finish

### Now you know everything about variables.

## "It's a piece of cake for you!" 


![FinishMem.jpg](../../../assets/FinishMem.jpg)