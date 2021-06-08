#include <GL/gl.h>
#include <GL/glut.h>
void display(void)
{
/* clear all pixels */
glClear(GL_COLOR_BUFFER_BIT);
/* draw white polygon (rectangle) with corners at
* (0.25, 0.25, 0.0) and (0.75, 0.75, 0.0)
*/
glBegin(GL_QUADS);
glColor3ub(0,0,255);
glVertex3i(5,5,0);
glVertex3i(40,5,0);
glVertex3i(35,35,0);
glVertex3i(10,35,0);
glEnd();

glBegin(GL_QUADS);
glColor3ub(0,0,255);
glVertex3i(45,5,0);
glVertex3i(45,35,0);
glVertex3i(80,35,0);
glVertex3i(80,5,0);
glEnd();

glBegin(GL_TRIANGLES);
glColor3ub(0,255,0);
glVertex3i(45,35,0);
glVertex3i(80,35,0);
glVertex3i(62.5,55,0);
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
glutInit(&argc, argv);
glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);
glutInitWindowSize (600, 600);
glutInitWindowPosition (100, 100);
glutCreateWindow ("hello");
init ();
glutDisplayFunc(display);
glutMainLoop();
return 0; /* ISO C requires main to return int. */
}

