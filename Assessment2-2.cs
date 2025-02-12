using System;
class Program
{
    static void Main()
    {
        Console.Write("Enter the number of levels: ");
        int levels = int.Parse(Console.ReadLine());
        
        PrintPyramid(levels);
    }
    
    static void PrintPyramid(int levels)
    {
        for (int i = 1; i <= levels; ++i)
        {
            for (int j = 1; j <= i; ++j)
            {
                Console.Write("* ");
            }
            Console.WriteLine();
        }
    }
}
