import React from 'react'
import { PrismJs } from './Extra/PrismJs'


export const Code = () => {

    const ex2= ` let a=10,
    let b=20,
    let c=a+b;
    

// C program to illustrate the use of if-else
#include <stdio.h>
 
int main()
{
 
    // if else statement for true condition
    if (1) {
        printf("The if block  is executed.\n");
    }
    else {
        printf("The else block is executed\n");
    }
 
    return 0;
}`
  return (
    <div>Newtask
        <h1>hlo this side Deepak </h1>
        <pre>
          <Code code={ex2} language="javascript"></Code>
        </pre>
        <p>hlo jkjfhjdkfhghdgjhfgjhdgf</p>

    </div>
  )
}
