import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App(){
  return (
   <>
    <div>welcome to the app</div>
   </>
  );
}