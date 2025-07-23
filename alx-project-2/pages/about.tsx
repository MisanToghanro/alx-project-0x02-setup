import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";
const About: React.FC = () => {

    return(
        <div>
            <Header/>

            <main className="">
                <div className="">
                  <h1 className="text-center text-2xl font-semibold mb-2">About page</h1>
                  

                  <div className="flex justify-center items-center space-x-2">
                 <Button size="large" shape="rounded-full" title="Large"/>
                  <Button size="medium" shape="rounded-md" title="Medium"/>
                   <Button size="small" shape="rounded-sm" title="Small"/>
                  </div>



                </div>
            </main>
            
        </div>
    )
}
export default About;