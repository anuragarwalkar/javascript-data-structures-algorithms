// Online C# Editor for free
// Write, Edit and Run your C# code using C# Online Compiler

using System;

public class HelloWorld
{

    public static void Main(string[] args)
    {

        string[] getSum(int number)
        {
            return number.ToString().split("");
        }

        Console.WriteLine(getSum(1000));
    }
}