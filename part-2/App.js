const App = () => (
    <div>
        <Tweet 
            username="ShelbyMarie123" 
            name="Shelby Kephart" 
            date={new Date().toDateString()} 
            message="Have a great day out there!!" />
        <Tweet 
            username="MarkKephart123" 
            name="Mark Kephart" 
            date={new Date().toDateString()}
            message="The sun is out, and it's time to make a tweet." />
        <Tweet 
            username="ThomasKephart123" 
            name="Thomas Kephart" 
            date={new Date().toDateString()}
            message="It's fun to make components with React!" />
    </div>
)
