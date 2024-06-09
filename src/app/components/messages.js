import React, { useState, useEffect } from 'react';
import Image from "next/image";
import bot from '../../../public/bot.png';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

function Messages() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'formSubmissions'));
                const messagesData = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    const message = {
                        id: doc.id,
                        name: data.name || '', // If name is missing, default to empty string
                        message: data.message || '', // If message is missing, default to empty string
                        time: data.time ? data.time.toDate().toLocaleTimeString() : '', // Check if time exists before calling toDate()
                        selectedChip: data.selectedChip || '' // If selectedChip is missing, default to empty string
                    };
                    return message;
                });
                setMessages(messagesData);
            } catch (error) {
                console.error('Error fetching messages: ', error);
            }
        };

        fetchMessages();

        // Clean up function
        return () => {
            // Any cleanup tasks can go here
        };
    }, []);

    return (
        <div>
            {messages.map(message => (
                <div key={message.id} className="flex items-start gap-3 pb-4">
                    <Image className="w-8 h-8 rounded-full" src={bot} alt="Jese image" />
                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">{message.name}</span>
                            <span className="text-sm font-normal text-gray-500 dark:text-white">{message.time}</span>
                        </div>
                        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{message.message}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Messages;
