import React, { useState, useEffect } from "react";
import { getCalUsername, getCalEventName } from "@/lib/calApi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface BookDemoModalProps {
  buttonText?: string;
  buttonClassName?: string;
  calUsername?: string;
  calEventName?: string;
}

const BookDemoModal = ({
  buttonText = "Book a Demo",
  buttonClassName = "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white border-none shadow-lg shadow-purple-900/20 transition-all duration-300 hover:shadow-purple-900/30 rounded-lg",
  calUsername = getCalUsername(), // Get username from environment variables with fallback
  calEventName = getCalEventName(), // Get event name from environment variables with fallback
}: BookDemoModalProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setError(null);
    }
  }, [isOpen]);

  // Handle Cal.com iframe load events
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setError("Failed to load the booking calendar. Please try again later.");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={buttonClassName}>{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] md:max-w-[1000px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white mb-2">
            Book a Demo with Our Team
          </DialogTitle>
        </DialogHeader>

        <div className="relative min-h-[600px] mt-4 rounded-lg overflow-hidden bg-[#0B0B0B] border border-purple-500/20">
          {/* Loading state */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0B0B0B]/80 z-10">
              <div className="flex flex-col items-center">
                <Loader2 className="h-8 w-8 text-purple-500 animate-spin mb-2" />
                <p className="text-gray-300">Loading calendar...</p>
              </div>
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0B0B0B]/80 z-10">
              <Alert variant="destructive" className="max-w-md">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </Button>
              </Alert>
            </div>
          )}

          {/* Cal.com Embed with Dark Theme */}
          <div className="relative w-full h-full">
            <style>
              {`
                .cal-embed-iframe {
                  background-color: #0B0B0B !important;
                }
                .cal-embed-iframe::-webkit-calendar-picker-indicator {
                  filter: invert(1) !important;
                }
              `}
            </style>
            <iframe
              src={`https://cal.com/${calUsername}/${calEventName}?embed=true&hideBranding=true&layout=column_view&theme=dark&primaryColor=%239333EA&backgroundColor=0B0B0B&textColor=ffffff`}
              width="100%"
              height="700px"
              frameBorder="0"
              style={{ minHeight: "600px", width: "100%" }}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              title="Book a demo calendar"
              className="cal-embed-iframe bg-[#0B0B0B] rounded-lg"
              allow="camera; microphone; autoplay; fullscreen"
            />
          </div>
          {/* Note: Using column_view layout with enhanced dark theme parameters */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookDemoModal;
