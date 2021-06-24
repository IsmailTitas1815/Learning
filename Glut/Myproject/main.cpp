#include <GL/gl.h>
#include <GL/glut.h>
#include<stdio.h>
int x1,x2,y1,y2,dy,dx,p,i=0;
void display(void)
{
glClear(GL_COLOR_BUFFER_BIT);

glColor3ub(255,255,255);
glBegin(GL_POINTS);

while(i<=dx)
{
    if(p<0)
    {
        x1 = x1+1;
        p = p+(2*dy);
        glVertex3i(x1,y1,0);
//        printf("%d %d",x1,y1);
    }
    else
    {
        x1 = x1+1;
        y1 = y1+1;
        p = p+(2*dy)-(2*dx);
        glVertex3i(x1,y1,0);
//        printf("%d %d",x1,y1);
    }
    i++;

}
glEnd();


glFlush ();
}
void init (void)
{
/* select clearing (background) color */
glClearColor (0.0, 0.0, 0.0, 0.0);
/* initialize viewing values */
glMatrixMode(GL_PROJECTION);
glLoadIdentity();
glOrtho(0, 100, 0, 100, -10.0, 10.0);
}
/*
* Declare initial window size, position, and display mode
* (single buffer and RGBA). Open window with "hello"
* in its title bar. Call initialization routines.
* Register callback function to display graphics.
* Enter main loop and process events.
*/
int main(int argc, char** argv)
{
    printf("Enter the Value of x1: ");
    scanf("%d", &x1);
    printf("Enter the Value of y1: ");
    scanf("%d", &y1);
    printf("Enter the Value of x2: ");
    scanf("%d", &x2);
    printf("Enter the Value of y2: ");
    scanf("%d", &y2);

    dy=y2-y1;
    dx=x2-x1;
    p=(2*dy)-dx;



glutInit(&argc, argv);
glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);
glutInitWindowSize (600, 600);
glutInitWindowPosition (100, 100);
glutCreateWindow ("Ismail 181-15-1815");
init ();
glutDisplayFunc(display);
glutMainLoop();
return 0; /* ISO C requires main to return int. */
}

