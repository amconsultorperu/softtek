namespace API.Errors
{
    public class ApiException
    {
         public ApiException(int sattusCode, string message= null, string detail= null)
        {
            SattusCode = sattusCode;
            Message = message;
            Detail = detail;
        }

        public int SattusCode { get; set; }
        public string Message { get; set; }
        public string Detail { get; set; }
    }
}