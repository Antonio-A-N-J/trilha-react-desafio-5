import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://enbwxckysadpxnizjhrw.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuYnd4Y2t5c2FkcHhuaXpqaHJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3ODEwMDUsImV4cCI6MjA0NzM1NzAwNX0._cASrB546-HAgAxFHbomMkSUK1yECyt5gjHQdMC6yyQ",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuYnd4Y2t5c2FkcHhuaXpqaHJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3ODEwMDUsImV4cCI6MjA0NzM1NzAwNX0._cASrB546-HAgAxFHbomMkSUK1yECyt5gjHQdMC6yyQ",
        Range: "0-9"
    }
})