#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <time.h>

/**
 * Executes the command "cat scores | grep Lakers".  In this quick-and-dirty
 * implementation the parent doesn't wait for the child to finish and
 * so the command prompt may reappear before the child terminates.
 *
 */

int randNumGen(){
  srand((time(NULL)*390));
  int randomNum = ((rand()%1)+1);
  return randomNum;
}

int main(int argc, char **argv)
{
  int pipefd[2];
  int pid, pid2;
  
  char *cat_args[] = {"cat", "scores", NULL};
  char *grep_args[] = {"grep", "-i", argv[0], "scores", NULL};
  char *sort_args[] = {"sort", "scores", NULL};
  
  // make a pipe (fds go in pipefd[0] and pipefd[1])
  
  pipe(pipefd);
  
  pid = fork();
  
  if(pid == 0){
    dup2(pipfd[0], 0);
    close(pipefd[1]);
    execvp("grep", grep_args);
  }
  else{
    pid2 = fork();
    if(pid2 == 0){
      sleep(randNumGen());
      dup2(pipefd[1], 1);
      
      close(pipefd[0]);
      execvp("sort", sort_args);
    }
    
    dup2(pipefd[1], 1);
  }
}