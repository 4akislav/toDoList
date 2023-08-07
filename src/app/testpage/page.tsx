import NewTaskForm from "../components/NewTaskForm";

export default async function Page () {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // throw Error("Bazinga")
    
    return (<div><img 
        src="/gifs/gachi.gif"
        alt="Animated GIF"
        width="250"
        className="d-inline-block align-top"
        style={{marginLeft: "500px", marginTop: "30px"}}/>
        <NewTaskForm />
    </div>
    );
};          