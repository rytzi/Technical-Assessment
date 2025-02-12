using System;
class Program
{
    static void Main()
    {
        string input = "Hello, World!";
        string reversed = ReverseString(input);
        Console.WriteLine(reversed);
    }
        static string ReverseString(string s)
    {
        char[] arr = s.ToCharArray();
        Array.Reverse(arr);
        return new string(arr);
    }
}
