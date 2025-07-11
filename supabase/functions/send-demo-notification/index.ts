
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface DemoRequest {
  id: number;
  full_name: string;
  work_email: string;
  company_name: string;
  company_type: string;
  message: string;
  created_at: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { record }: { record: DemoRequest } = await req.json();
    console.log("Processing demo request notification:", record);

    // Create email content
    const emailSubject = `New Demo Request from ${record.full_name}`;
    const emailHtml = `
      <h2>New Demo Request Submitted</h2>
      <p><strong>Name:</strong> ${record.full_name}</p>
      <p><strong>Email:</strong> ${record.work_email}</p>
      <p><strong>Company:</strong> ${record.company_name}</p>
      <p><strong>Company Type:</strong> ${record.company_type}</p>
      <p><strong>Message:</strong> ${record.message || 'No message provided'}</p>
      <p><strong>Submitted:</strong> ${new Date(record.created_at).toLocaleString()}</p>
      <hr>
      <p><em>This is an automatic notification from your demo request form.</em></p>
    `;

    // Send email to both recipients using verified jinko.so domain
    const emailResponse = await resend.emails.send({
      from: "Kevin <kevin@jinko.so>",
      to: ["kevin@jinko.so", "sebastien@jinko.so"],
      subject: emailSubject,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      emailId: emailResponse.data?.id 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-demo-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
