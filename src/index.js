import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './contexts/Authcontext';
import { UserProvider } from './contexts/Usercontext';
import { TaskProvider } from './contexts/Taskcontext';
import { VerifyProvider } from './contexts/reducers/Verifycontext';
import { ResponseProvider } from './contexts/Responsecontext';
import { RankingProvider } from './contexts/rankingcontext';
import { ImpressionProvider } from './contexts/impressioncontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <UserProvider>
            <TaskProvider>
                <VerifyProvider>
                    <ResponseProvider>
                        <RankingProvider>
                            <ImpressionProvider>
                <App />
                </ImpressionProvider>
                </RankingProvider>
                </ResponseProvider>
                </VerifyProvider>
        
        </TaskProvider>
        </UserProvider>
        
    </AuthProvider>
    
 
);

