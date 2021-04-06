//#include<stdio.h>
//
//void rcomment(int c);
//void incomment(void);
//void echo_quote(int c);
//
//int main(void)
//{
//    int c,d;
//
//    printf(" To Check comment(#) in python \n");
//
//    while((c=getchar())!=EOF)
//        rcomment(c);
//
//    return 0;
//}
//
//void rcomment(int c)
//{
//    int d;
//
//    if( c == '/')
//    {
//        if((d=getchar())=='*')
//         incomment();
//        else if( d == '/')
//        {
//            putchar(c);
//            rcomment(d);
//        }
//        else
//        {
//            putchar(c);
//            putchar(d);
//        }
//    }
//    else if( c == '\''|| c == '"')
//        echo_quote(c);
//    else
//        putchar(c);
//
//}
//
//void incomment()
//{
//    int c,d;
//
//    c = getchar();
//    d = getchar();
//
//    while(c!='*' || d !='/')
//    {
//        c =d;
//        d = getchar();
//    }
//}
//
//void echo_quote(int c)
//{
//    int d;
//
//    putchar(c);
//
//    while((d=getchar())!=c)
//    {
//        putchar(d);
//
//        if(d == '\\')
//            putchar(getchar());
//    }
//    putchar(d);
//}

//Ans to the question no 3

//#include <string.h>
//#include <stdio.h>
//#include <stdlib.h>
//
//void commentFinding(char);
//void lineComment();
//FILE *file1, *file2;
//int main()
//{
//    char ch;
//    file1 = fopen("inputSanjida.txt", "r");
//    file2 = fopen("outputRahmanTrisha.txt", "w");
//
//    while ((ch = fgetc(file1)) != EOF)
//    {
//        commentFinding(ch);
//    }
//    fclose(file1);
//    fclose(file2);
//    printf("\n");
//    return 0;
//}
//void commentFinding(char ch)
//{
//    char ch2;
//    if (ch == '#')
//    {
//        ch2 = fgetc(file1);
//        if (ch2 != '#')
//        {
//            lineComment();
//        }
//        else
//        {
//            fputc(ch, file2);
//            fputc(ch2, file2);
//        }
//    }
//    else
//    {
//        fputc(ch, file2);
//    }
//}
//void lineComment()
//{
//    char e;
//    while ((e = fgetc(file1)) != EOF)
//    {
//        if (e == '\n')
//        {
//            return;
//        }
//    }
//}

//Ans to the question no 2

//#include<stdio.h>
//#include<string.h>
//int main()
//{
//    char s[100]="result=first+second/third";
//
//    char *word;
//    word=strtok(s," ;=*+/");
//
//    while(word!=NULL)
//    {
//         printf("%s\n",word);
//         word=strtok( NULL," ;=*+/");
//
//    }
//
//    return 0;
//}

//Ans to the question no 1
//
//#include <stdio.h>
//#include <string.h>
//int main()
//{
//    char str1[1000]=">Rosalind_6404";
//    char str2[1000]="CCTGCGGAAGATCGGCACTAGAATAGCCAGAACCGTTTCTCTGAGGCTT";
//    char str3[1000]=">Rosalind_5959";
//    char str4[1000]="CCATCGGTAGCGCATCCTTAGTCCAATTAAGTCCCTATCCAGGCGCTCC";
//    char str5[1000]=">Rosalind_0808";
//    char str6[1000]="CCACCCTCGTGGTATGGCTAGGCATTCAGGAACCGGAGAACGCTTCAGA";
//    char str7[1000]=">Rosalind_0809";
//    char str8[1000]="AGCTATAG";
//    char concat[1000];
//
//    printf("Length of string 1 = %d \n",strlen(str1));
//    printf("Length of string 2 = %d \n",strlen(str2));
//    printf("Length of string 3 = %d \n",strlen(str3));
//    printf("Length of string 4 = %d \n",strlen(str4));
//    printf("Length of string 5 = %d \n",strlen(str5));
//    printf("Length of string 6 = %d \n",strlen(str6));
//    printf("Length of string 7 = %d \n",strlen(str7));
//    printf("Length of string 8 = %d \n",strlen(str8));
//
//    strcpy(concat,str1);
//
//    strcat(concat, str2);
//    strcat(concat, str3);
//    strcat(concat, str4);
//    strcat(concat, str5);
//    strcat(concat, str6);
//    strcat(concat, str7);
//    strcat(concat, str8);
//
//    printf("Final concat string = %s \n\n",concat);
//    printf("Length of concat string = %d \n\n",strlen(concat));
//
//    char *word;
//    word=strtok(concat,">");
//
//    printf("After performing tokenization of the final concatenated string using the symbol(>): ");
//
//    while(word!=NULL)
//    {
//         printf("%s\n",word);
//         word=strtok( NULL,">");
//    }
//
//    return 0;
//}
