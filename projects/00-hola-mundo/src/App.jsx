import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName="jacurtido" initialIsFollowing>
                José Antonio curtido
            </TwitterFollowCard>

            <TwitterFollowCard userName="midudev">
                Miguel Ángel Durán
            </TwitterFollowCard>
        </section>
    )
}