package online.example.attendance;


public class personsdetails {
   private int PersonID;
   private String LastName;
   private String FirstName;
   private String Address;
   private String City;


   public personsdetails()
   {

   }

   public personsdetails(int PersonID,String LastName,String FirstName,String Address,String City)
   {
     this.PersonID=PersonID;
     this.LastName=LastName;
     this.FirstName=FirstName;
     this.Address=Address;
     this.City=City;
   }

   public int getPersonID() {
    return PersonID;
}

public void setPersonID(int PersonID) {
    this.PersonID = PersonID;
}


public String getLastName() {
    return LastName;
}

public void setLastName(String LastName) {
    this.LastName = LastName;
}


public String getFirstName() {
    return FirstName;
}

public void setFirstName(String FirstName) {
    this.FirstName = FirstName;
}


public String getAddress() {
    return Address;
}

public void setAddress(String Address) {
    this.Address = Address;
}

public String getCity() {
    return City;
}

public void setCity(String City) {
    this.City = City;
}

@Override
    public String toString() {
        return "{"
                    + "\"PersonID\":\"" + PersonID + "\","
                    + "\"LastName\":\"" + LastName + "\""
                    + "\"FirstName\":\"" + FirstName + "\""
                    + "\"Address\":\"" + Address + "\""
                    + "\"City\":\"" +City + "\""
                + "}";
    }




}
